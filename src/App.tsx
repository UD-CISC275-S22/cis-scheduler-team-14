import React, { useState } from "react";
import "./App.css";
import { CourseFinder } from "./components/CourseFinder";
import premadeCourses from "./data/courses.json";
import { Course, CreditType } from "./interfaces/course";
import { SemesterSeason } from "./interfaces/semester";

function App(): JSX.Element {
    /** Importing premade courses from courses.json */
    const COURSES = premadeCourses.map(
        (course): Course => ({
            ...course,
            creditTypes: course.creditTypes as CreditType[],
            semestersOffered: course.semestersOffered as SemesterSeason[]
        })
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [courses, setCourses] = useState<Course[]>(COURSES);

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
                <CourseFinder courseData={courses}></CourseFinder>
            </div>
        </div>
    );
}

export default App;
