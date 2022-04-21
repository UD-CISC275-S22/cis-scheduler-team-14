//import { useState } from "react";

/** A representation of a University of Delaware course from the course catalog */
export interface Course {
    /**The department code and course ID of the course */
    code: string;
    /**The full name of the course */
    name: string;
    /**Description of the course */
    descr: string;
    /**The amount of credit hours the course counts for */
    credits: string;
    /**PreRequisites for the class */
    preReq: string;
    /**Restrictions on the course */
    restrict: string;
    /** A string representing what breadth requirements the course fufils*/
    breadth: string;
    /** Required for JSON */
    typ: string;
}

/** Returns a string representing a course, such as "CISC275: Introduction to Software Engineering" */
export function getCourseString(course: Course): string {
    return course.code + ": " + course.name;
}
