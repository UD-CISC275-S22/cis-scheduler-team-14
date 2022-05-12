import { List } from "@mui/material";
import React from "react";

export function CybersecurityConc({
    allCourses,
    checkIfInList
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
}): JSX.Element {
    function getCommonCourses(
        currentCourses: string[],
        acceptable: string[]
    ): string[] {
        return currentCourses.filter((course) => acceptable.includes(course));
    }
    const advCyberRequirement = getCommonCourses(allCourses, [
        "CPEG 472",
        "CPEG 473",
        "CPEG 475",
        "CPEG 476",
        "CPEG 495"
    ]);
    const Cyberrestrict = [
        "MATH 242",
        "MATH 349",
        "MATH 549",
        "CISC 304",
        "CISC 436",
        "CISC 437",
        "CISC 440",
        "CISC 442",
        "CISC 449",
        "CISC 453",
        "CISC 459",
        "CISC 481",
        "CISC 483",
        "CISC 484",
        "CISC 474",
        "CPEG 470",
        "CPEG 471",
        "CPEG 472",
        "CPEG 473",
        "CPEG 475",
        "CPEG 476",
        "CPEG 494",
        "CPEG 495",
        "ELEG 387",
        "ELEG 487"
    ];
    const CYBERrestrictcourses = getCommonCourses(allCourses, Cyberrestrict);
    return (
        <div>
            <p>Cybersecurity Concentration Requirements</p>
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
                            color: checkIfInList(allCourses, "CISC 464")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 464
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 465")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 465
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 494")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 494
                    </p>
                    <p
                        style={{
                            color:
                                advCyberRequirement.length > 2 ? "green" : "red"
                        }}
                    >
                        Advanced Cybersecurity Requirement
                    </p>
                    <p
                        style={{
                            color:
                                CYBERrestrictcourses.length > 2
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
