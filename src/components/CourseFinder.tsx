import React, { ReactHTML, useState } from "react";
import { Form } from "react-bootstrap";
import { Course, CreditType } from "../interfaces/course";
import { SemesterSeason } from "../interfaces/semester";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder(courseData: Course[]): JSX.Element {
    const [query, setQuery] = useState<string>("");
    const [field, setField] = useState<string>("ID");

    /** Imports an array of Course objects, type casts creditTypes and semestersOffered */
    const COURSES = courseData.map(
        (course): Course => ({
            ...course,
            creditTypes: course.creditTypes as CreditType[],
            semestersOffered: course.semestersOffered as SemesterSeason[]
        })
    );
    const [results, setResults] = useState<Course[]>(COURSES);

    /** A row of radio buttons for selecting what to search for [ID, NAME, SEMESTERS OFFERED, CREDIT TYPES] */
    function SearchTypeButtons(): JSX.Element {
        const SEARCH_FIELDS = [
            "ID",
            "Name",
            "Semesters Offered",
            "Credit Types"
        ];
        function updateField(event: React.ChangeEvent<HTMLInputElement>) {
            setField(event.target.value);
        }
        return (
            <div>
                {SEARCH_FIELDS.map((FIELD: string) => (
                    <Form.Check
                        inline
                        key={FIELD}
                        type="radio"
                        name="field"
                        id="radio-button-fields"
                        label={FIELD}
                        value={FIELD}
                        checked={FIELD === field}
                        onChange={updateField}
                    />
                ))}
            </div>
        );
    }

    return <div>Course Finder</div>;
}
