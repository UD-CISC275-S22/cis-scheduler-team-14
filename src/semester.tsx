import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./interfaces/semester";
import { Semester } from "./interfaces/semester";
const [semester, setSemester] = useState<Semester[]>([]);

export function clearAllSemester() {
    setSemester([]);
}
