import { Plan } from "../interfaces/plan";
import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { AddSemesterModal } from "./AddSemesterModal";
import { Button } from "react-bootstrap";
import { SemesterList } from "./SemesterList";
import { Course } from "../interfaces/course";

export function SemesterView({
    semester,
    setSemesters,
    deleteSemester
}: {
    semester: Semester;
    setSemesters: (semesters: Semester[]) => void;
    deleteSemester: (year: number, season: string) => void;
}): JSX.Element {
    const [courses, setCourses] = useState<Course[]>(semester.courses);
    return (
        <div className="bg-light border m-2 p-2">
            <h4>
                {semester.season} {semester.year}{" "}
            </h4>
            <h6>{courses.length} Course(s)</h6>
            {/*Delete Plan*/}
            {courses.length > 1 ? (
                <Button
                    variant="danger"
                    className="m-4"
                    onClick={() =>
                        deleteSemester(semester.year, semester.season)
                    }
                >
                    Delete Plan
                </Button>
            ) : null}
        </div>
    );
}
