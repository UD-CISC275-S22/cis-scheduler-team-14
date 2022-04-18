//import { useState } from "react";

/** A representation of a University of Delaware course from the course catalog */
export interface Course {
    /**The full name of the course */
    name: string;
    /**The department code and course ID of the course */
    code: string;
    /**Description of the course */
    description: string;
    /**The amount of credit hours the course counts for */
    credits: number;
    /**A list of CreditTypes representing the credits provided by the course */
    creditTypes: string;
    /**PreRequisites for the class */
    prerequisites: string;
    /**Restrictions on the course */
    restrictions: string;
    /**A list of SemesterTypes representing what semester(s) the course is offered in */
    semestersOffered: string;
}

/** Returns a string representing a course, such as "CISC275: Introduction to Software Engineering" */
export function getCourseString(course: Course): string {
    return course.code + ": " + course.name;
}
