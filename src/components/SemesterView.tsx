import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function SemesterView({
    semester,
    setSemesters,
    semesters
}: {
    semester: Semester;
    setSemesters: (semesters: Semester[]) => void;
    semesters: Semester[];
}): JSX.Element {
    const [courses, setCourses] = useState<Course[]>(semester.courses);
    function deleteSemester(year: number, season: string) {
        const newSemesters = semesters.filter(
            (semester: Semester) =>
                semester.year !== year || semester.season !== season
        );
        setSemesters(newSemesters);
    }
    return (
        <div className="bg-light border m-2 p-2">
            <h4>
                {semester.season} {semester.year}{" "}
            </h4>
            <h6>{courses.length} Course(s)</h6>
            {/*Delete Semester*/}
            {semesters.length > -1 ? (
                <Button
                    variant="danger"
                    className="m-1"
                    onClick={() =>
                        deleteSemester(semester.year, semester.season)
                    }
                >
                    Delete Semester
                </Button>
            ) : null}
        </div>
    );
}
