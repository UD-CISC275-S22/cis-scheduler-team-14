import { Semester } from "./semester";

/** A representation of a Semester that classes are scheduled in */
export interface Plan {
    /** The plan id **/
    id: number;
    /** The semesters that are in the plan **/
    semesters: Semester[];
}
