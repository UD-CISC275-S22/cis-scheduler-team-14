import "./App.css";
import React, { useState } from "react";
import headerimg from "./media/background.jpg";
import { Button } from "react-bootstrap";
import premadePlans from "./data/plans.json";
import { Course, CreditType } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, Season } from "./interfaces/semester";
import { PlanList } from "./components/PlanList";
import TestCourses from "./data/testcourses.json";
import { CourseFinder } from "./components/CourseFinder";

function App(): JSX.Element {
    /** Test Course states */
    const TESTCOURSES = TestCourses.map(
        (course): Course => ({
            ...course,
            creditTypes: course.creditTypes as CreditType[],
            semestersOffered: course.semestersOffered as Season[]
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
                            ...course,
                            creditTypes: course.creditTypes as CreditType[],
                            semestersOffered:
                                course.semestersOffered as Season[]
                        })
                    )
                })
            )
        })
    );
    const [plans, setPlans] = useState<Plan[]>(PLANS);
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
            <p>Will Gunter, John Bean, Sonika Sharma</p>
            <Button onClick={clearAllCourse}>Clear All Courses</Button>
            <Button onClick={clearAllSemester}>Clear All Semesters</Button>
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
    );
}

export default App;
