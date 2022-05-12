import { List } from "@mui/material";
import React from "react";

export function DataSciConc({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
    checkIfInListMulti: (pool: string[], find: string[]) => boolean;
}): JSX.Element {
    function getCommonCourses(
        currentCourses: string[],
        acceptable: string[]
    ): string[] {
        return currentCourses.filter((course) => acceptable.includes(course));
    }
    const DATASCIrestrict = [
        "CISC 361",
        "CISC 410",
        "CISC 436",
        "CISC 440",
        "CISC 442",
        "CISC 449",
        "CISC 450",
        "CISC 471",
        "CISC 474",
        "CISC 483",
        "CISC 484",
        "CISC 489",
        "ELEG 387",
        "ELEG 487",
        "MATH 302",
        "MATH 350",
        "MATH 428",
        "MATH 450"
    ];

    const DATASCIrestrictCourses = getCommonCourses(
        allCourses,
        DATASCIrestrict
    );
    return (
        <div>
            <p>Data Science Concentration Requirements</p>
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
                            color: checkIfInList(allCourses, "CISC 304")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 304
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
                            color: checkIfInList(allCourses, "CISC 437")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 437
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 481")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 481
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 205")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 205
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
                            color: checkIfInList(allCourses, "MATH 349")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 349
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
                        Advanced Data Science
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, [
                                "MATH 302",
                                "MATH 350",
                                "MATH 426"
                            ])
                                ? "green"
                                : "red"
                        }}
                    >
                        Advanced Math
                    </p>
                    <p
                        style={{
                            color:
                                DATASCIrestrictCourses.length > 2
                                    ? "green"
                                    : "red"
                        }}
                    >
                        Restricted Electives
                    </p>
                </li>
            </List>
        </div>
    );
}
