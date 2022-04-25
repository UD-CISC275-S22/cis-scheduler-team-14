import React from "react";
import { Grid, List } from "@mui/material";

export function MinorRequirementList({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (currentCourses: string[], acceptable: string) => boolean;
    checkIfInListMulti: (
        currentCourses: string[],
        allowableCourses: string[]
    ) => boolean;
}): JSX.Element {
    const ciscOver200 = allCourses
        .filter(
            (course: string): boolean =>
                parseInt(course.substring(5)) >= 200 &&
                course !== "CISC 355" &&
                course !== "CISC 356" &&
                course !== "CISC 210" &&
                course !== "CISC 220"
        )
        .filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
    function getNumberOfMatches(
        currentCourses: string[],
        allowableCourses: string[]
    ): number {
        return allowableCourses.filter((course: string) =>
            currentCourses.includes(course)
        ).length;
    }
    return (
        <div>
            <p></p>
            <h5>Course Requirements</h5>
            <div style={{ textAlign: "center" }}>
                <p></p>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
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
                                    color: checkIfInListMulti(allCourses, [
                                        "CISC 106",
                                        "CISC 108"
                                    ])
                                        ? "green"
                                        : "red"
                                }}
                            >
                                CISC 106 / 108
                            </p>
                        </li>
                        <li>
                            <p
                                style={{
                                    color: checkIfInList(allCourses, "CISC 181")
                                        ? "green"
                                        : "red"
                                }}
                            >
                                CISC 181
                            </p>
                        </li>
                        <li>
                            <p
                                style={{
                                    color: checkIfInList(allCourses, "CISC 210")
                                        ? "green"
                                        : "red"
                                }}
                            >
                                CISC 210
                            </p>
                        </li>
                        <li>
                            <p
                                style={{
                                    color: checkIfInList(allCourses, "CISC 220")
                                        ? "green"
                                        : "red"
                                }}
                            >
                                CISC 220
                            </p>
                        </li>
                        <li>
                            <p
                                style={{
                                    color:
                                        getNumberOfMatches(
                                            allCourses,
                                            ciscOver200
                                        ) >= 2
                                            ? "green"
                                            : "red"
                                }}
                            >
                                6 Additional Credits of CISC at or above
                                200-level Excluding 355, 356
                            </p>
                        </li>
                    </List>
                </Grid>
            </div>
        </div>
    );
}
