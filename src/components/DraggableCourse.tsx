import React from "react";
import { useDrag } from "react-dnd";
import { Course } from "../interfaces/course";

interface draggableCourseProps {
    course: Course;
}

export function DraggableCourse({ course }: draggableCourseProps): JSX.Element {
    const [{ isDragging }, dragRef] = useDrag(
        {
            type: "course",
            item: { course },
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        },
        [course]
    );
}
