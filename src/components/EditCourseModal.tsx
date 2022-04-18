import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Season, Semester } from "../interfaces/semester";
import CancelIcon from "@mui/icons-material/Cancel";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Course } from "../interfaces/course";

export function EditCourseModal({
    show,
    handleClose,
    updateCourses,
    courses,
    course
}: {
    show: boolean;
    handleClose: () => void;
    updateCourses: (courses: Course[]) => void;
    courses: Course[];
    course: Course;
}) {
    const [name, setName] = useState<string>(course.name);
    const [code, setCode] = useState<string>(course.code);
    const [description, setDescription] = useState<string>(course.description);
    const [credits, setCredits] = useState<number>(course.credits);
    const [creditTypes, setCreditTypes] = useState<string>(course.creditTypes);
    const [prerequisites, setPrerequisites] = useState<string>(
        course.prerequisites
    );
    const [restrictions, setRestrictions] = useState<string>(
        course.restrictions
    );
    const [semestersOffered, setSemestersOffered] = useState<string>(
        course.semestersOffered
    );

    function saveChanges() {
        const newCourse: Course = {
            name: name,
            code: code,
            description: description,
            credits: credits,
            creditTypes: creditTypes,
            prerequisites: prerequisites,
            restrictions: restrictions,
            semestersOffered: semestersOffered
        };
        const newCourses = courses.filter((c) =>
            c === course ? newCourse : c
        );
        updateCourses(newCourses);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Name */}
                <Form.Group controlId="formCourseName" as={Row}>
                    <Form.Label column sm={2}>
                        Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={course.name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Code */}
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Code:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={course.code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Description */}
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Description:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={course.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Credits */}
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Credits:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            value={course.credits}
                            onChange={(e) =>
                                setCredits(parseInt(e.target.value))
                            }
                        />
                    </Col>
                </Form.Group>
                {/*Credit Types */}
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Credit Types:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={course.creditTypes}
                            onChange={(e) => setCreditTypes(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Prerequisites */}
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Prerequisites:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={course.prerequisites}
                            onChange={(e) => setPrerequisites(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Restrictions */}
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Restrictions:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={course.restrictions}
                            onChange={(e) => setRestrictions(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Semesters Offered */}
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Semesters Offered:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={course.semestersOffered}
                            onChange={(e) =>
                                setSemestersOffered(e.target.value)
                            }
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="outlined"
                    className="m-2"
                    startIcon={<CancelIcon />}
                    onClick={handleClose}
                    color="secondary"
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    className="m-2"
                    startIcon={<Add />}
                    onClick={saveChanges}
                    color="primary"
                >
                    Save Edits
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
