import {
    BiotechOutlined,
    CalculateOutlined,
    DataObjectOutlined,
    DataThresholdingOutlined,
    FunctionsOutlined,
    LockOutlined,
    NumbersOutlined,
    SmartToyOutlined,
    Visibility,
    VisibilityOff
} from "@mui/icons-material";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent
} from "@mui/material";
import React, { useState } from "react";
import { Plan } from "../interfaces/plan";
import { RequirementList } from "./RequirementList";

export function RequirementsViewer({
    plan,
    majMin,
    setMajMin,
    baBs,
    setBaBs,
    conc,
    setConc
}: {
    plan: Plan;
    majMin: string;
    setMajMin: (newMajMin: string) => void;
    baBs: string;
    setBaBs: (newBaBs: string) => void;
    conc: string;
    setConc: (newConc: string) => void;
}): JSX.Element {
    const [showCourseList, setShowCourseList] = useState<boolean>(false);
    return (
        <div
            style={{
                backgroundColor: "lightcyan",
                borderRadius: "25px",
                padding: "10px",
                border: "1px black",
                borderStyle: "solid",
                textAlign: "center"
            }}
        >
            <div data-testid="requirementsViewer">
                <h3>Requirement Checker</h3>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                        Major/Minor
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={majMin}
                        onChange={(event: SelectChangeEvent) => {
                            setMajMin(event.target.value);
                        }}
                        label="Major/Minor"
                    >
                        <MenuItem data-testid="MajorSelect" value={"Major"}>
                            Major
                        </MenuItem>
                        <MenuItem data-testid="MinorSelect" value={"Minor"}>
                            Minor
                        </MenuItem>
                    </Select>
                </FormControl>
                {majMin === "Major" ? (
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                    >
                        <InputLabel id="demo-simple-select-standard-label">
                            BS / BA
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={baBs}
                            onChange={(event: SelectChangeEvent) => {
                                setBaBs(event.target.value);
                            }}
                            label="BS / BA"
                        >
                            <MenuItem value={"BS"}>BS</MenuItem>
                            <MenuItem value={"BA"}>BA</MenuItem>
                        </Select>
                    </FormControl>
                ) : (
                    <></>
                )}
                {majMin === "Major" && baBs === "BS" ? (
                    <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                    >
                        <InputLabel id="demo-simple-select-standard-label">
                            Concentration
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={conc}
                            onChange={(event: SelectChangeEvent) => {
                                setConc(event.target.value);
                            }}
                            label="Concentration"
                        >
                            <MenuItem value={"AI"}>
                                {
                                    <SmartToyOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                Artificial Intelligence & Robotics
                            </MenuItem>
                            <MenuItem value={"Bioinformatics"}>
                                {
                                    <BiotechOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                Bioinformatics
                            </MenuItem>
                            <MenuItem value={"Cybersecurity"}>
                                {
                                    <LockOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                Cybersecurity
                            </MenuItem>
                            <MenuItem value={"DataSci"}>
                                {
                                    <DataThresholdingOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                Data Science
                            </MenuItem>
                            <MenuItem value={"HighPerfMath"}>
                                {
                                    <CalculateOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                High Performance Computing - Applied Math
                            </MenuItem>
                            <MenuItem value={"HighPerfData"}>
                                {
                                    <DataObjectOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                High Performance Computing - Data
                            </MenuItem>
                            <MenuItem value={"TheoryDiscrete"}>
                                {
                                    <NumbersOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                Theory and Computation - Discrete
                            </MenuItem>
                            <MenuItem value={"TheoryContinuous"}>
                                {
                                    <FunctionsOutlined
                                        style={{ marginRight: "8px" }}
                                    />
                                }
                                Theory and Computation - Continuous
                            </MenuItem>
                        </Select>
                    </FormControl>
                ) : (
                    <></>
                )}
            </div>
            {/* Button to show met / unmet requirements*/}
            {showCourseList ? (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<VisibilityOff />}
                    onClick={() => {
                        setShowCourseList(false);
                    }}
                >
                    Hide Requirements
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Visibility />}
                    data-testid="showRequirementsButton"
                    onClick={() => {
                        setShowCourseList(true);
                    }}
                >
                    Show Requirements
                </Button>
            )}
            {showCourseList ? (
                <RequirementList
                    plan={plan}
                    majMin={majMin}
                    baBs={baBs}
                    conc={conc}
                />
            ) : (
                <></>
            )}
        </div>
    );
}
