import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

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
            <Button
                data-testid="First button"
                onClick={() => console.log("I am logged")}
            >
                Clear All Courses
            </Button>
            <Button
                data-testid="Second button"
                onClick={() => console.log("I am logged")}
            >
                Clear All Semesters
            </Button>
        </div>
    );
}

export default App;
