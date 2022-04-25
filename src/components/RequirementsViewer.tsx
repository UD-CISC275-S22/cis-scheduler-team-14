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
            <div>
                <h5>Requirements</h5>
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
                        <MenuItem value={"Major"}>Major</MenuItem>
                        <MenuItem value={"Minor"}>Minor</MenuItem>
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
                                Artificial Intelligence & Robotics
                            </MenuItem>
                            <MenuItem value={"Bioinformatics"}>
                                Bioinformatics
                            </MenuItem>
                            <MenuItem value={"Cybersecurity"}>
                                Cybersecurity
                            </MenuItem>
                            <MenuItem value={"DataSci"}>Data Science</MenuItem>
                            <MenuItem value={"HighPerf"}>
                                High Performance Computing
                            </MenuItem>
                            <MenuItem value={"Theory"}>
                                Theory and Computation
                            </MenuItem>
                            <MenuItem value={"Trad"}>
                                Traditional Program
                            </MenuItem>
                        </Select>
                    </FormControl>
                ) : (
                    <></>
                )}
            </div>
            {/* Button to show met / unmet requirements*/}
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    setShowCourseList(!showCourseList);
                }}
            >
                Show Requirements
            </Button>
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
