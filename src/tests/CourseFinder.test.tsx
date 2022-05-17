import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Testing CourseFinder", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("Searching for a course works", () => {
        const searchBar = screen.getByTestId("formCourseSearch");
        userEvent.type(searchBar, "CISC 181");
        expect("Introduction to Computer Science II").toBeInTheDocument();
        expect("ACCT 166: SPECIAL PROBLEM").not.toBeInTheDocument();
    });

    test("Clicking a course adds it to the course pool", () => {
        const searchCourses = screen.getAllByTestId("searchCourse");
        searchCourses[0].click();
        const addedCourse = screen.getByTestId("draggableCourse");
        expect(addedCourse).toContain("ACCT 166: SPECIAL PROBLEM");
    });

    test("Clear course pool button works", () => {
        const searchCourses = screen.getAllByTestId("searchCourse");
        searchCourses[2].click();
        searchCourses[1].click();
        searchCourses[0].click();
        const clearPoolButton = screen.getByTestId("clearPoolButton");
        clearPoolButton.click();
        const coursePool = screen.queryAllByTestId("draggableCourse");
        expect(coursePool.length).toBe(0);
    });
});
