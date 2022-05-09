//import { HelpOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";
import catalog_json from "../data/catalog.json";
import { Semester } from "../interfaces/semester";
import { CourseList } from "./CourseList";
import { stringify } from "querystring";
import { Plan } from "../interfaces/plan";

export function ImportCsv(): JSX.Element {
    const [content, setContent] = useState<string>("No file data uploaded");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    // const COURSECATALOG = Object.values(catalog_json);
    const [semester, setSemester] = useState<Semester>();
    const [plans, setPlans] = useState<Plan[]>([]);

    //<R> Stream </R> new Map(function () { }, super.T, R > mapper)

    function uploadFile(event: React.ChangeEvent<HTMLInputElement>) {
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
                console.log(newContent);
                console.log("new text");
                const newText = newContent as string;
                console.log(newText);
                //console.log(newContent.size);
                const newArray = newText.split("\n");
                const newData = newArray.map((data: string) => data.split(","));
                console.log(newData);
                let newSemesterUser: Semester;
                let newPlanUser: Plan;

                newSemesterUser = newData.map((data: Semester) =>
                    newSemesterUser.push(data)
                );

                setSemester(newSemesterUser);

                //how to add newData to semester and then add that semester to a new plan
                //set that plan so they can see

                //     newSemsterUser = newData.map((data: Semester) =>
                //         newSemester.push(data)
                //     );
                //    newPlanUser = newData.map((data: Plan) => newPlan.plan.push(data));
                //     setPlans(newPlan);
                // newSemesterUser.season
                // const moreData = COURSECATALOG.filter(
                //     (data: Course) => (data.code = newData[0][0])
                // );
                // console.log(moreData);
                // newSemsterUser.courses.push(moreData);
                // const moreData = newData.filter(
                //     (data: string) => data.split(",")[0]
                // );
                //const newName = newData.map((data:string) => data[0]);
                //console.log(newArray[0]);
                //console.log(newData);
                //Course.name = newData[0];
                //Course.code = newData[1];
                //Course.credits = newData[2];
            };
            // Actually read the file
            reader.readAsText(filename);
        }
    }
    return (
        <div>
            <Button
                type="button"
                className="btn btn-success"
                href="#contained-buttons"
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
                <Modal.Body>
                    <pre style={{ overflow: "scroll", height: "100px" }}>
                        {content}
                    </pre>
                    <Form.Group controlId="exampleForm">
                        <Form.Label>Upload a file</Form.Label>
                        <Form.Control type="file" onChange={uploadFile} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
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
