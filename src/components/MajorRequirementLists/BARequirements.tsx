import { List } from "@mui/material";
import React from "react";
import {
    groupA,
    groupB,
    groupC,
    groupD,
    secondWrite
} from "../../data/universityreqs";

export function BARequirements({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
    checkIfInListMulti: (pool: string[], find: string[]) => boolean;
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
                            color: languageReq.length > 0 ? "green" : "red"
                        }}
                    >
                        Language Requirement
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, secondWrite)
                                ? "green"
                                : "red"
                        }}
                    >
                        Second Writing Requirement
                    </p>
                    <p
                        style={{
                            color:
                                getCommonCourses(allCourses, groupA).length >= 3
                                    ? "green"
                                    : "red"
                        }}
                    >
                        Six Additional Creative Arts and Humanities
                    </p>
                    <p
                        style={{
                            color:
                                getCommonCourses(allCourses, groupB).length >= 3
                                    ? "green"
                                    : "red"
                        }}
                    >
                        Six Additional History and Cultural Change
                    </p>
                    <p
                        style={{
                            color:
                                getCommonCourses(allCourses, groupC).length >= 3
                                    ? "green"
                                    : "red"
                        }}
                    >
                        Six Additional Social and Behavioral Sciences
                    </p>
                    <p
                        style={{
                            color:
                                getCommonCourses(allCourses, groupD).length >= 3
                                    ? "green"
                                    : "red"
                        }}
                    >
                        Seven Additional Math, Natural Science and Technology
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
                            color: checkIfInList(allCourses, "CISC 108")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 108
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 181")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 181
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 210")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 210
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 220")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 220
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 260")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 260
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 275")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 275
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 210")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 210
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 241")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 241
                    </p>
                    <p
                        style={{
                            color: BAADDTCISCCOURSES >= 5 ? "green" : "red"
                        }}
                    >
                        15 Additional Credits of CISC Electives
                    </p>
                </li>
            </List>
        </div>
    );
}
