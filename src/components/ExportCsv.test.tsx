import React from "react";
import { render, screen } from "@testing-library/react";
import { ExportCsv } from "./ExportCsv";

describe("ImportCsv Test", () => {
    //beforeEach(() => {
    //    render(<ExportCsv />);
    //});

    test("There is a Export Button", () => {
        expect(
            screen.getByRole("button", {
                name: /Export Your Plan/i
            })
        ).toBeInTheDocument();
    });
});
