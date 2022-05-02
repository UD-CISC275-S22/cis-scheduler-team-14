import { Plan } from "../interfaces/plan";
import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { AddSemesterModal } from "./AddSemesterModal";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { SemesterList } from "./SemesterList";
import { Course } from "../interfaces/course";
import { DeleteForever } from "@mui/icons-material";

export function PlanView({
    plan,
    plans,
    deletePlan,
    pool,
    setPool,
    setPlans
}: {
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: number) => void;
    pool: Course[];
    setPool: (newPool: Course[]) => void;
    setPlans: (plans: Plan[]) => void;
}): JSX.Element {
    const [semesters, saveSemesters] = useState<Semester[]>(plan.semesters);
    const [showAddSemesterModal, setShowAddSemesterModal] =
        useState<boolean>(false);
    const handleCloseAddSemesterModal = () => setShowAddSemesterModal(false);
    const handleShowAddSemesterModal = () => setShowAddSemesterModal(true);

    function setSemesters(semesters: Semester[]): void {
        saveSemesters(semesters);
        setPlans(
            plans.map((listplan: Plan) => {
                if (listplan.id === plan.id) {
                    return {
                        ...plan,
                        semesters: semesters
                    };
                } else {
                    return listplan;
                }
            })
        );
    }

    function deleteAllSemesters() {
        setSemesters([]);
    }
    return (
        <div
            data-testid="plan-view"
            style={{
                backgroundColor: "lightcyan",
                borderRadius: "25px",
                padding: "10px",
                border: "1px black",
                borderStyle: "solid"
            }}
        >
            <h3 style={{ textAlign: "center" }} data-testid="plan-title">
                Plan {plan.id}
            </h3>
            <SemesterList
                semesters={semesters}
                setSemesters={setSemesters}
                pool={pool}
                setPool={setPool}
            />
            <div style={{ textAlign: "center" }}>
                <Button
                    startIcon={<Add />}
                    variant="contained"
                    color="success"
                    className="m-2"
                    data-testid="addSemesterButton"
                    onClick={handleShowAddSemesterModal}
                >
                    Add Semester
                </Button>
                <Button
                    startIcon={<DeleteForever />}
                    variant="contained"
                    color="error"
                    className="m-2"
                    data-testid="deleteAllSemestersButton"
                    onClick={() => deleteAllSemesters()}
                >
                    Delete All Semesters
                </Button>
                <AddSemesterModal
                    show={showAddSemesterModal}
                    handleClose={handleCloseAddSemesterModal}
                    semesters={semesters}
                    setSemesters={setSemesters}
                ></AddSemesterModal>
                {/*Delete Plan*/}
                <Button
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="secondary"
                    className="m-2"
                    data-testid="deletePlanButton"
                    onClick={() => deletePlan(plan.id)}
                >
                    Delete Plan
                </Button>
            </div>
        </div>
    );
}
