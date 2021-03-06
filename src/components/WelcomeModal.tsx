import { Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import React from "react";
import { HelpOutlineOutlined } from "@mui/icons-material";

export function Welcomemessage(): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <div>
            <Button
                variant="contained"
                startIcon={<HelpOutlineOutlined />}
                color="success"
                className="m-4"
                onClick={handleOpen}
            >
                Click here to learn how to get started!
            </Button>
            <Modal
                show={open}
                onHide={handleClose}
                animation={false}
                fade={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Welcome to the UDCIS Course Planner!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center" }}>
                    <p>
                        This website helps you plan out what courses you must
                        take to graduate with a Computer Science degree. We have
                        plans where you can add semesters and course to organize
                        what classes you need to take every semester. Hopefully
                        this website will ease your stress about planning
                        classes :)
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
