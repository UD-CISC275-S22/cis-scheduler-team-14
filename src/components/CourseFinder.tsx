import { useState } from "react";
import { Course, CreditType } from "../interfaces/course";
import { SemesterSeason } from "../interfaces/semester";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder(courseData: Course[]): JSX.Element {
    const [query, setQuery] = useState<string>("");
    const [queryType, setQueryType] = useState<string>("id");

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
    function SearchTypeButtons();

    return(
        
    );
}
