import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course, CreditType, getCourseString } from "../interfaces/course";
import { Season } from "../interfaces/semester";
import { DraggableCourse } from "./DraggableCourse";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder({
    courseData,
    pool,
    setPool
}: {
    courseData: Course[];
    pool: Course[];
    setPool: (newPool: Course[]) => void;
}): JSX.Element {
    const [query, setQuery] = useState<string>("");

    /** CSS Styles to be used in CourseFinder */
    const CourseFinderStyles = {
        /** CSS Style for the individual course div's */
        course_individual: {
            width: 300,
            height: 50,
            backgroundColor: "whitesmoke",
            alignContent: "center",
            outlineStyle: "solid",
            outlineWidth: "thin",
            fontFamily: "monospace"
        } as React.CSSProperties,
        /** CSS Style for the scrollable course list */
        course_scroll_list: {
            width: 300,
            height: 150,
            overflow: "scroll",
            alignContent: "center",
            backgroundColor: "navy",
            paddingBottom: "1px",
            paddingTop: "1px",
            outlineStyle: "solid",
            outlineWidth: "medium"
        } as React.CSSProperties,
        /** CSS Style for top level CourseFinder container */
        course_container: {
            width: 300,
            height: 500,
            alignContent: "center",
            backgroundColor: "beige",
            paddingBotton: "10px",
            paddingTop: "10px",
            outlineStyle: "solid",
            outlineWidth: "medium",
            fontFamily: "monospace"
        } as React.CSSProperties
    };

    /** Imports an array of Course objects, type casts creditTypes and semestersOffered */
    const COURSES = courseData.map(
        (course: Course): Course => ({
            ...course,
            creditTypes: course.creditTypes as CreditType[],
            semestersOffered: course.semestersOffered as Season[]
        })
    );

    /** A filter to find if a course contains the given query and is not already in the course pool */
    const containsQuery = (course: Course): boolean =>
        (course.code.toLowerCase().includes(query.toLowerCase()) ||
            course.name.toLowerCase().includes(query.toLowerCase())) &&
        !pool.includes(course);

    /** Function to update the query useState */
    function updateQuery(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    /** Returns final CourseFinder component */
    /** In order from top to bottom: Course search bar, Course Pool, Clear Courses Button */
    return (
        <div style={CourseFinderStyles.course_container}>
            <Form.Group controlId="formCourseSearch">
                <Form.Label>Course Lookup</Form.Label>
                <Form.Control
                    placeholder="Enter class name"
                    value={query}
                    onChange={updateQuery}
                    size="sm"
                />
            </Form.Group>
            <div style={CourseFinderStyles.course_scroll_list}>
                {COURSES.filter(containsQuery).map(
                    (course: Course) =>
                        !pool.some(function (el) {
                            return el.code === course.code;
                        }) && (
                            <div
                                key={course.code}
                                style={CourseFinderStyles.course_individual}
                                onClick={() => setPool([...pool, course])}
                            >
                                {getCourseString(course)}
                            </div>
                        )
                )}
            </div>
            <div>
                <p>Course Pool</p>
                {pool.length === 0 && (
                    <p>
                        Click a course to add or remove it from your course
                        pool!
                    </p>
                )}
                {pool.map((course: Course) => (
                    <div key={course.code}>
                        <DraggableCourse course={course}></DraggableCourse>
                    </div>
                ))}
                <Button onClick={() => setPool([])}>Clear course pool</Button>
            </div>
        </div>
    );
}

/**<div
                        key={course.name}
                        style={CourseFinderStyles.course_pool_individual}
                        onClick={() => removeSingleCourse(course)}
                    >
                        {getCourseString(course)}
                    </div> */
