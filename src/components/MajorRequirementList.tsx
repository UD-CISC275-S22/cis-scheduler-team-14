import { Grid, List } from "@mui/material";
import React from "react";
import { ArtificialIntelligenceConc } from "./MajorRequirementLists/ArtificialIntelligenceConc";
import { BARequirements } from "./MajorRequirementLists/BARequirements";
import { BioinformaticsConc } from "./MajorRequirementLists/BioinformaticsConc";
import { BSMajorRequirements } from "./MajorRequirementLists/BSMajorRequirements";
import { BSRequirements } from "./MajorRequirementLists/BSRequirements";
import { UniversityRequirements } from "./MajorRequirementLists/UniversityRequirements";

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
                    <UniversityRequirements
                        allCourses={allCourses}
                        checkIfInList={checkIfInList}
                        checkIfInListMulti={checkIfInListMulti}
                    ></UniversityRequirements>
                    {baBs === "BA" ? (
                        <div>
                            <BARequirements
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                                checkIfInListMulti={checkIfInListMulti}
                            ></BARequirements>
                        </div>
                    ) : (
                        <div>
                            <BSRequirements
                                allCourses={allCourses}
                            ></BSRequirements>
                            <BSMajorRequirements
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                                checkIfInListMulti={checkIfInListMulti}
                            ></BSMajorRequirements>
                        </div>
                    )}
                    {conc == "AI" && baBs == "BS" ? (
                        <div>
                            <ArtificialIntelligenceConc
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                                checkIfInListMulti={checkIfInListMulti}
                            ></ArtificialIntelligenceConc>
                        </div>
                    ) : (
                        <></>
                    )}
                    {conc == "Bioinformatics" && baBs == "BS" ? (
                        <div>
                            <BioinformaticsConc
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                                checkIfInListMulti={checkIfInListMulti}
                            ></BioinformaticsConc>
                        </div>
                    ) : (
                        <></>
                    )}
                    {conc == "Cybersecurity" && baBs == "BS" ? (
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
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 361"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 361
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 372"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 372
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 450"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 450
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 464"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 464
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 465"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 465
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 494"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 494
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                advCyberRequirement.length > 2
                                                    ? "green"
                                                    : "red"
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
                    ) : (
                        <></>
                    )}
                    {conc == "DataSci" && baBs == "BS" ? (
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
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 304"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 304
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 372"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 372
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 437"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 437
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 481"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 481
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "MATH 205"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        MATH 205
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "MATH 242"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        MATH 242
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "MATH 243"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        MATH 243
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "MATH 349"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        MATH 349
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInListMulti(
                                                allCourses,
                                                ["CISC 483", "CISC 484"]
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Advanced Data Science
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInListMulti(
                                                allCourses,
                                                [
                                                    "MATH 302",
                                                    "MATH 350",
                                                    "MATH 426"
                                                ]
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Advanced Math
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                DATASCIrestrictCourses.length >
                                                2
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        Restricted Electives
                                    </p>
                                </li>
                            </List>
                        </div>
                    ) : (
                        <></>
                    )}
                </Grid>
            </div>
        </div>
    );
}
