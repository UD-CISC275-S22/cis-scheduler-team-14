import React from "react";
import { Stack } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    setSemesters
}: {
    semesters: Semester[];
    setSemesters: (semesters: Semester[]) => void;
}): JSX.Element {
    return (
        <div>
            <Stack gap={3}>
                {semesters.map((semester: Semester) => (
                    <div key={semester.year + "-" + semester.season}>
                        <SemesterView
                            semester={semester}
                            setSemesters={setSemesters}
                            semesters={semesters}
                        ></SemesterView>
                    </div>
                ))}
            </Stack>
        </div>
    );
}
