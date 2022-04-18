import { Plan } from "../interfaces/plan";
import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { AddSemesterModal } from "./AddSemesterModal";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { SemesterList } from "./SemesterList";
import { Course } from "../interfaces/course";

export function PlanView({
    plan,
    deletePlan,
    plans,
    pool,
    setPool
}: {
    plan: Plan;
    deletePlan: (id: number) => void;
    plans: Plan[];
    pool: Course[];
    setPool: (newPool: Course[]) => void;
}): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>(plan.semesters);
    const [showAddSemesterModal, setShowAddSemesterModal] =
        useState<boolean>(false);
    const handleCloseAddSemesterModal = () => setShowAddSemesterModal(false);
    const handleShowAddSemesterModal = () => setShowAddSemesterModal(true);
    return (
        <div
            style={{
                backgroundColor: "lightcyan",
                borderRadius: "25px",
                padding: "10px",
                border: "1px black",
                borderStyle: "solid"
            }}
        >
            <h3>Plan {plan.id}</h3>
            <SemesterList
                semesters={semesters}
                setSemesters={setSemesters}
                pool={pool}
                setPool={setPool}
            />
            <Button
                startIcon={<Add />}
                variant="contained"
                color="success"
                className="m-2"
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
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="secondary"
                    className="m-2"
                    onClick={() => deletePlan(plan.id)}
                >
                    Delete Plan
                </Button>
            ) : null}
        </div>
    );
}
