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

    const CourseFinderStyles = {
        course_list: {
            backgroundColor: "beige",
            width: 300,
            height: 50,
            alignContent: "center",
            outlineStyle: "solid",
            outlineWidth: "thin",
            fontFamily: "monospace"
        } as React.CSSProperties,
        course_container: {
            width: 300,
            height: 150,
            overflow: "scroll",
            alignContent: "center",
            backgroundColor: "navy",
            paddingBottom: "1px",
            paddingTop: "1px",
            outlineStyle: "solid",
            outlineWidth: "medium"
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
        <div>
            <Form.Group controlId="formCourseSearch">
                <Form.Label>Course lookup:</Form.Label>
                <Form.Control
                    placeholder="Enter class name"
                    value={query}
                    onChange={updateQuery}
                    width={200}
                />
            </Form.Group>
            <div style={CourseFinderStyles.course_container}>
                {COURSES.filter(containsQuery).map((course: Course) => (
                    <div
                        key={course.code}
                        style={CourseFinderStyles.course_list}
                    >
                        {getCourseString(course)}
                    </div>
                ))}
            </div>
            <div>{query}</div>
        </div>
    );
}
