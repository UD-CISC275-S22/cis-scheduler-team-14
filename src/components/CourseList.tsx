import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseList({ courses }: { courses: Course[] }): JSX.Element {
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
                                    <IconButton aria-label="edit" size="small">
                                        <Edit />
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
