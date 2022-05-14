import { useDrag } from "react-dnd";
import { Course, getCourseString } from "../interfaces/course";
import React, { useState } from "react";
import { Popover, Typography } from "@mui/material";
import { DragIndicator } from "@mui/icons-material";

const DraggableCourseStyle = {
    /** CSS Style for a course in the Course Pool */
    course_pool_individual: {
        height: "75px",
        lineHeight: "75px",
        borderRadius: "25px",
        backgroundColor: "whitesmoke",
        textAlign: "center",
        outlineStyle: "solid",
        outlineWidth: "thin"
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

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    /** Handler functions and implementation for popovers from https://mui.com/material-ui/react-popover/ */
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const popoverMessage = "Drag into a semester\nto add to your plan";

    //Drag and dropable class component for use in CourseFinder.tsx coursepool
    return (
        <div
            className="draggable-course"
            ref={dragRef}
            style={DraggableCourseStyle.course_pool_individual}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
            <h5 style={{ margin: 0, position: "relative", top: "35%" }}>
                <DragIndicator />
                {getCourseString(course)}
            </h5>
            {isDragging}
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: "none"
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                onClose={handlePopoverClose}
            >
                <Typography sx={{ p: 1 }}>{popoverMessage}</Typography>
            </Popover>
        </div>
    );
}
