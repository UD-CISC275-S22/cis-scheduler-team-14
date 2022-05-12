import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { PlanView } from "./PlanView";
import { Col, Row } from "react-bootstrap";
import { CourseFinder } from "./CourseFinder";
import catalog_json from "../data/catalog.json";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            data-testid="tab-panel"
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export function PlanTabs({
    plans,
    deletePlan,
    pool,
    setPool,
    setPlans
}: {
    plans: Plan[];
    deletePlan: (id: number) => void;
    pool: Course[];
    setPool: (newPool: Course[]) => void;
    setPlans: (plans: Plan[]) => void;
}): JSX.Element {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const COURSECATALOG = Object.values(catalog_json);
    const CATALOG = COURSECATALOG.map((course): Course => ({ ...course }));
    const [courseCatalog] = useState<Course[]>(CATALOG);
    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="tabs"
                    >
                        {plans.map((plan: Plan, index: number) => (
                            <Tab
                                label={"Plan " + plan.id}
                                {...a11yProps(index)}
                                key={plan.id}
                                sx={{ fontSize: "1rem" }}
                                data-testid="tab"
                            />
                        ))}
                    </Tabs>
                </Box>
                {plans.map((plan: Plan, index: number) => (
                    <TabPanel key={plan.id} value={value} index={index}>
                        <Row>
                            <Col xs={12} md={8}>
                                <PlanView
                                    plan={plan}
                                    plans={plans}
                                    deletePlan={deletePlan}
                                    pool={pool}
                                    setPool={setPool}
                                    setPlans={setPlans}
                                ></PlanView>
                            </Col>
                            <Col xs={6} md={4}>
                                <div
                                    style={{ position: "sticky", top: "18px" }}
                                >
                                    <CourseFinder
                                        courseData={courseCatalog}
                                        pool={pool}
                                        setPool={setPool}
                                    ></CourseFinder>
                                </div>
                            </Col>
                        </Row>
                    </TabPanel>
                ))}
            </Box>
        </div>
    );
}
