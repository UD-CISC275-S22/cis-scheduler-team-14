import "./App.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { clearAllCourse } from "./components/Course";
import { clearAllSemester } from "./components/Semester";
import premadePlans from "./data/plans.json";
import { Course, CreditType } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, Season } from "./interfaces/semester";
import { PlanList } from "./components/PlanList";

function App(): JSX.Element {
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
            <div>
                <PlanList
                    plans={plans}
                    setPlans={setPlans}
                    deletePlan={deletePlan}
                ></PlanList>
            </div>
        </div>
    );
}

export default App;
