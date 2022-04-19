import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { CourseList } from "./CourseList";
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
            <Button
                startIcon={<DeleteIcon />}
                variant="outlined"
                color="error"
                className="m-2"
                onClick={() => deleteSemester(semester.year, semester.season)}
            >
                Delete Semester
            </Button>
            {isOver && <div>Insert Course!</div>}
        </div>
    );
}
