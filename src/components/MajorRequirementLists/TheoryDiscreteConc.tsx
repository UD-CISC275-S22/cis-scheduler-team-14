import { List } from "@mui/material";
import React from "react";

export function TheoryDiscreteConc({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
    checkIfInListMulti: (pool: string[], find: string[]) => boolean;
}): JSX.Element {
    const restrictedElectives = [
        "CISC 372",
        "CISC 404",
        "CISC 410",
        "CISC 414",
        "CISC 471",
        "CISC 481",
        "ELEG 387",
        "ELEG 487",
        "MATH 243",
        "MATH 245",
        "MATH 302",
        "MATH 315",
        "MATH 350",
        "MATH 428",
        "MATH 450",
        "MATH 451"
    ];
    function getCommonCourses(
        currentCourses: string[],
        acceptable: string[]
    ): string[] {
        return currentCourses.filter((course) => acceptable.includes(course));
    }
    const theoryRestrictedCount = getCommonCourses(
        allCourses,
        restrictedElectives
    );
    return (
        <div>
            <p>Theory and Computation - Discrete Concentration</p>
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
                            color: checkIfInList(allCourses, "CISC 401")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 401
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
                            color: checkIfInListMulti(allCourses, [
                                "MATH 205",
                                "MATH 350"
                            ])
                                ? "green"
                                : "red"
                        }}
                    >
                        Probability/Statistics Requirement
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 404")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 404
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 245")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 245
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 315")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 315
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 451")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 451
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, [
                                "MATH 205",
                                "MATH 350"
                            ])
                                ? "green"
                                : "red"
                        }}
                    >
                        Probability/Statistics Requirement
                    </p>
                    <p
                        style={{
                            color:
                                theoryRestrictedCount.length >= 2
                                    ? "green"
                                    : "red"
                        }}
                    >
                        Restricted Electives (6 cr)
                    </p>
                </li>
            </List>
        </div>
    );
}
