import { Course } from "./course";

/** SemesterType describes what season the semester takes place */
export type SemesterSeason = "FALL" | "WINTER" | "SPRING" | "SUMMER" | "EMPTY";

/** A representation of a Semester that classes are scheduled in */
export interface Semester {
    /** The year that the semester takes place */
    year: number;
    /** The ID of the semester */
    id: number;
    /** The season that the semester takes place */
    season: SemesterSeason;
    /** The total number of credits that are being taken in a semester */
    credits: number;
    /** A list of Course objects representing what courses are being taken in the semester */
    courses: Course[];
}
