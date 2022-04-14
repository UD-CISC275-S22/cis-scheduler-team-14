export type AIRequirement = [
    "CISC 304",
    "CISC 442",
    "CISC 481",
    "CISC 483",
    "CISC 484"
];
export type BioinformaticsRequirement = [
    "BISC 207",
    "BISC 208",
    "BISC 401",
    "CHEM 103",
    "CHEM 133",
    "CHEM 104",
    "CHEM 134",
    "CISC 372",
    "CISC 436",
    "MATH 242",
    "MATH 349"
];
export type CybersecurityRequirement = [
    "CISC 361",
    "CISC 372",
    "CISC 450",
    "CISC 464",
    "CPEG 465",
    "CPEG 494"
];
export type DataScienceRequirement = [
    "CISC 304",
    "CISC 372",
    "CISC 437",
    "CISC 481",
    "MATH 205",
    "MATH 242",
    "MATH 243",
    "MATH 349"
];
export type HighPerformanceComputingRequirement = [
    "CISC 360",
    "CISC 361",
    "CISC 372",
    "CISC 450",
    "CISC 471",
    "MATH 242",
    "MATH 243"
];
export type SystemsandNetworksRequirement = [
    "CISC 360",
    "CISC 361",
    "CISC 372",
    "CISC 450",
    "CISC 471"
];
export type TheoryandComputationRequirement = [
    "CISC 304",
    "CISC 401",
    "MATH 242",
    "MATH 349"
];
export interface Concentration {
    /** The concentrations offered **/
    AI: AIRequirement;
    Bioinformatics: BioinformaticsRequirement;
    Cybersecurity: CybersecurityRequirement;
    DataScience: DataScienceRequirement;
    HighPerformanceComputing: HighPerformanceComputingRequirement;
    SystemsandNetworks: SystemsandNetworksRequirement;
    TheoryandComputation: TheoryandComputationRequirement;
}
