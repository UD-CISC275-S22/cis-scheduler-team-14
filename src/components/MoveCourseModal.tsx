import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import CancelIcon from "@mui/icons-material/Cancel";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

export function MoveCourseModal({
    show,
    handleClose,
    course,
    setSemesters,
    semester,
    semesters
}: {
    show: boolean;
    handleClose: () => void;
    course: Course;
    setSemesters: (semesters: Semester[]) => void;
    semester: Semester;
    semesters: Semester[];
}) {
    const [availableSemesters] = useState<Semester[]>(semesters);

    const [transferSem, setTransferSem] = useState<string>(
        availableSemesters[0].season + availableSemesters[0].year
    );
    //Updates the chosen transfer semester
    function updateTransferSem(event: React.ChangeEvent<HTMLSelectElement>) {
        setTransferSem(event.target.value);
    }

    function transferCourse() {
        const targetSem = availableSemesters.find((sem: Semester) => {
            return sem.season + sem.year === transferSem;
        });
        if (targetSem !== undefined) {
            const indexOfRemovalCourse = semester.courses.findIndex(
                (c: Course): boolean => c.code === course.code
            );
            const newOriginCourses = semester.courses.splice(
                indexOfRemovalCourse,
                1
            );
            const newOriginSem = {
                ...semester,
                courses: newOriginCourses
            };
            const originIndex = semesters.findIndex(
                (sem: Semester): boolean =>
                    sem.season + sem.year === semester.season + semester.year
            );
            const targetCourses = [...targetSem.courses, course];
            const newSem = { ...targetSem, courses: targetCourses };
            const indexOfTarget = semesters.findIndex(
                (sem: Semester): boolean =>
                    sem.season + sem.year === transferSem
            );
            const newSemesters = semesters.splice(indexOfTarget, 1, newSem);
            const newnewSemesters = newSemesters.splice(
                originIndex,
                1,
                newOriginSem
            );
            setSemesters(newnewSemesters);
        }
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            data-testid="movecoursemodal"
        >
            <Modal.Header>
                <Modal.Title>Transfer Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="semesterTransfer">
                    <Form.Label>Transfer course to:</Form.Label>
                    <Form.Select
                        value={transferSem}
                        onChange={updateTransferSem}
                    >
                        {availableSemesters.map((sem: Semester) => (
                            <option
                                key={sem.season + sem.year}
                                value={sem.season + sem.year}
                            >
                                {sem.season + " " + sem.year}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button
                    variant="outlined"
                    className="m-2"
                    startIcon={<PublishedWithChangesIcon />}
                    onClick={transferCourse}
                    color="primary"
                >
                    Transfer Course
                </Button>
                <Button
                    variant="outlined"
                    className="m-2"
                    startIcon={<CancelIcon />}
                    onClick={handleClose}
                    color="secondary"
                >
                    Cancel
                </Button>
            </Modal.Body>
        </Modal>
    );
}
