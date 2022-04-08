import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { AddSemesterModal } from "./components/AddSemesterModal";
import premadePlans from "./data/plans.json";
import { Course, CreditType } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, SemesterSeason } from "./interfaces/semester";

function App(): JSX.Element {
    /**Plan States*/
    const [plans, setPlans] = useState<Plan[]>([]);
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
    setPlans(PLANS);
    /**Course States*/
    const [courses, setCourses] = useState<Course[]>([]);
    /**Add Semester to Plan States & Constants */
    const [showAddSemesterModal, setShowAddSemesterModal] = useState(false);
    const handleCloseAddSemesterModal = () => setShowAddSemesterModal(false);
    const handleShowAddSemesterModal = () => setShowAddSemesterModal(true);
    function addSemester(newSemester: Semester) {
        const matchingPlan = plans.findIndex((plan) => plan.id === plan.id);
        plans[matchingPlan].semesters = [
            ...plans[matchingPlan].semesters,
            newSemester
        ];
    }

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This pagSe will
                automatically reload.
            </p>
            <p>Will Gunter, John Bean, Sonika Sharma</p>
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
        </div>
    );
}

export default App;
