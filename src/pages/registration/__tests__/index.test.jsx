import Registration from ".."
import { fireEvent, render, screen } from "@testing-library/react";

describe("RegisterForm", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Registration />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the correct text", () => {
    render(<Registration />);
    expect(screen.getByText("Register")).toBeInTheDocument();
  })

  it("should render aadhar otp when clicked on Register button", () => {
    render(<Registration />);
    const registerButton = screen.getByText("Register");
    fireEvent.click(registerButton);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  })

});
