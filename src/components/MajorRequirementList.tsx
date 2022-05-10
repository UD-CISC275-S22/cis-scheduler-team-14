import { Grid } from "@mui/material";
import React from "react";
import { ArtificialIntelligenceConc } from "./MajorRequirementLists/ArtificialIntelligenceConc";
import { BARequirements } from "./MajorRequirementLists/BARequirements";
import { BioinformaticsConc } from "./MajorRequirementLists/BioinformaticsConc";
import { BSMajorRequirements } from "./MajorRequirementLists/BSMajorRequirements";
import { BSRequirements } from "./MajorRequirementLists/BSRequirements";
import { CybersecurityConc } from "./MajorRequirementLists/CybersecurityConc";
import { DataSciConc } from "./MajorRequirementLists/DataSciConc";
import { HighPerfDataConc } from "./MajorRequirementLists/HighPerfDataConc";
import { HighPerfMathConc } from "./MajorRequirementLists/HighPerfMathConc";
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
                            <CybersecurityConc
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                            ></CybersecurityConc>
                        </div>
                    ) : (
                        <></>
                    )}
                    {conc == "DataSci" && baBs == "BS" ? (
                        <div>
                            <DataSciConc
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                                checkIfInListMulti={checkIfInListMulti}
                            ></DataSciConc>
                        </div>
                    ) : (
                        <></>
                    )}
                    {conc == "HighPerfMath" && baBs == "BS" ? (
                        <div>
                            <HighPerfMathConc
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                                checkIfInListMulti={checkIfInListMulti}
                            ></HighPerfMathConc>
                        </div>
                    ) : (
                        <></>
                    )}
                    {conc == "HighPerfData" && baBs == "BS" ? (
                        <div>
                            <HighPerfDataConc
                                allCourses={allCourses}
                                checkIfInList={checkIfInList}
                                checkIfInListMulti={checkIfInListMulti}
                            ></HighPerfDataConc>
                        </div>
                    ) : (
                        <></>
                    )}
                </Grid>
            </div>
        </div>
    );
}
