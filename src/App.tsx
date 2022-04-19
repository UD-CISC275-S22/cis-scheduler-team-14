import "./App.css";
import React, { useState } from "react";
import headerimg from "./media/background.jpg";
import { Button, Form } from "react-bootstrap";
import premadePlans from "./data/plans.json";
import { Course } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, Season } from "./interfaces/semester";
import { PlanList } from "./components/PlanList";
import TestCourses from "./data/testcourses.json";
import { CourseFinder } from "./components/CourseFinder";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App(): JSX.Element {
    /** Test Course states */
    const TESTCOURSES = TestCourses.map(
        (course): Course => ({
            ...course
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
                    season: semester.season as Season,
                    courses: semester.courses.map(
                        (course): Course => ({
                            ...course
                        })
                    )
                })
            )
        })
    );
    const [plans, setPlans] = useState<Plan[]>(PLANS);
    const [pool, setPool] = useState<Course[]>([]);

    function deletePlan(id: number): void {
        setPlans(plans.filter((plan) => plan.id !== id));
    }
    console.log(PLANS[0]);
    /**Course States*/

    /**Add Semester to Plan States & Constants */

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
            <img src={headerimg} width="100%" />
            <h3>
                Hello People of Delaware! Welcome to UDCIS Course Planner!
                website will help you plan out what classes to take in your
                college career. To get started there is a plan where you can add
                add semesters and in the semesters you can add courses.
            </h3>
            <p>
                This website is brought to by: Will Gunter, John Bean, Sonika
                Sharma
            </p>
            <Button
                type="button"
                className="btn btn-danger"
                onClick={clearAllCourse}
            >
                Clear All Courses
            </Button>
            <Button
                type="button"
                className="btn btn-danger"
                onClick={clearAllSemester}
            >
                Clear All Semesters
            </Button>
            <p>Number of Semesters in Plan 1: {plans[0].semesters.length}</p>
            <div>
                <PlanList
                    plans={plans}
                    setPlans={setPlans}
                    deletePlan={deletePlan}
                ></PlanList>
            </div>
            <div>
                <CourseFinder courseData={testCourses}></CourseFinder>
            </div>
        </div>
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <img src={headerimg} width="100%" />
                <p>Will Gunter, John Bean, Sonika Sharma</p>
                <Button onClick={clearAllCourse}>Clear All Courses</Button>
                <Button onClick={clearAllSemester}>Clear All Semesters</Button>
                <p>
                    Number of Semesters in Plan 1: {plans[0].semesters.length}
                </p>
                <div>
                    <PlanList
                        plans={plans}
                        setPlans={setPlans}
                        deletePlan={deletePlan}
                        pool={pool}
                        setPool={setPool}
                    ></PlanList>
                </div>
                <div>
                    <CourseFinder
                        courseData={testCourses}
                        pool={pool}
                        setPool={setPool}
                    ></CourseFinder>
                </div>
                <div>
                    <Form.Group controlId="userConcentration">
                        <Form.Label>What is your concentration?</Form.Label>
                        <Form.Select
                            value={concentrationPicked}
                            onChange={updateConcentration}
                        >
                            <option value="AI">AI</option>
                            <option value="Bioinformatics">
                                {" "}
                                Bioinformatics{" "}
                            </option>
                            <option value="Cybersecurity">
                                {" "}
                                Cybersecurity{" "}
                            </option>
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
                            The user needs these courses still to pass
                            Concentration requirement
                            {needTheseCourse}
                            <span>The data should be checked here!</span>
                        </span>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
