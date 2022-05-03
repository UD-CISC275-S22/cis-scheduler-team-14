import React from "react";
import { render, screen } from "@testing-library/react";
import { ImportCsv } from "../components/ImportCsv";

describe("ImportCsv Test", () => {
    beforeEach(() => {
        render(<ImportCsv />);
    });

    test("There is a Import Button", () => {
        expect(
            screen.getByRole("button", {
                name: /Import Your Plan/i
            })
        ).toBeInTheDocument();
    });
    test("Clicking the button shows where you can upload file.", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Import Your Plan/i
        });
        changeTypeButton.click();
        // Should be Multiple Choice
        const typeTextMC = screen.getByText(/Upload a File/i);
        expect(typeTextMC).toBeInTheDocument();
    });
});
