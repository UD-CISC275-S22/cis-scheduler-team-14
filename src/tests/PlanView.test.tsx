import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("PlanView tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("The website display", () => {
        const welcomeButton = screen.getByText(
            /Click here to learn how to get started!/i
        );
        const bannerImage = screen.getByTestId("header-image");
        expect(welcomeButton).toBeInTheDocument();
        expect(bannerImage).toBeInTheDocument();
    });
    test("The first plan appears (with tab)", () => {
        const tabPanel = screen.getByTestId("tab-panel");
        expect(tabPanel).toBeInTheDocument();
        const plan1Tab = screen.getByTestId("tab");
        expect(plan1Tab).toBeInTheDocument();
        const plan1Title = screen.getByTestId("plan-title");
        expect(plan1Title).toBeInTheDocument();
        const semester1View = screen.getByTestId("semesterView");
        expect(semester1View).toBeInTheDocument();
        const course1Views = screen.getAllByTestId("courseview");
        expect(course1Views.length).toBe(3);
    });
    test("Delete All Courses button works", () => {
        const deleteAllCoursesButton = screen.getByTestId(
            "deleteAllCoursesButton"
        );
        deleteAllCoursesButton.click();
        const course1Views = screen.queryAllByTestId("courseview");
        expect(course1Views.length).toBe(0);
    });
    test("Delete Semester button works", () => {
        const deleteSemesterButton = screen.getByTestId("deleteSemesterButton");
        deleteSemesterButton.click();
        const semester1View = screen.queryByTestId("semesterView");
        expect(semester1View).not.toBeInTheDocument();
    });
    test("Delete All Semesters button works", () => {
        const deleteAllSemestersButton = screen.getByTestId(
            "deleteAllSemestersButton"
        );
        deleteAllSemestersButton.click();
        const semester1View = screen.queryByTestId("semesterView");
        expect(semester1View).not.toBeInTheDocument();
    });
    test("Delete Plan button works", () => {
        const deletePlanButton = screen.getByTestId("deletePlanButton");
        deletePlanButton.click();
        const planView = screen.queryByTestId("planView");
        expect(planView).not.toBeInTheDocument();
    });
    test("Add Plan button works", () => {
        const addPlanButton = screen.getByTestId("addPlanButton");
        addPlanButton.click();
        const planView = screen.queryByTestId("planView");
        expect(planView).not.toBeInTheDocument();
        const addPlanModal = screen.getByTestId("addPlanModal");
        expect(addPlanModal).toBeInTheDocument();
        const inputPLANID = screen.getByTestId("inputPLANID");
        userEvent.type(inputPLANID, "{selectall}{delete}");
        userEvent.type(inputPLANID, "3");
        const savePlanButton = screen.getByTestId("savePlanButton");
        savePlanButton.click();
        const tabs = screen.queryAllByTestId("tab");
        expect(tabs).toHaveLength(2);
    });
    test("Add Semester button works", () => {
        const semester1View = screen.getAllByTestId("semesterView");
        expect(semester1View).toHaveLength(1);
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        const addSemesterModal = screen.getByTestId("addSemesterModal");
        expect(addSemesterModal).toBeInTheDocument();
        const INPUTyearbox = screen.getByTestId("INPUTyearbox");
        userEvent.type(INPUTyearbox, "{selectall}{delete}");
        userEvent.type(INPUTyearbox, "2023");
        fireEvent.click(screen.getByText("Fall"));
        fireEvent.click(screen.getByText("Spring"));
        const SAVEbutton = screen.getByTestId("SAVEbutton");
        SAVEbutton.click();
        const semesters = screen.getAllByTestId("semesterView");
        expect(semesters).toHaveLength(2);
    });
    test("Clicking on course opens it up, delete button works", () => {
        const courses = screen.getAllByTestId("courseview");
        expect(courses).toHaveLength(3);
        courses[0].click();
        const deletecoursebutton = screen.getAllByTestId("deletecoursebutton");
        fireEvent.click(deletecoursebutton[0]);
        const courses2 = screen.queryAllByTestId("courseview");
        expect(courses2).toHaveLength(2);
    });
    test("Clicking on course opens it up, edit works", () => {
        const courses = screen.getAllByTestId("courseview");
        expect(courses).toHaveLength(3);
        courses[0].click();
        const editcoursebutton = screen.getAllByTestId("editcoursebutton");
        fireEvent.click(editcoursebutton[0]);
        const editCourseModal = screen.getByTestId("editCourseModal");
        expect(editCourseModal).toBeInTheDocument();
        const INPUTcourseName = screen.getByTestId("INPUTcourseName");
        userEvent.type(INPUTcourseName, "{selectall}{delete}");
        userEvent.type(INPUTcourseName, "EDITED");
        const INPUTcourseCode = screen.getByTestId("INPUTcourseCode");
        userEvent.type(INPUTcourseCode, "{selectall}{delete}");
        userEvent.type(INPUTcourseCode, "EDITED101");
        const INPUTcourseDescription = screen.getByTestId(
            "INPUTcourseDescription"
        );
        userEvent.type(INPUTcourseDescription, "{selectall}{delete}");
        userEvent.type(INPUTcourseDescription, "EDITED");
        const INPUTcourseCredits = screen.getByTestId("INPUTcourseCredits");
        userEvent.type(INPUTcourseCredits, "{selectall}{delete}");
        userEvent.type(INPUTcourseCredits, "3");
        const INPUTcourseBreadth = screen.getByTestId("INPUTcourseBreadth");
        userEvent.type(INPUTcourseBreadth, "{selectall}{delete}");
        userEvent.type(INPUTcourseBreadth, "EDITED");
        const INPUTcoursePrereqs = screen.getByTestId("INPUTcoursePrereqs");
        userEvent.type(INPUTcoursePrereqs, "{selectall}{delete}");
        userEvent.type(INPUTcoursePrereqs, "EDITED");
        const INPUTcourseRestrictions = screen.getByTestId(
            "INPUTcourseRestrictions"
        );
        userEvent.type(INPUTcourseRestrictions, "{selectall}{delete}");
        userEvent.type(INPUTcourseRestrictions, "EDITED");
        const INPUTcourseSemesters = screen.getByTestId("INPUTcourseSemesters");
        userEvent.type(INPUTcourseSemesters, "{selectall}{delete}");
        userEvent.type(INPUTcourseSemesters, "EDITED");
        const saveChangesButton = screen.getByTestId("saveChangesButton");
        saveChangesButton.click();
    });
});
