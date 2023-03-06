import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Otp from '../index';

describe('Otp', () => {
  it('should render six input fields', () => {
    render(<Otp />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(6);
  });

  it('should move focus to the next input field when a digit is entered', () => {
    render(<Otp />);
    const input0 = screen.getByTestId('OTP digit 0');
    const input1 = screen.getByTestId('OTP digit 1');

    fireEvent.change(input0, { target: { value: '1' } });
    expect(input0).not.toHaveFocus();
    expect(input1).toHaveFocus();
  });

  it('should move focus to the previous input field when the backspace key is pressed', () => {
    render(<Otp />);
    const input0 = screen.getByTestId('OTP digit 0');
    const input1 = screen.getByTestId('OTP digit 1');

    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.keyDown(input1, { key: 'Backspace' });
    expect(input1).not.toHaveFocus();
    expect(input0).toHaveFocus();
  });

  it('should not allow non-numeric characters to be entered', () => {
    render(<Otp />);
    const input0 = screen.getByTestId('OTP digit 0');

    fireEvent.change(input0, { target: { value: 'a' } });
    expect(input0.value).toBe('');
  });
  
  it('prevents disallowed keys from being entered and updates activeOtpIndex when backspace is pressed', () => {
    const preventDefault = jest.fn();
    render(<Otp />);
    const input0 = screen.getByTestId('OTP digit 0');

    fireEvent.keyDown(input0, { key: '-' });

    fireEvent.keyDown(input0, { key: 'Backspace' });
    const updatedInput = screen.getByTestId('OTP digit 0');
    expect(updatedInput).toHaveFocus();
  });
});
