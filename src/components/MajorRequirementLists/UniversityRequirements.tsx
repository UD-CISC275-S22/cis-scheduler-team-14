import { List } from "@mui/material";
import React from "react";
import {
    capstone,
    dle,
    firstYearExp,
    groupA,
    groupB,
    groupC,
    groupD,
    multiCult
} from "../../data/universityreqs";

export function UniversityRequirements({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
    checkIfInListMulti: (pool: string[], find: string[]) => boolean;
}): JSX.Element {
    return (
        <div>
            <h6>University Requirements</h6>
            <List
                sx={{
                    maxWidth: 360,
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 300,
                    "& ul": { padding: 0 }
                }}
            >
                <li>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "ENGL 110")
                                ? "green"
                                : "red"
                        }}
                    >
                        ENGL 110
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, firstYearExp)
                                ? "green"
                                : "red"
                        }}
                    >
                        First Year Seminar
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, dle)
                                ? "green"
                                : "red"
                        }}
                    >
                        Discovery Learning Experience
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, multiCult)
                                ? "green"
                                : "red"
                        }}
                    >
                        Multicultural
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, groupA)
                                ? "green"
                                : "red"
                        }}
                    >
                        University Breadth: Creative Arts and Humanities
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, groupB)
                                ? "green"
                                : "red"
                        }}
                    >
                        University Breadth: History & Cultural Change
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, groupC)
                                ? "green"
                                : "red"
                        }}
                    >
                        University Breadth: Social & Behavioral Sciences
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, groupD)
                                ? "green"
                                : "red"
                        }}
                    >
                        University Breadth: Mathematics, Natural Sciences, and
                        Technology
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, capstone)
                                ? "green"
                                : "red"
                        }}
                    >
                        Capstone Experience
                    </p>
                </li>
            </List>
        </div>
    );
}
