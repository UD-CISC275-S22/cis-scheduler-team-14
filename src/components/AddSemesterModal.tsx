import React, { useState } from "react";
import { Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Season, Semester } from "../interfaces/semester";
import CancelIcon from "@mui/icons-material/Cancel";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export function AddSemesterModal({
    show,
    handleClose,
    semesters,
    setSemesters
}: {
    show: boolean;
    handleClose: () => void;
    semesters: Semester[];
    setSemesters: (semesters: Semester[]) => void;
}) {
    const [inSeason, setInSeason] = useState<Season>(Season.fall);
    const [inYear, setInYear] = useState<number>(2022);
    const [alert, setAlert] = useState<string>("");

    function saveChanges() {
        const newSemester: Semester[] = semesters;
        if (
            semesters.filter((s) => s.season === inSeason && s.year === inYear)
                .length > 0
        ) {
            setAlert("Semester already exists in this plan.");
        } else {
            newSemester.push({
                season: inSeason,
                year: inYear,
                courses: []
            });
            newSemester.sort(compareSemesters);
            setSemesters(newSemester);
            setAlert("");
            handleClose();
        }
    }

    function compareSemesters(a: Semester, b: Semester) {
        if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year) {
            return 1;
        } else {
            if (a.season < b.season) {
                return -1;
            } else if (a.season > b.season) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Year*/}
                <Form.Group controlId="formSemesterYear" as={Row}>
                    <Form.Label column sm={3}>
                        Year:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="number"
                            value={inYear}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setInYear(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
                {/*Season*/}
                <Form.Group controlId="formSemesterSeason" as={Row}>
                    <Form.Label column sm={3}>
                        Season:
                    </Form.Label>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="secondary"
                                id="dropdown-basic"
                            >
                                {inSeason}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInSeason(Season.fall);
                                        setAlert("");
                                    }}
                                >
                                    Fall
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInSeason(Season.spring);
                                        setAlert("");
                                    }}
                                >
                                    Spring
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInSeason(Season.summer);
                                        setAlert("");
                                    }}
                                >
                                    Summer
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInSeason(Season.winter);
                                        setAlert("");
                                    }}
                                >
                                    Winter
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Form.Group>
                {alert && <Alert severity="error">{alert}</Alert>}
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
                    Add Plan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
