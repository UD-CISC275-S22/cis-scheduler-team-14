import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("renders the title somewhere", () => {
        const linkElement = screen.getByText(/UDCIS COURSE PLANNER/i);
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
