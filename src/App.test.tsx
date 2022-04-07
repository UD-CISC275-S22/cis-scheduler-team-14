import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("DoubleHalf Component tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("renders the course name somewhere", () => {
        const linkElement = screen.getByText(/CISC275/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There are Clear All Courses and Clear All Semesters buttons", () => {
        expect(
            screen.getByRole("button", { name: /Clear All Courses/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Clear All Semesters/i })
        ).toBeInTheDocument();
    });
});
