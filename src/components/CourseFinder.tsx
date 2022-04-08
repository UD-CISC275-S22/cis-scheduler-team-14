import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Course, CreditType, getCourseString } from "../interfaces/course";
import { SemesterSeason } from "../interfaces/semester";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder(courseData: Course[]): JSX.Element {
    const [query, setQuery] = useState<string>("");

    /** Imports an array of Course objects, type casts creditTypes and semestersOffered */
    const COURSES = courseData.map(
        (course: Course): Course => ({
            ...course,
            creditTypes: course.creditTypes as CreditType[],
            semestersOffered: course.semestersOffered as SemesterSeason[]
        })
    );

    /** Creates an array of Course strings using the getCourseString function in course.ts */
    const COURSE_STRINGS = COURSES.map((course: Course): string =>
        getCourseString(course)
    );

    const [results, setResults] = useState<string[]>(COURSE_STRINGS);
    /** A text field for entering search terms */
    function SearchTextField(): JSX.Element {
        function updateQuery(event: React.ChangeEvent<HTMLInputElement>) {
            setQuery(event.target.value);
            updateResults();
        }
        return (
            <Form.Group controlId="formCourseSearch">
                <Form.Label>Course lookup:</Form.Label>
                <Form.Control
                    placeholder="Enter class name"
                    value={query}
                    onChange={updateQuery}
                />
            </Form.Group>
        );
    }

    /** A function to filter through an array of courses (COURSES by default) given a query and update the results useState*/
    function updateResults() {
        if (query === "") {
            setResults(COURSE_STRINGS);
        } else {
            const containsQuery = (course: string): boolean =>
                course.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            setResults(COURSE_STRINGS.filter(containsQuery));
        }
    }

    return (
        <div>
            <SearchTextField></SearchTextField>
            {results.map((courseText: string) => (
                <div key={courseText}>
                    <span>{courseText}</span>
                </div>
            ))}
        </div>
    );
}
