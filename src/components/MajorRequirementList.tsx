import { Grid, List } from "@mui/material";
import React from "react";

export function MajorRequirementList({
    allCourses,
    checkIfInList,
    checkIfInListMulti,
    baBs,
    conc
}: {
    allCourses: string[];
    checkIfInList: (currentCourses: string[], acceptable: string) => boolean;
    checkIfInListMulti: (
        currentCourses: string[],
        allowableCourses: string[]
    ) => boolean;
    baBs: string;
    conc: string;
}): JSX.Element {
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
                    </List>
                </Grid>
            </div>
        </div>
    );
}
