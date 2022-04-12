import { Plan } from "../interfaces/plan";
import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { AddSemesterModal } from "./AddSemesterModal";
import { Button } from "react-bootstrap";
import { SemesterList } from "./SemesterList";

export function PlanView({
    plan,
    deletePlan,
    plans
}: {
    plan: Plan;
    deletePlan: (id: number) => void;
    plans: Plan[];
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
            <SemesterList semesters={semesters} setSemesters={setSemesters} />
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
            {plans.length > 1 ? (
                <Button
                    variant="danger"
                    className="m-4"
                    onClick={() => deletePlan(plan.id)}
                >
                    Delete Plan
                </Button>
            ) : null}
        </div>
    );
}
