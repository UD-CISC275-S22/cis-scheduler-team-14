import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import CancelIcon from "@mui/icons-material/Cancel";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Course } from "../interfaces/course";

export function EditCourseModal({
    show,
    handleClose,
    updateCourse,
    course
}: {
    show: boolean;
    handleClose: () => void;
    updateCourse: (oldCourse: Course, newCourse: Course) => void;
    course: Course;
}) {
    const [name, setName] = useState<string>(course.name);
    const [code, setCode] = useState<string>(course.code);
    const [description, setDescription] = useState<string>(course.descr);
    const [credits, setCredits] = useState<string>(course.credits);
    const [prerequisites, setPrerequisites] = useState<string>(course.preReq);
    const [restrictions, setRestrictions] = useState<string>(course.restrict);
    const [breadth, setBreadth] = useState<string>(course.breadth);
    const [semestersOffered, setSemestersOffered] = useState<string>(
        course.typ
    );

    function saveChanges() {
        const newCourse: Course = {
            code: code,
            name: name,
            descr: description,
            credits: credits,
            preReq: prerequisites,
            restrict: restrictions,
            breadth: breadth,
            typ: semestersOffered
        };
        updateCourse(course, newCourse);
        handleClose();
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            data-testid="editCourseModal"
        >
            <Modal.Header>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Name */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={name}
                            data-testid="INPUTcourseName"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Code */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Code:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={code}
                            data-testid="INPUTcourseCode"
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Description */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Description:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            data-testid="INPUTcourseDescription"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Credits */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Credits:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            value={credits}
                            data-testid="INPUTcourseCredits"
                            onChange={(e) => setCredits(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Breadth */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Credit Types:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={breadth}
                            data-testid="INPUTcourseBreadth"
                            onChange={(e) => setBreadth(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Prerequisites */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Prerequisites:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={prerequisites}
                            data-testid="INPUTcoursePrereqs"
                            onChange={(e) => setPrerequisites(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Restrictions */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Restrictions:
                    </Form.Label>
                    <Col sm={20}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={restrictions}
                            data-testid="INPUTcourseRestrictions"
                            onChange={(e) => setRestrictions(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Semesters Offered */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Semesters Offered:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={semestersOffered}
                            data-testid="INPUTcourseSemesters"
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
                    data-testid="saveChangesButton"
                    color="primary"
                >
                    Save Edits
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
