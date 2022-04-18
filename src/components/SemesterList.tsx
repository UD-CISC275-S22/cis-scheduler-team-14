import React from "react";
import { Stack } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    setSemesters,
    pool,
    setPool
}: {
    semesters: Semester[];
    setSemesters: (semesters: Semester[]) => void;
    pool: Course[];
    setPool: (newPool: Course[]) => void;
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
                            pool={pool}
                            setPool={setPool}
                        ></SemesterView>
                    </div>
                ))}
            </Stack>
        </div>
    );
}
