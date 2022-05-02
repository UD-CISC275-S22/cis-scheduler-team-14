import React, { useState } from "react";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Edit, NewReleases } from "@mui/icons-material";
import { EditCourseModal } from "./EditCourseModal";
import { Collapse } from "react-collapse";

export function CourseView({
    course,
    updateCourse,
    deleteCourse
}: {
    course: Course;
    updateCourse: (oldCourse: Course, newCourse: Course) => void;
    deleteCourse: (course: Course) => void;
}): JSX.Element {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [defaultCourseInfo] = useState<Course>(course);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const [isOpened, toggleOpened] = useState<boolean>(false); //Usestate for react-collapse collapsable div to show/hide course info

    return (
        <div
            className="draggable-course-view"
            onClick={() => toggleOpened(!isOpened)}
            style={{
                backgroundColor: "gainsboro",
                borderRadius: "25px",
                padding: "10px",
                border: "1px solid black"
            }}
        >
            {/*Information shown by default*/}
            <h4>
                {course.code} {course.name}{" "}
                {course.preReq !== "" ? (
                    <NewReleases style={{ color: "red" }} />
                ) : (
                    <></>
                )}
            </h4>
            <h6>{course.credits} Credit(s)</h6>
            <Collapse isOpened={isOpened}>
                {/*Information hidden until course is expanded*/}
                <p>{course.descr}</p>
                <p>Counts for: {course.breadth}</p>
                <p>Prerequisites: {course.preReq}</p>
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
                    onClick={() => deleteCourse(course)}
                >
                    Delete Course
                </Button>
                <EditCourseModal
                    show={showEditModal}
                    handleClose={handleCloseEditModal}
                    course={course}
                    updateCourse={updateCourse}
                    defaultCourseInfo={defaultCourseInfo}
                ></EditCourseModal>
            </Collapse>
        </div>
    );
}
