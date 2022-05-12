import { List } from "@mui/material";
import React from "react";

export function BioinformaticsConc({
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
    const OrganicChemSequence =
        (checkIfInList(allCourses, "CHEM 213") &&
            checkIfInList(allCourses, "CHEM 215")) ||
        (checkIfInList(allCourses, "CHEM 321") &&
            checkIfInList(allCourses, "CHEM 325"));
    const BIOrestrict = [
        "ANFS 300",
        "ANFS 310",
        "ANFS 470",
        "BISC 403",
        "BISC 484",
        "BISC 492",
        "CHEM 214",
        "CHEM 216",
        "CHEM 322",
        "CHEM 326",
        "MATH 243"
    ];
    const BIOrestrictCourses = getCommonCourses(allCourses, BIOrestrict);
    return (
        <div>
            <p>Bioinformatics Concentration Requirements</p>
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
                            color: checkIfInList(allCourses, "BISC 207")
                                ? "green"
                                : "red"
                        }}
                    >
                        BISC 207
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "BISC 208")
                                ? "green"
                                : "red"
                        }}
                    >
                        BISC 208
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "BISC 401")
                                ? "green"
                                : "red"
                        }}
                    >
                        BISC 401
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CHEM 103")
                                ? "green"
                                : "red"
                        }}
                    >
                        CHEM 103
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CHEM 133")
                                ? "green"
                                : "red"
                        }}
                    >
                        CHEM 133
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CHEM 104")
                                ? "green"
                                : "red"
                        }}
                    >
                        CHEM 104
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CHEM 134")
                                ? "green"
                                : "red"
                        }}
                    >
                        CHEM 134
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
                            color: checkIfInList(allCourses, "CISC 436")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 436
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
                            color: checkIfInList(allCourses, "MATH 349")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 349
                    </p>
                    <p
                        style={{
                            color: OrganicChemSequence ? "green" : "red"
                        }}
                    >
                        Organic Chemistry Sequence
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
                        Data Analysis Requirement
                    </p>
                    <p
                        style={{
                            color:
                                BIOrestrictCourses.length > 2 ? "green" : "red"
                        }}
                    >
                        Restricted Electives
                    </p>
                </li>
            </List>
        </div>
    );
}
