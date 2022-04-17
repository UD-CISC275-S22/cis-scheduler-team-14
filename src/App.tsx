import "./App.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { clearAllCourse } from "./courses";
import { clearAllSemester } from "./semester";
import { AddSemesterModal } from "./components/AddSemesterModal";
import premadePlans from "./data/plans.json";
import { Course, CreditType } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, SemesterSeason } from "./interfaces/semester";
import { Form } from "react-bootstrap";
function App(): JSX.Element {
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
    const [concentrationPicked, setconcentrationPicked] =
        useState<string>("AI");

    function updateConcentration(event: React.ChangeEvent<HTMLSelectElement>) {
        setconcentrationPicked(event.target.value);
    }
    /**Plan States*/
    const PLANS = premadePlans.map(
        (plan): Plan => ({
            ...plan,
            semesters: plan.semesters.map(
                (semester): Semester => ({
                    ...semester,
                    season: semester.season as SemesterSeason,
                    courses: semester.courses.map(
                        (course): Course => ({
                            ...course,
                            creditTypes: course.creditTypes as CreditType[],
                            semestersOffered:
                                course.semestersOffered as SemesterSeason[]
                        })
                    )
                })
            )
        })
    );
    const [plans, setPlans] = useState<Plan[]>(PLANS);
    console.log(PLANS[0]);
    /**Course States*/

    /**Add Semester to Plan States & Constants */
    const [showAddSemesterModal, setShowAddSemesterModal] =
        useState<boolean>(false);
    const handleCloseAddSemesterModal = () => setShowAddSemesterModal(false);
    const handleShowAddSemesterModal = () => setShowAddSemesterModal(true);

    function addSemester(newSemester: Semester) {
        setPlans(
            plans.map((plan) => ({
                ...plan,
                semesters: [...plan.semesters, newSemester]
            }))
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Will Gunter, John Bean, Sonika Sharma</p>
            <Button onClick={clearAllCourse}>Clear All Courses</Button>
            <Button onClick={clearAllSemester}>Clear All Semesters</Button>
            <p>Number of Semesters in Plan 1: {plans[0].semesters.length}</p>
            <p>
                Semester IDs:{" "}
                {plans[0].semesters.map(
                    (semester: Semester) => `${semester.id}, `
                )}
            </p>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddSemesterModal}
                >
                    Add Semester To Plan
                </Button>
                <AddSemesterModal
                    show={showAddSemesterModal}
                    handleClose={handleCloseAddSemesterModal}
                    addSemester={addSemester}
                ></AddSemesterModal>
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
                        The user has passed Concetration requirement{" "}
                        {checkConcentration}
                        <span>The data should be checked here!</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default App;
