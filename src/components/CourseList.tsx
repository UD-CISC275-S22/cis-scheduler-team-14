import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { EditCourseModal } from "./EditCourseModal";

export function CourseList({
    courses,
    updateCourses
}: {
    courses: Course[];
    updateCourses: (courses: Course[]) => void;
}): JSX.Element {
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course: Course) => (
                        <tr key={course.code}>
                            <td>
                                {
                                    <IconButton
                                        aria-label="edit"
                                        size="small"
                                        onClick={handleShowEditModal}
                                    >
                                        <Edit />
                                        <EditCourseModal
                                            show={showEditModal}
                                            handleClose={handleCloseEditModal}
                                            updateCourses={updateCourses}
                                            courses={courses}
                                            course={course}
                                        ></EditCourseModal>
                                    </IconButton>
                                }
                            </td>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
