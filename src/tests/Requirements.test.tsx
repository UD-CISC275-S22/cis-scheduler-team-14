import React from "react";
import { render, screen } from "@testing-library/react";
import { ArtificialIntelligenceConc } from "../components/MajorRequirementLists/ArtificialIntelligenceConc";
import { BioinformaticsConc } from "../components/MajorRequirementLists/BioinformaticsConc";
import { CybersecurityConc } from "../components/MajorRequirementLists/CybersecurityConc";
import { DataSciConc } from "../components/MajorRequirementLists/DataSciConc";
import { HighPerfDataConc } from "../components/MajorRequirementLists/HighPerfDataConc";
import { HighPerfMathConc } from "../components/MajorRequirementLists/HighPerfMathConc";
import { TheoryContinuousConc } from "../components/MajorRequirementLists/TheoryContinuousConc";
import { TheoryDiscreteConc } from "../components/MajorRequirementLists/TheoryDiscreteConc";
import { UniversityRequirements } from "../components/MajorRequirementLists/UniversityRequirements";
import { BSRequirements } from "../components/MajorRequirementLists/BSRequirements";
import { BSMajorRequirements } from "../components/MajorRequirementLists/BSMajorRequirements";
import { BARequirements } from "../components/MajorRequirementLists/BARequirements";

function checkIfInList(currentCourses: string[], acceptable: string): boolean {
    return currentCourses.indexOf(acceptable) !== -1;
}
function checkIfInListMulti(
    currentCourses: string[],
    allowableCourses: string[]
): boolean {
    return allowableCourses.some((course: string) =>
        currentCourses.includes(course)
    );
}

describe("Testing RequirementViewers", () => {
    test("Artificial Intelligence Concentration", () => {
        render(
            <ArtificialIntelligenceConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const AICONC = screen.getByText(
            "Artificial Intelligence Concentration Requirements"
        );
        expect(AICONC).toBeInTheDocument();
    });
    test("Bioinformatics Concentration", () => {
        render(
            <BioinformaticsConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const BIOCONC = screen.getByText(
            "Bioinformatics Concentration Requirements"
        );
        expect(BIOCONC).toBeInTheDocument();
    });
    test("Cybersecurity Concentration", () => {
        render(
            <CybersecurityConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
            />
        );
        const CYBERCONC = screen.getByText(
            "Cybersecurity Concentration Requirements"
        );
        expect(CYBERCONC).toBeInTheDocument();
    });
    test("Data Science Concentration", () => {
        render(
            <DataSciConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const DATASCICONC = screen.getByText(
            "Data Science Concentration Requirements"
        );
        expect(DATASCICONC).toBeInTheDocument();
    });
    test("High Performance Data Concentration", () => {
        render(
            <HighPerfDataConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const HIGHPERFCONC = screen.getByText(
            "High Performance Computing - Data Concentration"
        );
        expect(HIGHPERFCONC).toBeInTheDocument();
    });
    test("High Performance Math Concentration", () => {
        render(
            <HighPerfMathConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const HIGHPERFMATHCONC = screen.getByText(
            "High Performance Computing - Math Concentration"
        );
        expect(HIGHPERFMATHCONC).toBeInTheDocument();
    });
    test("Theory - Continuous Concentration", () => {
        render(
            <TheoryContinuousConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const THEORYCCONC = screen.getByText(
            "Theory and Computation - Continuous Concentration"
        );
        expect(THEORYCCONC).toBeInTheDocument();
    });
    test("Theory - Discrete Concentration", () => {
        render(
            <TheoryDiscreteConc
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const THEORYDCONC = screen.getByText(
            "Theory and Computation - Discrete Concentration"
        );
        expect(THEORYDCONC).toBeInTheDocument();
    });
    test("University Requirements", () => {
        render(
            <UniversityRequirements
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const UNIVREQ = screen.getByText("University Requirements");
        expect(UNIVREQ).toBeInTheDocument();
    });
    test("BS Requirements", () => {
        render(<BSRequirements allCourses={["CISC 181", "CISC 210"]} />);
        const BSREQ = screen.getByText("BS Requirements");
        expect(BSREQ).toBeInTheDocument();
    });
    test("BS Major Requirements", () => {
        render(
            <BSMajorRequirements
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const BSMAJREQ = screen.getByText("Major Requirements");
        expect(BSMAJREQ).toBeInTheDocument();
    });
    test("BA Requirements", () => {
        render(
            <BARequirements
                allCourses={["CISC 181", "CISC 210"]}
                checkIfInList={checkIfInList}
                checkIfInListMulti={checkIfInListMulti}
            />
        );
        const BAREQ = screen.getByText("BA Requirements");
        expect(BAREQ).toBeInTheDocument();
    });
});
