import { List } from "@mui/material";
import React from "react";

export function TheoryContinuousConc({
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
            <p>Theory and Computation - Continuous Concentration</p>
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
                            color: checkIfInList(allCourses, "MATH 243")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 243
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 302")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 302
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 535")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 535
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "MATH 426")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 426
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
