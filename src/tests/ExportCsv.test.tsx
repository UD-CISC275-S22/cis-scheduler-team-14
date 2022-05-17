import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { ExportCsv } from "../components/ExportCsv";
import { Semester } from "../interfaces/semester";

describe("ExportCsv Test", () => {
    beforeEach(() => {
        render(<ExportCsv semesters={[]}></ExportCsv>);
    });

    test("There is a  Button", () => {
        expect(
            screen.getByRole("button", {
                name: /Export your Plan/i
            })
        ).toBeInTheDocument();
    });
});
