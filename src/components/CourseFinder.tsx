import React, { ReactHTML, useState } from "react";
import { Form } from "react-bootstrap";
import { Course, CreditType } from "../interfaces/course";
import { SemesterSeason } from "../interfaces/semester";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder(courseData: Course[]): JSX.Element {
    const [query, setQuery] = useState<string>("");

    /** Imports an array of Course objects, type casts creditTypes and semestersOffered */
    const COURSES = courseData.map(
        (course): Course => ({
            ...course,
            creditTypes: course.creditTypes as CreditType[],
            semestersOffered: course.semestersOffered as SemesterSeason[]
        })
    );
    const [results, setResults] = useState<Course[]>(COURSES);

    /** A text field for entering search terms */
    function SearchTextField(): JSX.Element {
        function updateQuery(event: React.ChangeEvent<HTMLInputElement>) {
            setQuery(event.target.value);
        }
        return (
            <Form.Group controlId="formCourseSearch">
                <Form.Label>Course lookup:</Form.Label>
                <Form.Control value={query} onChange={updateQuery} />
            </Form.Group>
        );
    }
    return <div>Course Finder</div>;
}
