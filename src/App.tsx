import "./App.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AddSemesterModal } from "./components/AddSemesterModal";
import premadePlans from "./data/plans.json";
import { Course, CreditType } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, SemesterSeason } from "./interfaces/semester";
import TestCourses from "./data/testcourses.json";
import { CourseFinder } from "./components/CourseFinder";

function App(): JSX.Element {
    /** Test Course states */
    const TESTCOURSES = TestCourses.map(
        (course): Course => ({
            ...course,
            creditTypes: course.creditTypes as CreditType[],
            semestersOffered: course.semestersOffered as SemesterSeason[]
        })
    );
    const [testCourses] = useState<Course[]>(TESTCOURSES);
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

    function clearAllCourse() {
        const [course, setCourse] = useState<Course[]>([]);
        setCourse([]);
        course;
    }

    function clearAllSemester() {
        const origplan = plans[0];
        origplan.semesters = [];
        setPlans([origplan]);
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
                <CourseFinder courseData={testCourses}></CourseFinder>
            </div>
        </div>
    );
}

export default App;
