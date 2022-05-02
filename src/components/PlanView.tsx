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
import { RequirementsViewer } from "./RequirementsViewer";

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
    const [majMin, setMajMin] = useState<string>("Major");
    const [baBS, setBaBS] = useState<string>("BS");
    const [conc, setConc] = useState<string>("AI");
    return (
        <div>
            <div
                style={{
                    backgroundColor: "lightcyan",
                    borderRadius: "25px",
                    padding: "10px",
                    border: "1px black",
                    borderStyle: "solid"
                }}
            >
                <h3 style={{ textAlign: "center" }}>Plan {plan.id}</h3>
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
                        onClick={handleShowAddSemesterModal}
                    >
                        Add Semester
                    </Button>
                    <Button
                        startIcon={<DeleteForever />}
                        variant="contained"
                        color="error"
                        className="m-2"
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
            </div>
            <p></p>
            <RequirementsViewer
                plan={plan}
                majMin={majMin}
                baBs={baBS}
                conc={conc}
                setMajMin={setMajMin}
                setBaBs={setBaBS}
                setConc={setConc}
            />
        </div>
    );
}
