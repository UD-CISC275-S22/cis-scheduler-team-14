import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { CourseList } from "./CourseList";
import { Form } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { useDrop } from "react-dnd";

export function SemesterView({
    semester,
    setSemesters,
    semesters,
    pool,
    setPool
}: {
    semester: Semester;
    setSemesters: (semesters: Semester[]) => void;
    semesters: Semester[];
    pool: Course[];
    setPool: (newPool: Course[]) => void;
}): JSX.Element {
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
    const [courses, setCourses] = useState<Course[]>(semester.courses);
    /** Use state and implementation of drag functionality, linked with DraggableCourse.tsx and CourseFinder.tsx */
    /** Calls updateCourses when a new course is dropped into a semester */
    const [{ isOver }, dropRef] = useDrop({
        accept: "course",
        drop: (item: Course) => {
            if (
                !courses.some(function (el) {
                    return el.code === item.code;
                })
            ) {
                //Adds the course to the SemesterView, and removes it from the CoursePool
                updateCourses([...courses, item]);
                const removeCourseFromPool = (course: Course): boolean =>
                    course.code !== item.code;
                const newPool = pool.filter(removeCourseFromPool);
                setPool(newPool);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });
    /** Updates the courses inside of a semester */
    function updateCourses(courses: Course[]) {
        setCourses(courses);
        const newSemester = { ...semester, courses: courses };
        setSemesters(
            semesters.map((semester) =>
                semester.year === newSemester.year &&
                semester.season === newSemester.season
                    ? newSemester
                    : semester
            )
        );
    }
    /** Removes a semester from a plan */
    function deleteSemester(year: number, season: string) {
        const newSemesters = semesters.filter(
            (semester: Semester) =>
                semester.year !== year || semester.season !== season
        );
        setSemesters(newSemesters);
    }
    /** Returns a view of a Semester within a plan, containing courses */
    return (
        <div
            ref={dropRef}
            style={{
                backgroundColor: "mintcream",
                borderRadius: "25px",
                padding: "10px",
                border: "1px black",
                borderStyle: "dashed"
            }}
        >
            <h4>
                {semester.season} {semester.year}{" "}
            </h4>
            <h6>{courses.length} Course(s)</h6>
            <CourseList
                courses={courses}
                updateCourses={updateCourses}
            ></CourseList>
            {/*Delete Semester*/}
            {semesters.length > -1 ? (
                <Button
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="secondary"
                    className="m-2"
                    onClick={() =>
                        deleteSemester(semester.year, semester.season)
                    }
                >
                    Delete Semester
                </Button>
            ) : null}
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
                        The user needs these courses still to pass Concentration
                        requirement
                        {needTheseCourse}
                        <span>The data should be checked here!</span>
                    </span>
                </div>
            </div>
            {isOver && <div>Insert Course!</div>}
        </div>
    );
}
