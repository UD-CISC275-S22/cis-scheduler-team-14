//import { useState } from "react";
import { SemesterSeason } from "./semester";

/**CourseType describes what credit(s) the course fufills
 * NOTE: We can add more course types as we see fit, these are just the ones I could think of.
 */
export type CreditType =
    | "MAJOR_REQUIREMENT"
    | "CONCENTRATION_REQUIREMENT"
    | "ELECTIVE"
    | "TECH_ELECTIVE"
    | "BREADTH_REQUIREMENT";

/** A representation of a University of Delaware course from the course catalog */
export interface Course {
    /**The full name of the course */
    name: string;
    /**The three or four letter abbreviation for the department the course is a part of */
    department: string;
    /**The three or four digit code that represents the course */
    id: string;
    /**The course section number */
    section: string;
    /**The name of the course instructor */
    instructor: string;
    /**The amount of credit hours the course counts for */
    credits: number;
    /**A list of CreditTypes representing the credits provided by the course */
    creditTypes: CreditType[];
    /**A list of SemesterTypes representing what semester(s) the course is offered in */
    semestersOffered: SemesterSeason[];
}

/** Returns a string representing a course, such as "CISC275: Introduction to Software Engineering" */
export function getCourseString(course: Course): string {
    return course.department + course.id + ": " + course.name;
}
