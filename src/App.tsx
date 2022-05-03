import "./App.css";
import React, { useState } from "react";
import headerimg from "./media/background.jpg";
import premadePlans from "./data/plans.json";
import { Course } from "./interfaces/course";
import { Plan } from "./interfaces/plan";
import { Semester, Season } from "./interfaces/semester";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PlanTabs } from "./components/PlanTabs";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AddPlanModal } from "./components/AddPlanModal";
import { Welcomemessage } from "./components/WelcomeModal";

function App(): JSX.Element {
    /**Plan States*/
    const PLANS = premadePlans.map(
        (plan): Plan => ({
            ...plan,
            semesters: plan.semesters.map(
                (semester): Semester => ({
                    ...semester,
                    season: semester.season as Season,
                    courses: semester.courses.map(
                        (course): Course => ({ ...course })
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

    const [showAddPlanModal, setShowAddPlanModal] = useState<boolean>(false);
    const handleCloseAddPlanModal = () => setShowAddPlanModal(false);
    const handleShowAddPlanModal = () => setShowAddPlanModal(true);
    return (
        <DndProvider backend={HTML5Backend}>
            <img src={headerimg} width="100%" data-testid="header-image" />
            <div style={{ textAlign: "center", margin: "auto" }}>
                <p></p>
                <div>
                    <Welcomemessage></Welcomemessage>
                </div>
            </div>
            <div style={{ textAlign: "center", margin: "auto" }}>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    color="success"
                    className="m-4"
                    onClick={handleShowAddPlanModal}
                    data-testid="addPlanButton"
                    style={{ width: "50%" }}
                >
                    Add Plan
                </Button>
                <AddPlanModal
                    show={showAddPlanModal}
                    handleClose={handleCloseAddPlanModal}
                    plans={plans}
                    setPlans={setPlans}
                ></AddPlanModal>
            </div>
            <PlanTabs
                plans={plans}
                deletePlan={deletePlan}
                pool={pool}
                setPool={setPool}
                setPlans={setPlans}
            ></PlanTabs>
        </DndProvider>
    );
}

export default App;
