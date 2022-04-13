import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./PlanView";
import { AddPlanModal } from "./AddPlanModal";

export function PlanList({
    plans,
    setPlans,
    deletePlan
}: {
    plans: Plan[];
    setPlans: (plans: Plan[]) => void;
    deletePlan: (id: number) => void;
}): JSX.Element {
    const [showAddPlanModal, setShowAddPlanModal] = useState<boolean>(false);
    const handleCloseAddPlanModal = () => setShowAddPlanModal(false);
    const handleShowAddPlanModal = () => setShowAddPlanModal(true);

    return (
        <div>
            <Stack gap={3}>
                {plans.map((plan: Plan) => (
                    <div key={plan.id} className="bg-light border m-2 p-2">
                        <PlanView
                            plan={plan}
                            deletePlan={deletePlan}
                            plans={plans}
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
