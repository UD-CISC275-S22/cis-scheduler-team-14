import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./PlanView";
import { AddPlanModal } from "./AddPlanModal";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    setSemesters
}: {
    semesters: Semester[];
    setSemesters: (semesters: Semester[]) => void;
}): JSX.Element {
    function deleteSemester(year: number, season: string) {
        const newSemesters = semesters.filter(
            (semester: Semester) =>
                semester.year !== year || semester.season !== season
        );
        setSemesters(newSemesters);
    }
    return (
        <div>
            <Stack gap={3}>
                {semesters.map((semester: Semester) => (
                    <div
                        key={semester.year + "-" + semester.season}
                        className="bg-light border m-2 p-0"
                    >
                        <SemesterView
                            semester={semester}
                            setSemesters={setSemesters}
                            deleteSemester={deleteSemester}
                        ></SemesterView>
                    </div>
                ))}
            </Stack>
        </div>
    );
}
