import React, { useState } from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export function SemesterView({
    semester,
    setSemesters,
    semesters
}: {
    semester: Semester;
    setSemesters: (semesters: Semester[]) => void;
    semesters: Semester[];
}): JSX.Element {
    const [courses] = useState<Course[]>(semester.courses);
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
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="secondary"
                    className="m-2"
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
