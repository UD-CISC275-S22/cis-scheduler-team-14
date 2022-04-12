import { Plan } from "../interfaces/plan";
import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { AddSemesterModal } from "./AddSemesterModal";
import { Button } from "react-bootstrap";

export function PlanView({
    plan,
    deletePlan
}: {
    plan: Plan;
    deletePlan: (id: number) => void;
}): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>(plan.semesters);
    const [showAddSemesterModal, setShowAddSemesterModal] =
        useState<boolean>(false);
    const handleCloseAddSemesterModal = () => setShowAddSemesterModal(false);
    const handleShowAddSemesterModal = () => setShowAddSemesterModal(true);
    return (
        <div className="bg-light border m-2 p-2">
            <h3>Plan {plan.id}</h3>
            <h6>{plan.semesters.length} Semester(s)</h6>
            <Button
                variant="success"
                className="m-4"
                onClick={handleShowAddSemesterModal}
            >
                Add Semester
            </Button>
            <AddSemesterModal
                show={showAddSemesterModal}
                handleClose={handleCloseAddSemesterModal}
                semesters={semesters}
                setSemesters={setSemesters}
            ></AddSemesterModal>
            {/*Delete Plan*/}
            <Button
                variant="danger"
                className="m-4"
                onClick={() => deletePlan(plan.id)}
            >
                Delete Plan
            </Button>
        </div>
    );
}
