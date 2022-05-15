//import { HelpOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course, getCourseString } from "../interfaces/course";
import catalog_json from "../data/catalog.json";
import { Season, Semester } from "../interfaces/semester";
import { CourseList } from "./CourseList";
import { stringify } from "querystring";
import { Plan } from "../interfaces/plan";

//data looks like this
//107
//year, season, courseList
//2021, Fall, Cisc108, Math241
//2022, Spring, Cisc181

export function ImportCsv(): JSX.Element {
    const [content, setContent] = useState<string>("No file data uploaded");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    // const COURSECATALOG = Object.values(catalog_json);
    // Assuming data was something simple like this...

    // You want the actual data storage useState, but also need something
    // to handle the fact that the parsing can fail!
    // ...
    const [plans, setPlans] = useState<Plan[]>([]);
    const [error, setError] = useState<string | null>(null);
    // ...

    // Here's the kickoff function. Takes in a raw glob of string data should return a plan
    //make id-> string to number
    function loadCsvData(rawData: string): Plan {
        // Break it up into rows
        const lines = rawData.split("\n");
        /// Fancy array destructing to get "first" and "rest" elements
        //const [header, ...body] = rows;
        const metadata = lines[0];
        const id = +metadata.substring(0);
        const semesters = getSemesters(lines.slice(2));
        return { id, semesters };
        // I'd do a heckton more sanity checking, but as an example...
        // if (header !== "Semester,Course") {
        //    setError("Header is corrupted or missing");
        //}
        // Then we could collect the actual data
        // try {
        //     // Could also just return the data instead, and call setPlans elsewhere
        //     setPlans(
        //         // Add this plan to our existing collection
        //         [
        //             ...plans,
        //             {
        //                 id: 10,
        //                 // Decomposition is your friend for managing complexity
        //                 semesters: makeSemesters(body)
        //             }
        //         ]
        //     );
        // } catch (e) {
        //     // Render the original error for dev purposes
        //     console.error(e);
        //     // Let the user know something went wrong
        //     setError("Body is corrupted!");
        // }
    }
    function getSeason(oneseason: string): Season {
        if (oneseason === "Fall") {
            enum Season {
                winter = "",
                spring = "",
                summer = "",
                fall = "Fall"
            }
            return Season.fall;
        } else if (oneseason === "Spring") {
            enum Season {
                winter = "",
                spring = "Spring",
                summer = "",
                fall = ""
            }
            return Season.spring;
        } else if (oneseason === "Winter") {
            enum Season {
                winter = "Winter",
                spring = "",
                summer = "",
                fall = ""
            }
            return Season.winter;
        } else if (oneseason === "Summer") {
            enum Season {
                winter = "",
                spring = "",
                summer = "Summer",
                fall = ""
            }
            return Season.summer;
        }
        return Season;
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
            return { year, season, courses: getCourseList(courseList) };
        });
    }
    //Change map tp filter so you find the course that has the code for ex.
    // catalog_json.filter((data: string )) => data.code = courseString
    function getCourseList(acourse: string[]): Course[] {
        return acourse.map(
            (courseString: string): Course => catalog_json[courseString]
        );
    }

    // function makeSemesters(body: string[]): Semester[] {
    //     // Need to do a bit of fancy logic to "group by"
    //     // eslint-disable-next-line prettier/prettier
    //     // interface sznAndCourses {
    //     //     s: Season;
    //     //     c: Course[];
    //     // }
    //     const coursesBySemester: Record<number, Semester> = {};
    //     // Using reduce, we can push the elements into the right structure
    //     body.reduce(
    //         (
    //             result: Record<number, Semester>,
    //             row: string
    //         ): Record<number, Semester> => {
    //             const [semester, course] = row.split(",");
    //             // If we haven't seen the semester yet, we need a new array
    //             //course gives me id num need to look up in course catlogue to get full class
    //             //save them to variable and push varible to
    //             const COURSECATALOG = Object.values(catalog_json);
    //             const fullCourse = COURSECATALOG.filter((data: Course) => course === data.code);
    //             const courses = result[coursetonumber(semester)] || [];
    //             // Add the course to the array
    //             courses.courses = fullCourse;
    //             // Keep building up the result hi
    //             return result;
    //         },
    //         coursesBySemester
    //     );

    //     // Change the "Record mapping strings to course arrays" into an
    //     //   "Array of Semesters, where each Semester has a courses array"
    //     return Object.entries(coursesBySemester).map(
    //         ([stringtonumber(semester), Semester]: [number, Semester]) => ({
    //             year: year,
    //             season: sznAndCourses.s,
    //             courses: sznAndCourses.c
    //         })
    //     );
    // }

    // function uploadFile(event: React.ChangeEvent<HTMLInputElement>) {
    //     // Might have removed the file, need to check that the files exist
    //     if (event.target.files && event.target.files.length) {
    //         // Get the first filename
    //         const filename = event.target.files[0];
    //         // Create a reader
    //         const reader = new FileReader();
    //         // Create lambda callback to handle when we read the file
    //         reader.onload = (loadEvent) => {
    //             // Target might be null, so provide default error value
    //             const newContent =
    //                 loadEvent.target?.result || "Data was not loaded";
    //             // FileReader provides string or ArrayBuffer, force it to be string
    //             setContent(newContent as string);
    //             console.log(newContent);
    //             console.log("new text");
    //             const newText = newContent as string;
    //             console.log(newText);
    //             //console.log(newContent.size);
    //             const newArray = newText.split("\n");
    //             const newData = newArray.map((data: string) => data.split(","));
    //             console.log(newData);
    //         };
    //         // Actually read the file
    //         reader.readAsText(filename);
    //     }
    // }
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
                    onClick= {loadCsvData}
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

// //make string array into courses
// const newCourse: Course;
// newCourse = newData.map(
//     (data: Course) => (newCourse.code = data[1]),
//     (newCourse.name = data[0]),
//     (newCourse.credits = data[2])
// );

// let newSemesterUser: Semester;
// let newPlanUser: Plan;

// newSemesterUser = newData.map((data: Semester) =>
//     newSemesterUser.push(data)
// );
// setSemester(newSemesterUser);

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
