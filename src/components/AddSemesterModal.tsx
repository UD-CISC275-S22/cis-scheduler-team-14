import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester, SemesterSeason } from "../interfaces/semester";

export function AddSemesterModal({
    show,
    handleClose,
    addSemester
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newSemester: Semester) => void;
}) {
    const [id, setId] = useState<number>(0);
    const [year, setYear] = useState<number>(0);
    const [season, setSeason] = useState<SemesterSeason>("FALL");
    const [credits, setCredits] = useState<number>(0);
    const [courses, setCourses] = useState<Course[]>([]);

    function saveChanges() {
        addSemester({
            year: year,
            id: id,
            season: season,
            credits: credits,
            courses: courses
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*ID*/}
                <Form.Group controlId="formSemesterID" as={Row}>
                    <Form.Label column sm={3}>
                        Semester ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
                {/*Year*/}
                <Form.Group controlId="formSemesterYear" as={Row}>
                    <Form.Label column sm={3}>
                        Year:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
                {/*Season*/}
                <Form.Group controlId="formSemesterSeason" as={Row}>
                    <Form.Label column sm={3}>
                        Season:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            as="select"
                            value={season}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setSeason(event.target.value as SemesterSeason)
                            }
                        >
                            <option value="FALL">Fall</option>
                            <option value="WINTER">Winter</option>
                            <option value="SPRING">Spring</option>
                            <option value="SUMMER">Summer</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                {/*Credits*/}
                <Form.Group controlId="formSemesterCredits" as={Row}>
                    <Form.Label column sm={3}>
                        Credits:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={credits}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCredits(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save New Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
