import React from "react";
import { render, screen } from "@testing-library/react";
import { Welcomemessage } from "../components/WelcomeModal";

describe("WelcomeModal Test", () => {
    beforeEach(() => {
        render(<Welcomemessage />);
    });

    test("There is a click help button", () => {
        expect(
            screen.getByRole("button", {
                name: /Click Here To Learn How To Get Started!/i
            })
        ).toBeInTheDocument();
    });
    test("Clicking the button shows message.", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Click Here To Learn How To Get Started!/i
        });
        changeTypeButton.click();
        // Should be Multiple Choice
        const typeTextMC = screen.getByText(
            /Welcome to the UDCIS Course Planner!/i
        );
        expect(typeTextMC).toBeInTheDocument();
    });
});
