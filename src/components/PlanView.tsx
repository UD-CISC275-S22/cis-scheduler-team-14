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
import { Form } from "react-bootstrap";

export function PlanView({
    plan,
    deletePlan,
    plans,
    pool,
    setPool,
    setPlans
}: {
    plan: Plan;
    deletePlan: (id: number) => void;
    plans: Plan[];
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
    function checkCourse(thisSemester: Semester, Query: Course): boolean {
        return thisSemester.courses.indexOf(Query) !== -1;
    }
    function checkPlan(thisPlan: Plan, Query: Course): boolean {
        const goodSemester: Semester[] = thisPlan.semesters.filter(
            (aSemester: Semester): boolean => checkCourse(aSemester, Query)
        );
        return goodSemester.length > 0;
    }
    function checkConcentration(aPlan: Plan, courseList: Course[]): boolean {
        const missingCourses: Course[] = courseList.filter(
            (aCourse: Course): boolean => checkPlan(aPlan, aCourse) === false
        );
        return missingCourses.length === 0;
    }
    function needTheseCourse(aPlan: Plan, courseList: Course[]): Course[] {
        const missingCourses: Course[] = courseList.filter(
            (aCourse: Course): boolean => checkPlan(aPlan, aCourse) === false
        );
        return missingCourses;
    }
    const [concentrationPicked, setconcentrationPicked] =
        useState<string>("AI");

    function updateConcentration(event: React.ChangeEvent<HTMLSelectElement>) {
        setconcentrationPicked(event.target.value);
    }
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
            <div>
                <Form.Group controlId="userConcentration">
                    <Form.Label>What is your concentration?</Form.Label>
                    <Form.Select
                        value={concentrationPicked}
                        onChange={updateConcentration}
                    >
                        <option value="AI">AI</option>
                        <option value="Bioinformatics"> Bioinformatics </option>
                        <option value="Cybersecurity"> Cybersecurity </option>
                        <option value="DataScience"> Data Science </option>
                        <option value="High Performance Computing">
                            High Performance and Computing
                        </option>
                        <option value="Systems and Networks">
                            Systems and Networks
                        </option>
                        <option value="Theory and Computation">
                            Theory and Computation
                        </option>
                    </Form.Select>
                </Form.Group>
                The users concentration {concentrationPicked}.
                <div>
                    <span>
                        The user has passed Concetration requirement.
                        {checkConcentration}
                        The user needs these courses still to pass Concentration
                        requirement.
                        {needTheseCourse}
                        <span>The data should be checked here!</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
