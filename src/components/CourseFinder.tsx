import { Clear, MouseOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Course, getCourseString } from "../interfaces/course";
import { DraggableCourse } from "./DraggableCourse";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder({
    courseData,
    pool,
    setPool
}: {
    courseData: Course[];
    pool: Course[];
    setPool: (newPool: Course[]) => void;
}): JSX.Element {
    const [query, setQuery] = useState<string>("");
    /** CSS Styles to be used in CourseFinder */
    const CourseFinderStyles = {
        /** CSS Style for the individual course div's */
        course_individual: {
            height: 50,
            backgroundColor: "#ebebeb",
            alignContent: "center",
            outlineStyle: "solid",
            outlineWidth: "thin"
        } as React.CSSProperties,
        /** CSS Style for the scrollable course list */
        course_scroll_list: {
            height: 150,
            overflow: "scroll",
            alignContent: "center",
            backgroundColor: "navy",
            paddingBottom: "1px",
            paddingTop: "1px",
            outlineStyle: "solid",
            outlineWidth: "medium"
        } as React.CSSProperties,
        /** CSS Style for top level CourseFinder container */
        course_container: {
            borderRadius: "25px",
            alignContent: "center",
            backgroundColor: "lightcyan",
            padding: "10px",
            border: "1px black",
            borderStyle: "solid",
            overflow: "auto",
            maxHeight: "650px"
        } as React.CSSProperties,
        /** CSS Style for course pool container */
        course_pool_container: {
            backgroundColor: "lightcyan",
            alignContent: "center",
            padding: "10px",
            overflow: "hidden"
        } as React.CSSProperties
    };

    /** Imports an array of Course objects, type casts creditTypes and semestersOffered */
    const COURSES = courseData.map(
        (course: Course): Course => ({
            ...course
        })
    );

    /** A filter to find if a course contains the given query and is not already in the course pool */
    const containsQuery = (course: Course): boolean =>
        getCourseString(course).toLowerCase().includes(query.toLowerCase()) &&
        !pool.includes(course);

    /** Function to update the query useState */
    function updateQuery(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    /** Returns final CourseFinder component */
    /** In order from top to bottom: Course search bar, Course Pool, Clear Courses Button */
    return (
        <div style={CourseFinderStyles.course_container}>
            <h3 style={{ textAlign: "center" }}>Course Lookup</h3>
            <h6
                style={{
                    fontStyle: "italic",
                    textAlign: "center",
                    fontSize: "small"
                }}
            >
                Search for a course by course code below.
            </h6>
            <Form.Group controlId="formCourseSearch">
                <Form.Control
                    placeholder="Enter course name or code"
                    value={query}
                    onChange={updateQuery}
                    size="sm"
                    data-testid="formCourseSearch"
                    style={{ textAlign: "center" }}
                />
            </Form.Group>
            <p></p>
            <h6
                style={{
                    fontStyle: "italic",
                    textAlign: "center",
                    fontSize: "small"
                }}
            >
                Click a course from the list below to add it to your Course
                Pool.
            </h6>
            <p></p>
            <div style={CourseFinderStyles.course_scroll_list}>
                {COURSES.filter(containsQuery).map(
                    (course: Course) =>
                        !pool.some(function (el) {
                            return el.code === course.code;
                        }) && (
                            <div
                                key={course.code}
                                style={CourseFinderStyles.course_individual}
                                onClick={() => setPool([...pool, course])}
                                data-testid="searchCourse"
                            >
                                <MouseOutlined />
                                {getCourseString(course)}
                            </div>
                        )
                )}
            </div>
            <div>
                <p></p>
                <h4 style={{ textAlign: "center" }}>Course Pool</h4>
                {pool.length === 0 && (
                    <h6
                        style={{
                            fontStyle: "italic",
                            textAlign: "center",
                            fontSize: "small"
                        }}
                    >
                        Your Course Pool is empty. Click a course from the list
                        above to add it.
                    </h6>
                )}
                {pool.map((course: Course) => (
                    <div
                        key={course.code}
                        style={CourseFinderStyles.course_pool_container}
                    >
                        <DraggableCourse course={course}></DraggableCourse>
                    </div>
                ))}
                {pool.length >= 1 && <p>Drag courses into your plan!</p>}
                <div style={{ textAlign: "center" }}>
                    <Button
                        type="button"
                        startIcon={<Clear />}
                        color="error"
                        variant="contained"
                        data-testid="clearPoolButton"
                        onClick={() => setPool([])}
                    >
                        Clear course pool
                    </Button>
                </div>
            </div>
        </div>
    );
}
