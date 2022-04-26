import { Grid, List } from "@mui/material";
import React from "react";
import {
    capstone,
    dle,
    firstYearExp,
    groupA,
    groupB,
    groupC,
    groupD,
    multiCult,
    secondWrite
} from "../data/universityreqs";

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
    const languages = [
        "GREK 202",
        "CHIN 107",
        "FREN 107",
        "GRMN 107",
        "ITAL 107",
        "JAPN 107",
        "JAPN 202",
        "LATN 202",
        "RUSS 107",
        "SPAN 107"
    ];

    function getCommonCourses(
        currentCourses: string[],
        acceptable: string[]
    ): string[] {
        return currentCourses.filter((course) => acceptable.includes(course));
    }

    const languageReq = getCommonCourses(allCourses, languages);

    /**get number of courses with 5 character being greater than 3 */
    const BAADDTCISCCOURSES = allCourses.filter(
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
                                    color: checkIfInListMulti(
                                        allCourses,
                                        firstYearExp
                                    )
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
                                    color: checkIfInListMulti(
                                        allCourses,
                                        multiCult
                                    )
                                        ? "green"
                                        : "red"
                                }}
                            >
                                Multicultural
                            </p>
                            <p
                                style={{
                                    color: checkIfInListMulti(
                                        allCourses,
                                        groupA
                                    )
                                        ? "green"
                                        : "red"
                                }}
                            >
                                University Breadth: Creative Arts and Humanities
                            </p>
                            <p
                                style={{
                                    color: checkIfInListMulti(
                                        allCourses,
                                        groupB
                                    )
                                        ? "green"
                                        : "red"
                                }}
                            >
                                University Breadth: History & Cultural Change
                            </p>
                            <p
                                style={{
                                    color: checkIfInListMulti(
                                        allCourses,
                                        groupC
                                    )
                                        ? "green"
                                        : "red"
                                }}
                            >
                                University Breadth: Social & Behavioral Sciences
                            </p>
                            <p
                                style={{
                                    color: checkIfInListMulti(
                                        allCourses,
                                        groupD
                                    )
                                        ? "green"
                                        : "red"
                                }}
                            >
                                University Breadth: Mathematics, Natural
                                Sciences, and Technology
                            </p>
                            <p
                                style={{
                                    color: checkIfInListMulti(
                                        allCourses,
                                        capstone
                                    )
                                        ? "green"
                                        : "red"
                                }}
                            >
                                Capstone Experience
                            </p>
                        </li>
                    </List>
                    {baBs === "BA" ? (
                        <div>
                            <h6>BA Requirements</h6>
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
                                            color:
                                                languageReq.length > 0
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        Language Requirement
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInListMulti(
                                                allCourses,
                                                secondWrite
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Second Writing Requirement
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                getCommonCourses(
                                                    allCourses,
                                                    groupA
                                                ).length >= 3
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        Six Additional Creative Arts and
                                        Humanities
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                getCommonCourses(
                                                    allCourses,
                                                    groupB
                                                ).length >= 3
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        Six Additional History and Cultural
                                        Change
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                getCommonCourses(
                                                    allCourses,
                                                    groupC
                                                ).length >= 3
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        Six Additional Social and Behavioral
                                        Sciences
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                getCommonCourses(
                                                    allCourses,
                                                    groupD
                                                ).length >= 3
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        Seven Additional Math, Natural Science
                                        and Technology
                                    </p>
                                </li>
                            </List>
                            <h6>Major Requirements</h6>
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
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 108"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 108
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 181"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 181
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 210"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 210
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 220"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 220
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 260"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 260
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 275"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 275
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "MATH 210"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        MATH 210
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "MATH 241"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        MATH 241
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                BAADDTCISCCOURSES >= 5
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        15 Additional Credits of CISC Electives
                                    </p>
                                </li>
                            </List>
                        </div>
                    ) : (
                        <p>BS Requirements</p>
                    )}
                </Grid>
            </div>
        </div>
    );
}
