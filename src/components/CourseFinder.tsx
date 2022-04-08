import React, { ReactHTML, useState } from "react";
import { Form } from "react-bootstrap";
import { Course, CreditType, getCourseString } from "../interfaces/course";
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
    
    /** Maps each of the Course objects in COURSE to strings to be displayed in the search window */
    const COURSE_STRINGS = COURSES.map(
        (course: Course): string => getCourseString(course)
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
                <Form.Control
                    placeholder="Enter class name"
                    value={query}
                    onChange={updateQuery}
                />
            </Form.Group>
        );
    }

    /** A function to filter through courses given a query */
    function updateResults(){
        if(query === ""){
            setResults(COURSES.map(
                (course: Course) => ({
                    ...course,
                    creditTypes: course.creditTypes as CreditType[],
                    semestersOffered: course.semestersOffered as SemesterSeason[]
                })
            ));
        }else{
            const containsQuery = ((course: Course): boolean => getCourseString(course).toLowerCase().indexOf(query.toLowerCase()) !== -1);
            
        }
    }

    return(
        <div>
            <SearchTextField></SearchTextField>
            {
                COURSE_STRINGS.filter(course: string): boolean =>
            }
        </div>
    );
}
