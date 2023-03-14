import RegisterForm from "..";
import { fireEvent, render, screen } from "@testing-library/react";

describe("RegisterForm", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<RegisterForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render the correct text", () => {
        render(<RegisterForm />);
        expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Middle Name")).toBeInTheDocument();
    });

    it("should handle onChange field when user types input", () => {
        render(<RegisterForm />);
        const input = screen.getByPlaceholderText("Health ID");
        expect(input.value).toBe("");
        fireEvent.change(input, { target: { value: "1234567890" } });
        expect(input.value).toBe("1234567890");
    });
    
})