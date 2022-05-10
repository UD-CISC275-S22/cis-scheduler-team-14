import { List } from "@mui/material";
import React from "react";

export function ArtificialIntelligenceConc({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
    checkIfInListMulti: (pool: string[], find: string[]) => boolean;
}): JSX.Element {
    /**Get number of courses in AllCourses that are also in AIrestrict */
    function getCommonCourses(
        currentCourses: string[],
        acceptable: string[]
    ): string[] {
        return currentCourses.filter((course) => acceptable.includes(course));
    }
    const AIrestrict = [
        "CISC 436",
        "CISC 437",
        "CISC 489",
        "CISC 889",
        "EDUC 462",
        "ELEG 404",
        "ELEG 418",
        "ELEG 387",
        "ELEG 487",
        "LING 202",
        "LING 404",
        "LING 418",
        "LING 444",
        "LING 451",
        "LING 455",
        "MAST 632",
        "MATH 242",
        "MATH 349",
        "MEEG 671",
        "PSYC 310",
        "PSYC 340",
        "PSYC 344"
    ];
    const AIrestrictCourses = getCommonCourses(allCourses, AIrestrict);
    return (
        <div>
            <p>Artificial Intelligence Concentration Requirements</p>
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
                            color: checkIfInList(allCourses, "CISC 442")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 442
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
                            color: checkIfInList(allCourses, "CISC 483")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 483
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 484")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 484
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, [
                                "CISC 361",
                                "CISC 372"
                            ])
                                ? "green"
                                : "red"
                        }}
                    >
                        Systems Requirement
                    </p>
                    <p
                        style={{
                            color:
                                AIrestrictCourses.length > 4 ? "green" : "red"
                        }}
                    >
                        Restricted Electives
                    </p>
                </li>
            </List>
        </div>
    );
}
