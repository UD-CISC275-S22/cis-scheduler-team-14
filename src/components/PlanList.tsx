import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./PlanView";
import { AddPlanModal } from "./AddPlanModal";
import { Course } from "../interfaces/course";

export function PlanList({
    plans,
    setPlans,
    deletePlan,
    pool,
    setPool
}: {
    plans: Plan[];
    setPlans: (plans: Plan[]) => void;
    deletePlan: (id: number) => void;
    pool: Course[];
    setPool: (newPool: Course[]) => void;
}): JSX.Element {
    const [showAddPlanModal, setShowAddPlanModal] = useState<boolean>(false);
    const handleCloseAddPlanModal = () => setShowAddPlanModal(false);
    const handleShowAddPlanModal = () => setShowAddPlanModal(true);

    return (
        <div>
            <Stack gap={3}>
                {plans.map((plan: Plan) => (
                    <div key={plan.id}>
                        <PlanView
                            plan={plan}
                            deletePlan={deletePlan}
                            plans={plans}
                            pool={pool}
                            setPool={setPool}
                        ></PlanView>
                    </div>
                ))}
            </Stack>
            <Button
                variant="contained"
                startIcon={<Add />}
                color="success"
                className="m-4"
                onClick={handleShowAddPlanModal}
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
    );
}
