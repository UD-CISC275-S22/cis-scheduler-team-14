import { useDrag } from "react-dnd";
import { Course, getCourseString } from "../interfaces/course";
import React from "react";

const DraggableCourseStyle = {
    /** CSS Style for a course in the Course Pool */
    course_pool_individual: {
        width: 300,
        height: 50,
        backgroundColor: "white",
        alignContent: "center",
        outlineStyle: "solid",
        outlineWidth: "thin",
        fontFamily: "monospace"
    } as React.CSSProperties
};

export function DraggableCourse({ course }: { course: Course }): JSX.Element {
    //Dragging functionaility from react-dnd https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37
    const [{ isDragging }, dragRef] = useDrag(
        {
            type: "course",
            item: course,
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        },
        [course]
    );

    //Drag and dropable class component for use in CourseFinder.tsx coursepool
    return (
        <div
            className="draggable-course"
            ref={dragRef}
            style={DraggableCourseStyle.course_pool_individual}
        >
            {getCourseString(course)}
            {isDragging}
        </div>
    );
}
