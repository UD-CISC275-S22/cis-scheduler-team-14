import { useState } from "react";
import "./interfaces/course";
import { Course } from "./interfaces/course";
const [course, setCourse] = useState<Course[]>([]);

export function clearAllCourse() {
    setCourse([]);
    course;
}
