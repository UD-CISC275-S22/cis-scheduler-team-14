import { List } from "@mui/material";
import React from "react";

export function HighPerfDataConc({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
    checkIfInListMulti: (pool: string[], find: string[]) => boolean;
}): JSX.Element {
    const csCoursesOver300 = allCourses.filter(
        (course: string): boolean =>
            parseInt(course.substring(5)) >= 301 &&
            course !== "CISC 355" &&
            course !== "CISC 356" &&
            course !== "CISC 357" &&
            course !== "CISC 366" &&
            course !== "CISC 465" &&
            course !== "CISC 466"
    ).length;
    return (
        <div>
            <p>High Performance Computing - Math Concentration</p>
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
                            color: checkIfInList(allCourses, "CISC 360")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 360
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 361")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 361
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 372")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 372
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 450")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 450
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 471")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 471
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 242")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 242
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 243")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 243
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 437")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 437
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 350")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 350
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 450")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 450
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, [
                                "CISC 483",
                                "CISC 484"
                            ])
                                ? "green"
                                : "red"
                        }}
                    >
                        Machine Learning Requirement
                    </p>
                    <p
                        style={{
                            color: csCoursesOver300 > 1 ? "green" : "red"
                        }}
                    >
                        Data Track Electives
                    </p>
                </li>
            </List>
        </div>
    );
}
