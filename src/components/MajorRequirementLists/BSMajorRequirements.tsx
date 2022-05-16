import { List } from "@mui/material";
import React from "react";

export function BSMajorRequirements({
    allCourses,
    checkIfInList,
    checkIfInListMulti
}: {
    allCourses: string[];
    checkIfInList: (pool: string[], find: string) => boolean;
    checkIfInListMulti: (pool: string[], find: string[]) => boolean;
}): JSX.Element {
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
    const metBSCapstone =
        (checkIfInList(allCourses, "CISC 498") &&
            checkIfInList(allCourses, "CISC 499")) ||
        (checkIfInList(allCourses, "UNIV 401") &&
            checkIfInList(allCourses, "UNIV 402"));

    const metScienceRequirement =
        (checkIfInList(allCourses, "PHYS 207") &&
            checkIfInList(allCourses, "PHYS 208") &&
            checkIfInList(allCourses, "PHYS 227") &&
            checkIfInList(allCourses, "PHYS 228")) ||
        (checkIfInList(allCourses, "CHEM 103") &&
            checkIfInList(allCourses, "CHEM 104") &&
            checkIfInList(allCourses, "CHEM 133") &&
            checkIfInList(allCourses, "CHEM 134")) ||
        (checkIfInList(allCourses, "BISC 207") &&
            checkIfInList(allCourses, "BISC 208")) ||
        (checkIfInList(allCourses, "GEOL 105") &&
            checkIfInList(allCourses, "GEOL 107") &&
            checkIfInList(allCourses, "GEOL 115")) ||
        (checkIfInList(allCourses, "GEOL 107") &&
            checkIfInList(allCourses, "GEOL 110"));
    return (
        <div>
            <p>Major Requirements</p>
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
                            color: checkIfInList(allCourses, "CISC 303")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 303
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 320")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 320
                    </p>
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
                            color: BAADDTCISCCOURSES > 2 ? "green" : "red"
                        }}
                    >
                        Six additional CS Electives, 300+ level
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
                        Statistics (MATH 205 / MATH 350)
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
                            color: checkIfInList(allCourses, "MATH 242")
                                ? "green"
                                : "red"
                        }}
                    >
                        MATH 242
                    </p>
                    <p
                        style={{
                            color: metBSCapstone ? "green" : "red"
                        }}
                    >
                        Capstone
                    </p>
                    <p
                        style={{
                            color: metScienceRequirement ? "green" : "red"
                        }}
                    >
                        Science Requirement
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, [
                                "CISC 304",
                                "MATH 349"
                            ])
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 304 / MATH 349
                    </p>
                    <p
                        style={{
                            color: checkIfInListMulti(allCourses, [
                                "ENGL 312",
                                "ENGL 410"
                            ])
                                ? "green"
                                : "red"
                        }}
                    >
                        ENGL 312 / ENGL 410
                    </p>
                    <p
                        style={{
                            color: checkIfInList(allCourses, "CISC 355")
                                ? "green"
                                : "red"
                        }}
                    >
                        CISC 304 / MATH 349
                    </p>
                </li>
            </List>
        </div>
    );
}
