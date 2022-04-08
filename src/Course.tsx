import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./interfaces/course";
import { Course } from "./interfaces/course";
const [course, setCourse] = useState<Course[]>([]);

export function clearAllCourse() {
    setCourse([]);
}
