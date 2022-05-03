import React from "react";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { MajorRequirementList } from "./MajorRequirementList";
import { MinorRequirementList } from "./MinorRequirementList";

export function RequirementList({
    plan,
    majMin,
    baBs,
    conc
}: {
    plan: Plan;
    majMin: string;
    baBs: string;
    conc: string;
}): JSX.Element {
    const allCoursesObjects: Course[] = plan.semesters.flatMap(
        (semester: Semester): Course[] => semester.courses
    );
    const allCourses: string[] = allCoursesObjects.map(
        (course: Course): string => course.code
    );
    function checkIfInList(
        currentCourses: string[],
        acceptable: string
    ): boolean {
        return currentCourses.indexOf(acceptable) !== -1;
    }
    function checkIfInListMulti(
        currentCourses: string[],
        allowableCourses: string[]
    ): boolean {
        return allowableCourses.some((course: string) =>
            currentCourses.includes(course)
        );
    }
    return (
        <div data-testid="majorMinorContainer">
            {majMin === "Major" ? (
                <MajorRequirementList
                    allCourses={allCourses}
                    checkIfInList={checkIfInList}
                    checkIfInListMulti={checkIfInListMulti}
                    baBs={baBs}
                    conc={conc}
                />
            ) : (
                <MinorRequirementList
                    allCourses={allCourses}
                    checkIfInList={checkIfInList}
                    checkIfInListMulti={checkIfInListMulti}
                />
            )}
        </div>
    );
}
