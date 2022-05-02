import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Season, Semester } from "../interfaces/semester";
import CancelIcon from "@mui/icons-material/Cancel";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

    const handleChange = (event: SelectChangeEvent) => {
        setInSeason(event.target.value as Season);
        setAlert("");
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            data-testid="addSemesterModal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Year*/}
                <div className="m-2">
                    <Form.Group controlId="formSemesterYear" as={Row}>
                        <Form.Label column sm={3}>
                            Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={inYear}
                                data-testid="INPUTyearbox"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setInYear(parseInt(event.target.value))}
                            />
                        </Col>
                    </Form.Group>
                </div>
                {/*Season*/}
                <div className="m-2">
                    <Form.Group
                        controlId="formSemesterSeason"
                        as={Row}
                        data-testid="INPUTseasondropdown"
                    >
                        <Form.Label column sm={3}>
                            Season:
                        </Form.Label>
                        <Col>
                            <Select
                                native
                                value={inSeason}
                                label="Season"
                                onChange={handleChange}
                            >
                                <optgroup label="Main Semesters">
                                    <option value={Season.fall}>Fall</option>
                                    <option value={Season.spring}>
                                        Spring
                                    </option>
                                </optgroup>
                                <optgroup label="Special Semesters">
                                    <option value={Season.winter}>
                                        Winter
                                    </option>
                                    <option value={Season.summer}>
                                        Summer
                                    </option>
                                </optgroup>
                            </Select>
                        </Col>
                    </Form.Group>
                </div>
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
                    data-testid="SAVEbutton"
                >
                    Add Plan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
