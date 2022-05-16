import { Course } from "../interfaces/course";
import React from "react";
import { Semester } from "../interfaces/semester";
import { Button } from "@mui/material";
import { FileDownload } from "@mui/icons-material";
import { Plan } from "../interfaces/plan";

//import React from "react";
//import { Button } from "@mui/material";
//import { Download } from "@mui/icons-material";

export function ExportCsv({
    semesters
}: {
    semesters: Semester[];
}): JSX.Element {
    //need to find course data
    const content = semesters.map((semester: Semester) => semester.courses);
    //const content: Course[] = [];
    //Need to make a nested semester and plan!
    function arrayToCsv(data: Course[]) {
        // let idNumber: Plan;
        // let whatYear: Semester;
        // //let whatSeason: Season;
        const tempData = data.map(
            (row) => `${row.name},${row.code}, ${row.credits}`
        );
        console.log(tempData);
        return data
            .map(
                (row) => `${row.name},${row.code}, ${row.credits}`
                //row
                //   .map(String) // convert every value to String
                //   .map((v: string) => v.replaceAll("", """")) // escape double colons
                //   .map((v: string) => `"${v}"`) // quote it
                //   .join(",") // comma-separated
            )
            .join("\r\n"); // rows starting on new lines
    }
    function downloadBlob(content: Course[], filename: string) {
        // Create a blob
        const blob = new Blob([arrayToCsv(content.flat())]);
        const url = URL.createObjectURL(blob);

        // Create a link to download it
        const pom = document.createElement("a");
        pom.href = url;
        pom.setAttribute("download", filename);
        console.log(url);
        pom.click();
    }
    return (
        <div>
            <Button
                type="button"
                variant="outlined"
                startIcon={<FileDownload />}
                onClick={() => downloadBlob(content.flat(), "CsvExport.CSV")}
            >
                Export Your Plan
            </Button>
        </div>
    );
}

/*function arrayToCsv(data: Course[]) {
    return data
        .map((row) => `${row.name},${row.code}, ${row.credits}`)
        .join("\r\n"); // rows starting on new lines
}

export function downloadBlob(content: Course[], filename: string) {
    // Create a blob
    const blob = new Blob([arrayToCsv(content)]);
    const url = URL.createObjectURL(blob);

    // Create a link to download it
    const pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", filename);
    pom.click();
    //downloadBlob(csv, "export.csv");
}
*/
