import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./courses.tsx";
import "./semester.tsx";
import { clearAllCourse } from "./courses";
import { clearAllSemester } from "./semester";

function App(): JSX.Element {
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
        </div>
    );
}

export default App;
