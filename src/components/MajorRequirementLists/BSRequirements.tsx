import { List } from "@mui/material";
import React from "react";
import { groupA, groupB, groupC } from "../../data/universityreqs";

export function BSRequirements({
    allCourses
}: {
    allCourses: string[];
}): JSX.Element {
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
    return (
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
                            color: breadthCourses.length > 7 ? "green" : "red"
                        }}
                    >
                        21 Extra Breadth Credits
                    </p>
                    <p
                        style={{
                            color: breadthCourses300 > 2 ? "green" : "red"
                        }}
                    >
                        6 Credits (from 21 Extra) at 300+ level
                    </p>
                </li>
            </List>
        </div>
    );
}
