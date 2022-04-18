import { Stack } from "@mui/material";
import React from "react";
import { Course } from "../interfaces/course";
import { CourseView } from "./CourseView";

export function CourseList({
    courses,
    updateCourses
}: {
    courses: Course[];
    updateCourses: (courses: Course[]) => void;
}): JSX.Element {
    function updateCourse(oldCourse: Course, newCourse: Course) {
        const newCourses = courses.map((c) =>
            c === oldCourse ? newCourse : c
        );
        updateCourses(newCourses);
    }
    function deleteCourse(course: Course) {
        const newCourses = courses.filter((c) => c !== course);
        updateCourses(newCourses);
    }
    return (
        <div>
            <Stack gap={2}>
                {courses.map((course: Course) => (
                    <div key={course.code}>
                        <CourseView
                            course={course}
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                        ></CourseView>
                    </div>
                ))}
            </Stack>
        </div>
    );
}
