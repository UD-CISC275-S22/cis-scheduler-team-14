import { FileUpload } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Season, Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";

//data looks like this
//107
//year, season, courseList
//2021, Fall, Cisc108, Math241
//2022, Spring, Cisc181

export function ImportCsv({
    setPlans
}: {
    setPlans: (plans: Plan[]) => void;
}): JSX.Element {
    const [content, setContent] = useState<string>("No file data uploaded");
    const [open, setOpen] = React.useState(false);
    const [plans] = useState<Plan[]>([]);
    const [error, setError] = useState<string | null>(null);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    function addImportFile() {
        loadCsvData;
        readFile;
    }

    function readFile(event: React.ChangeEvent<HTMLInputElement>) {
        // Might have removed the file, need to check that the files exist
        if (event.target.files && event.target.files.length) {
            // Get the first filename
            const filename = event.target.files[0];
            // Create a reader
            const reader = new FileReader();
            // Create lambda callback to handle when we read the file
            reader.onload = (loadEvent) => {
                // Target might be null, so provide default error value
                const newContent =
                    loadEvent.target?.result || "Data was not loaded";
                // FileReader provides string or ArrayBuffer, force it to be string
                setContent(newContent as string);
                const newPlan = loadCsvData(newContent as string);
                const newPlan1: Plan[] = [];
                newPlan1.push(newPlan);
                return setPlans(newPlan1);
            };
            // Actually read the file
            reader.readAsText(filename);
        }
    }

    // Here's the kickoff function. Takes in a raw glob of string data should return a plan
    //make id-> string to number
    function loadCsvData(rawData: string): Plan {
        // Break it up into rows
        const lines = rawData.split("\n");
        console.log(lines);
        /// Fancy array destructing to get "first" and "rest" elements
        //const [header, ...body] = rows;
        const metadata = lines[0];
        const id = +metadata.substring(0);
        const semesters = getSemesters(lines.slice(2));
        const [header, ...body] = lines;
        if (header !== "Semester,Course") {
            setError("Header is corrupted or missing");
        }
        // Then we could collect the actual data
        try {
            // Could also just return the data instead, and call setPlans elsewhere
            setPlans(
                // Add this plan to our existing collection
                [
                    ...plans,
                    {
                        id: 10,
                        // Decomposition is your friend for managing complexity
                        semesters: getSemesters(body)
                    }
                ]
            );
        } catch (e) {
            // Render the original error for dev purposes
            console.error(e);
            console.log(error);
            // Let the user know something went wrong
            setError("Body is corrupted!");
        }
        return { id, semesters };
    }

    function getSeason(oneseason: string): Season {
        if (oneseason === "Fall") {
            return Season.fall;
        } else if (oneseason === "Spring") {
            return Season.spring;
        } else if (oneseason === "Winter") {
            return Season.winter;
        } else if (oneseason === "Summer") {
            return Season.summer;
        } else {
            return Season.invalid;
        }
    }
    //make a helper function that takes my index - courses and made it to a number
    //make a helper function that will take the semester number and turn it into a string ex 2020 -> "2020"
    //parse the year into a number! Also need to make sense into a season type!
    function getSemesters(rows: string[]): Semester[] {
        return rows.map((row: string): Semester => {
            const cells = row.split(",");
            const year = +cells[0];
            const season = cells[1];
            const courseList = cells.slice(2);
            return {
                year,
                season: getSeason(season),
                courses: getCourseList(courseList)
            };
        });
    }
    //Change map tp filter so you find the course that has the code for ex.
    // catalog_json.filter((data: string )) => data.code = courseString
    function getCourseList(acourse: string[]): Course[] {
        let catalog: Record<string, Course>;
        return acourse.map(
            (courseString: string): Course => catalog[courseString]
        );
    }

    return (
        <div>
            <Button
                type="button"
                variant="outlined"
                startIcon={<FileUpload />}
                onClick={handleOpen}
            >
                Import Your Plan
            </Button>
            <Modal
                show={open}
                onHide={handleClose}
                animation={false}
                fade={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <div>
                    <pre style={{ overflow: "scroll", height: "100px" }}>
                        {content}
                    </pre>
                    <Form.Group controlId="exampleForm">
                        <Form.Label>Upload a file</Form.Label>
                        <Form.Control type="file" onChange={readFile} />
                        {readFile}
                    </Form.Group>
                </div>
                <Modal.Footer>
                    <Button
                        type="button"
                        variant="text"
                        onClick={addImportFile}
                    >
                        Import File Data To Website
                    </Button>
                    <Button
                        type="button"
                        className="btn btn-success"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
