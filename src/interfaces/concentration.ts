import { Course } from "./course";

/** A representation of a Major concentration with special requirements */
export interface Concentration {
    /**The name of the concentration */
    name: string;
    /**A list of Course objects representing what courses need to be taken to fufill the concentration */
    requiredCourses: Course[];
}
