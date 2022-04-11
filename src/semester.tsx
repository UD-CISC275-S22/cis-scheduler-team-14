import { useState } from "react";
import "./interfaces/semester";
import { Semester } from "./interfaces/semester";
const [semester, setSemester] = useState<Semester[]>([]);

export function clearAllSemester() {
    setSemester([]);
    semester;
}
