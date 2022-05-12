//import { HelpOutlined } from "@mui/icons-material";
import { FileUpload } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";

export function ImportCsv(): JSX.Element {
    const [content, setContent] = useState<string>("No file data uploaded");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

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
            };
            // Actually read the file
            reader.readAsText(filename);
        }
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

/*import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import React, { Component } from "react";

let loadedData = [29, 44, 55];

// You can make up your own key however you want, but make it unique!
const saveDataKey = "MY-PAGE-DATA";

// Check if the user's data already exists
const previousData = localStorage.getItem(saveDataKey);
// If the data doesn't exist, `getItem` returns null
if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

export function Csv(): JSX.Element {
    const [data, setData] = useState<number[]>(loadedData);

    function addRandom() {
        const newNumber = Math.floor(Math.random() * 100);
        setData([...data, newNumber]);
    }

    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(data));
    }

    function loadData() {
        localStorage.getItem(saveDataKey);
    }

    return (
        <div>
            <ol>
                {data.map((value: number) => (
                    <li key={value}>{value}</li>
                ))}
            </ol>
            <Button onClick={saveData}>Save Data</Button>
            <Button onClick={addRandom}>Add new random number</Button>
            <Button onClick={loadData}>Load Data</Button>
        </div>
    );
}
*/
/*import { Course } from "../interfaces/course";

export const exportToCsv = (
    filename: string,
    rows: Course[],
    headers?: string[]
): void => {
    if (!rows || !rows.length) {
        return;
    }
    const separator = ",";

    const keys: Course[] = rows;

    let columHearders: string[];

    if (headers) {
        columHearders = headers;
    } else {
        columHearders = keys.map((key: Course) => key.code);
    }

    const csvContent =
        "sep=,\n" +
        columHearders.join(separator) +
        "\n" +
        rows
            .map((row) => {
                return keys
                    .map((key: Course) => {
                        const cell =
                            key === null || key === undefined ? "" : key;
                        return cell;
                    })
                    .join(separator);
            })
            .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    //if (navigator.msSaveBlob) {
    // In case of IE 10+
    //    navigator.msSaveBlob(blob, filename);
    //} else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    //}
};
*/
