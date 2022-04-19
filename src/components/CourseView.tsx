import React, { useState } from "react";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Edit } from "@mui/icons-material";
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
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const [isOpened, toggleOpened] = useState<boolean>(false); //Usestate for react-collapse collapsable div to show/hide course info

    return (
        <div
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
            </h4>
            <h6>{course.credits} Credit(s)</h6>
            {/*Delete Course*/}
            <Button
                startIcon={<DeleteIcon />}
                variant="outlined"
                color="secondary"
                className="m-2"
                onClick={() => deleteCourse(course)}
            >
                Delete Course
            </Button>
            <Collapse isOpened={isOpened}>
                {/*Information hidden until course is expanded*/}
                <p>{course.description}</p>
                <p>Counts for: {course.creditTypes}</p>
                <p>Prerequisites: {course.prerequisites}</p>
                <p>
                    Restrictions:{" "}
                    {course.restrictions === "" ? "None" : course.restrictions}
                </p>
                <p>Semesters Offered: {course.semestersOffered}</p>
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
