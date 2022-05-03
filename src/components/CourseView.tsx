import React, { useState } from "react";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import Button from "@mui/material/Button";
import { Edit, NewReleases } from "@mui/icons-material";
import { EditCourseModal } from "./EditCourseModal";
import { Collapse } from "react-collapse";
import { Semester } from "../interfaces/semester";
import { MoveCourseModal } from "./MoveCourseModal";

export function CourseView({
    course,
    updateCourse,
    deleteCourse,
    setSemesters,
    semester,
    semesters
}: {
    course: Course;
    updateCourse: (oldCourse: Course, newCourse: Course) => void;
    deleteCourse: (course: Course) => void;
    setSemesters: (saveSemesters: Semester[]) => void;
    semester: Semester;
    semesters: Semester[];
}): JSX.Element {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    //Usestates for the transfer modal
    const [showTransferModal, setShowTransferModal] = useState<boolean>(false);
    const handleCloseTransferModal = () => setShowTransferModal(false);
    const handleShowTransferModal = () => setShowTransferModal(true);
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
            data-testid="courseview"
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
                {semesters.length > 1 && (
                    <Button
                        startIcon={<ChangeCircleIcon />}
                        variant="outlined"
                        color="primary"
                        className="m-2"
                        data-testid="transfercoursebutton"
                        onClick={handleShowTransferModal}
                    >
                        Transfer Course
                    </Button>
                )}
                <MoveCourseModal
                    show={showTransferModal}
                    handleClose={handleCloseTransferModal}
                    course={course}
                    setSemesters={setSemesters}
                    semester={semester}
                    semesters={semesters}
                ></MoveCourseModal>
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
