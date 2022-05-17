import React, { useState } from "react";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Edit, ExpandLess, ExpandMore, NewReleases } from "@mui/icons-material";
import { EditCourseModal } from "./EditCourseModal";
import { Collapse } from "react-collapse";

export function CourseView({
    course,
    updateCourse,
    deleteCourse,
    courses
}: {
    course: Course;
    updateCourse: (oldCourse: Course, newCourse: Course) => void;
    deleteCourse: (course: Course) => void;
    courses: Course[];
}): JSX.Element {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const [isOpened, toggleOpened] = useState<boolean>(false); //Usestate for react-collapse collapsable div to show/hide course info
    function prereqInList(
        currentCourses: Course[],
        acceptable: string
    ): JSX.Element {
        const coursesAsString = currentCourses.map((c) => c.code);
        if (coursesAsString.includes(acceptable)) {
            return (
                <span style={{ color: "green" }}>
                    <NewReleases />
                </span>
            );
        } else {
            return (
                <span style={{ color: "red" }}>
                    <NewReleases />
                </span>
            );
        }
    }
    const re = /:/gi;
    const re2 = / ;/gi;
    const fixedBreadth = course.breadth.replace(re, "").replace(re2, ",");
    return (
        <div
            onClick={() => toggleOpened(!isOpened)}
            style={{
                backgroundColor: "#ebebeb",
                borderRadius: "25px",
                padding: "10px",
                border: "1px solid black"
            }}
            data-testid="courseview"
        >
            {/*Information shown by default*/}
            <h4>
                {course.code} {course.name}{" "}
                {isOpened ? <ExpandLess /> : <ExpandMore />}
                {course.preReq !== ""
                    ? prereqInList(courses, course.preReq.slice(0, -1))
                    : null}
            </h4>
            <h6>{course.credits} Credit(s)</h6>
            <Collapse isOpened={isOpened}>
                {/*Information hidden until course is expanded*/}
                <p>{course.descr}</p>
                <p>
                    Counts for: {course.breadth === "" ? "None" : fixedBreadth}
                </p>
                <p>
                    Prerequisites:{" "}
                    {course.preReq === "" ? "None" : course.preReq}
                </p>
                <p>
                    Restrictions:{" "}
                    {course.restrict === "" ? "None" : course.restrict}
                </p>
                {course.typ !== "" && <p>Usually offered:{" " + course.typ}</p>}
                {/*Edit Course*/}
                <Button
                    startIcon={<Edit />}
                    variant="outlined"
                    color="secondary"
                    className="m-2"
                    data-testid="editcoursebutton"
                    onClick={handleShowEditModal}
                >
                    Edit Course
                </Button>
                {/*Delete Course*/}
                <Button
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="error"
                    className="m-2"
                    data-testid="deletecoursebutton"
                    onClick={() => deleteCourse(course)}
                >
                    Delete Course
                </Button>
                <EditCourseModal
                    show={showEditModal}
                    handleClose={handleCloseEditModal}
                    course={course}
                    updateCourse={updateCourse}
                ></EditCourseModal>
            </Collapse>
        </div>
    );
}
