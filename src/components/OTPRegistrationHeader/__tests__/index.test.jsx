import { render, screen } from "@testing-library/react";
import OTPRegistrationHeader from "..";

describe("OTPRegistrationHeader", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<OTPRegistrationHeader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the correct text", () => {
    render(<OTPRegistrationHeader />);
    expect(screen.getByPlaceholderText("ABHA Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Mobile Number")).toBeInTheDocument();
  });

  it("should render the correct text", () => {
    render(<OTPRegistrationHeader />);
    expect(
      screen.getByText("Please enter ABHA number you want to use with ABHA")
    ).toBeInTheDocument();
  });
});
