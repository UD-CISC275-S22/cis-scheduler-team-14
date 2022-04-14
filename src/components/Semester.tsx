import { useState } from "react";
import "../interfaces/semester";
import { Semester } from "../interfaces/semester";

export function clearAllSemester() {
    const [semester, setSemester] = useState<Semester[]>([]);
    setSemester([]);
    semester;
}
