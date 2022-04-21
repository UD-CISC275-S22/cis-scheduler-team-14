import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import CancelIcon from "@mui/icons-material/Cancel";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export function AddPlanModal({
    show,
    handleClose,
    plans,
    setPlans
}: {
    show: boolean;
    handleClose: () => void;
    plans: Plan[];
    setPlans: (plans: Plan[]) => void;
}): JSX.Element {
    const [inId, setInId] = useState<number>(plans.length);
    const [alert, setAlert] = useState<string>("");

    function savePlan(): void {
        const newPlan: Plan[] = plans;
        if (plans.filter((p) => p.id === inId).length > 0) {
            setAlert("Plan with this ID already exists.");
        } else {
            newPlan.push({ id: inId, semesters: [] });
            newPlan.sort(comparePlans);
            setPlans(newPlan);
            setAlert("");
            handleClose();
        }
    }

    function comparePlans(a: Plan, b: Plan) {
        if (a.id < b.id) {
            return -1;
        } else if (a.id > b.id) {
            return 1;
        } else {
            return 0;
        }
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*ID*/}
                <Form.Group controlId="formPlanID" as={Row}>
                    <Form.Label column sm={3}>
                        ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="number"
                            value={inId}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setInId(parseInt(event.target.value));
                                setAlert("");
                            }}
                        />
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
                    onClick={savePlan}
                    color="primary"
                >
                    Add Plan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
