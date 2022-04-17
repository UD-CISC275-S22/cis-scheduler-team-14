import { useState } from "react";
import "../interfaces/course";
import { Course } from "../interfaces/course";

export function clearAllCourse() {
    const [course, setCourse] = useState<Course[]>([]);
    setCourse([]);
    course;
}
