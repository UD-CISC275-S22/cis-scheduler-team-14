import "./App.css";
import React, { useState } from "react";
import headerimg from "./media/background.jpg";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import premadePlans from "./data/plans.json";
import { Course } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, Season } from "./interfaces/semester";
import { PlanList } from "./components/PlanList";
import TestCourses from "./data/testcourses.json";
import { CourseFinder } from "./components/CourseFinder";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    /** Test Course states */
    const TESTCOURSES = TestCourses.map(
        (course): Course => ({
            ...course
        })
    );
    const [testCourses] = useState<Course[]>(TESTCOURSES);
    /**Plan States*/
    const PLANS = premadePlans.map(
        (plan): Plan => ({
            ...plan,
            semesters: plan.semesters.map(
                (semester): Semester => ({
                    ...semester,
                    season: semester.season as Season,
                    courses: semester.courses.map(
                        (course): Course => ({
                            ...course
                        })
                    )
                })
            )
        })
    );
    const [plans, setPlans] = useState<Plan[]>(PLANS);
    const [pool, setPool] = useState<Course[]>([]);

    function deletePlan(id: number): void {
        setPlans(plans.filter((plan) => plan.id !== id));
    }
    console.log(PLANS[0]);
    /**Course States*/
    function clearAllCourse() {
        const [course, setCourse] = useState<Course[]>([]);
        setCourse([]);
        course;
    }

    function clearAllSemester() {
        const origplan = plans[0];
        origplan.semesters = [];
        setPlans([origplan]);
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <DndProvider backend={HTML5Backend}>
            <img src={headerimg} width="100%" />
            <Container>
                <div className="App">
                    <p>Will Gunter, John Bean, Sonika Sharma</p>
                    <div>
                        <Button
                            type="button"
                            className="btn btn-success"
                            onClick={handleOpen}
                        >
                            click here to learn how to get started
                        </Button>
                        <Modal
                            show={open}
                            onHide={handleClose}
                            animation={false}
                            fade={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Welcome to the UDCIS Course Planner!
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                This website helps you plan out what courses you
                                must take to graduate with a computer science
                                degree. We have have plans wheer you can add
                                semesters and course to orgainze what classes
                                you need to take every semester. Hope this
                                website will ease your stress about planing your
                                classes :)
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <Button
                        type="button"
                        className="btn btn-danger"
                        onClick={clearAllCourse}
                    >
                        Clear All Courses
                    </Button>
                    <Button
                        type="button"
                        className="btn btn-danger"
                        onClick={clearAllSemester}
                    >
                        Clear All Semesters
                    </Button>

                    <Row>
                        <Col xs={12} md={8}>
                            <div>
                                <PlanList
                                    plans={plans}
                                    setPlans={setPlans}
                                    deletePlan={deletePlan}
                                    pool={pool}
                                    setPool={setPool}
                                ></PlanList>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div>
                                <CourseFinder
                                    courseData={testCourses}
                                    pool={pool}
                                    setPool={setPool}
                                ></CourseFinder>
                            </div>
                        </Col>
                    </Row>
                    <Row></Row>
                </div>
            </Container>
        </DndProvider>
    );
}

export default App;
