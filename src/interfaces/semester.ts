//import { CourseFinder } from "../components/CourseFinder";
import { Course } from "./course";

/** Season describes what season the semester takes place */

export enum Season {
    winter = "Winter",
    spring = "Spring",
    summer = "Summer",
    fall = "Fall",
    invalid = ""
}

/** A representation of a Semester that classes are scheduled in */
export interface Semester {
    /** The year that the semester takes place, ex 2022 */
    year: number;
    /** The season that the semester takes place, ex Winter */
    season: Season;
    /** A list of Course objects representing what courses are being taken in the semester */
    courses: Course[];
}
