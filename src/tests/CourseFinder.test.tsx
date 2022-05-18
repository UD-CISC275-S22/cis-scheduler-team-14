import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Testing CourseFinder", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("Searching for a course works", () => {
        const searchBar = screen.getByTestId("formCourseSearch");
        userEvent.type(searchBar, "CISC 181");
        const correctCourse = screen.getAllByTestId("searchCourse");
        expect(correctCourse.length).toBe(1);
    });

    test("Clicking a course adds it to the course pool", () => {
        const searchCourses = screen.getAllByTestId("searchCourse");
        searchCourses[0].click();
        const { getByText } = within(screen.getByTestId("draggableCourse"));
        expect(getByText("ACCT 166: SPECIAL PROBLEM")).toBeInTheDocument();
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
