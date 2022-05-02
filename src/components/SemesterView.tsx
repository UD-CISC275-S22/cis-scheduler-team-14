import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { CourseList } from "./CourseList";
import { useDrop } from "react-dnd";
import { DeleteForever } from "@mui/icons-material";

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
                semester.year !== year && semester.season !== season
        );
        setSemesters(newSemesters);
    }

    /**Deletes all courses in a semester */
    function deleteAllCourses() {
        updateCourses([]);
    }

    const numOfCredits = courses.reduce(
        (accumulator, currentCourse) =>
            accumulator + parseInt(currentCourse.credits),
        0
    );
    /** Returns a view of a Semester within a plan, containing courses */
    return (
        <div
            data-testid="semesterView"
            ref={dropRef}
            style={{
                backgroundColor: "mintcream",
                borderRadius: "25px",
                padding: "10px",
                border: "1px black",
                borderStyle: "dashed",
                textAlign: "center"
            }}
        >
            <h4 data-testid="semesterTitle">
                {semester.season} {semester.year}{" "}
            </h4>
            <h6>
                {courses.length} Course
                {courses.length > 1 || courses.length === 0 ? "s" : ""} .:.
                {" " + numOfCredits} Credit
                {numOfCredits > 1 || numOfCredits === 0 ? "s" : ""}
            </h6>
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
                    data-testid="deleteSemesterButton"
                    onClick={() =>
                        deleteSemester(semester.year, semester.season)
                    }
                >
                    Delete Semester
                </Button>
            ) : null}
            {courses.length > 0 && (
                <Button
                    startIcon={<DeleteForever />}
                    variant="outlined"
                    color="error"
                    className="m-1"
                    onClick={deleteAllCourses}
                    data-testid="deleteAllCoursesButton"
                >
                    Delete All Courses
                </Button>
            )}
            {isOver && <div>Insert Course!</div>}
        </div>
    );
}
