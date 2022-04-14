import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Course, CreditType, getCourseString } from "../interfaces/course";
import { SemesterSeason } from "../interfaces/semester";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder({
    courseData
}: {
    courseData: Course[];
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
            semestersOffered: course.semestersOffered as SemesterSeason[]
        })
    );

    /** A filter to find if a course contains the given query */
    const containsQuery = (course: Course): boolean =>
        course.code.toLowerCase().includes(query.toLowerCase()) ||
        course.name.toLowerCase().includes(query.toLowerCase());

    /** Function to update the query useState */
    function updateQuery(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    /** Returns final CourseFinder component */
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
                {COURSES.filter(containsQuery).map((course: Course) => (
                    <div
                        key={course.code}
                        style={CourseFinderStyles.course_individual}
                    >
                        {getCourseString(course)}
                    </div>
                ))}
            </div>
        </div>
    );
}
