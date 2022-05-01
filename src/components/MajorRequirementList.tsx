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

    /**Filters allCourses to get a list of courses that are in groupA, groupB, groupC*/
    const breadthCourses = allCourses.filter(
        (course: string): boolean =>
            groupA.includes(course) ||
            groupB.includes(course) ||
            groupC.includes(course)
    );

    /**Gets number of courses in breadthCourses that end with 300+ */
    const breadthCourses300 = breadthCourses.filter(
        (course: string): boolean => parseInt(course.substring(5)) >= 300
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

    /**Get number of courses in AllCourses that are also in AIrestrict */
    const AIrestrictCourses = getCommonCourses(allCourses, AIrestrict);

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
                        <div>
                            <p>BS Requirements</p>
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
                                                breadthCourses.length > 7
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        21 Extra Breadth Credits
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                breadthCourses300 > 2
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        6 Credits (from 21 Extra) at 300+ level
                                    </p>
                                </li>
                            </List>
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
                                                "CISC 303"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 303
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 320"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 320
                                    </p>
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
                                            color:
                                                BAADDTCISCCOURSES > 2
                                                    ? "green"
                                                    : "red"
                                        }}
                                    >
                                        Six additional CS Electives, 300+ level
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInListMulti(
                                                allCourses,
                                                ["MATH 205", "MATH 350"]
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Statistics (MATH 205 / MATH 350)
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
                                            color: metBSCapstone
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Capstone
                                    </p>
                                    <p
                                        style={{
                                            color: metScienceRequirement
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Science Requirement
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInListMulti(
                                                allCourses,
                                                ["CISC 304", "MATH 349"]
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 304 / MATH 349
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInListMulti(
                                                allCourses,
                                                ["ENGL 312", "ENGL 410"]
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        ENGL 312 / ENGL 410
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 355"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 304 / MATH 349
                                    </p>
                                </li>
                            </List>
                        </div>
                    )}
                    {conc == "AI" ? (
                        <div>
                            <p>
                                Artificial Intelligence Concentration
                                Requirements
                            </p>
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
                                                "CISC 442"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 442
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
                                                "CISC 483"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 483
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CISC 484"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 484
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInListMulti(
                                                allCourses,
                                                ["CISC 361", "CISC 372"]
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Systems Requirement
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                AIrestrictCourses.length > 4
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
                    {conc == "Bioinformatics" ? (
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
                                            color: checkIfInList(
                                                allCourses,
                                                "BISC 207"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        BISC 207
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "BISC 208"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        BISC 208
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "BISC 401"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        BISC 401
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CHEM 103"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CHEM 103
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CHEM 133"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CHEM 133
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CHEM 104"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CHEM 104
                                    </p>
                                    <p
                                        style={{
                                            color: checkIfInList(
                                                allCourses,
                                                "CHEM 134"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CHEM 134
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
                                                "CISC 436"
                                            )
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        CISC 436
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
                                            color: OrganicChemSequence
                                                ? "green"
                                                : "red"
                                        }}
                                    >
                                        Organic Chemistry Sequence
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
                                        Data Analysis Requirement
                                    </p>
                                    <p
                                        style={{
                                            color:
                                                BIOrestrictCourses.length > 2
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
                    {conc == "Cybersecurity" ? (
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
                    {conc == "DataSci" ? (
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
