"use strict";
console.log("Hello OpenXcell!");
console.log('     ');

function rounder(x) {
    return Number.parseFloat(x).toFixed(2);
};

function rounder1(x) {
    return Number.parseFloat(x).toFixed(1);
};

// INNITIALIZED variables used in calculations
let percentMaleWorkers = 0;
let percentFemaleWorkers = 0;

let percentMalesFatigued_RH = 0;
let percentMalesFatigued_LH = 0;
let percentFemalesFatigued_RH = 0;
let percentFemalesFatigued_LH = 0;

let percentWorkersFatigued = 0;

let cycleTime = 0;

// TESTING MODIFIER used for testing purposes (i.e., increase force magnitude by 50%, 100%, etc.)
let testModifier = 0;

// USER INPUTS
percentFemaleWorkers = 70;
percentMaleWorkers = 30;
cycleTime = 83;

testModifier = 1.0;

// ARRAY of Z-Statistic values for p = 1-100.
const pValue = [
    -2.33, -2.05, -1.88, -1.75, -1.64, -1.55, -1.48, -1.41, -1.34, -1.28, -1.23, -1.18, -1.13, -1.08, -1.04, -0.99, -0.95, -0.92, -0.88, -0.84, -0.81, -0.77, -0.74, -0.71, -0.67, -0.64, -0.61, -0.58, -0.55, -0.52, -0.50, -0.47, -0.44, -0.41, -0.39, -0.36, -0.33, -0.31, -0.28, -0.25, -0.23, -0.20, -0.18, -0.15, -0.13, -0.10, -0.08, -0.05, -0.03, 0, 0.03, 0.05, 0.08, 0.10, 0.13, 0.15, 0.18, 0.20, 0.23, 0.25, 0.28, 0.31, 0.33, 0.36, 0.39, 0.41, 0.44, 0.47, 0.50, 0.52, 0.55, 0.58, 0.61, 0.64, 0.67, 0.71, 0.74, 0.77, 0.81, 0.84, 0.88, 0.92, 0.95, 0.99, 1.04, 1.08, 1.13, 1.18, 1.23, 1.28, 1.34, 1.41, 1.48, 1.55, 1.64, 1.75, 1.88, 2.05, 2.33, 3.09
];

// ARRAY of Force Type Population Strength Values
const forceTypeData = [
    {
        ForceName: "1 - Power Grip",
        StrengthValues: {
            MaleMean: 101.7,
            MaleStdDev: 23.1,
            FemaleMean: 64.9,
            FemaleStdDev: 13.8
        },
    },
    {
        ForceName: "2 - Pinch (Lateral/Key)",
        StrengthValues: {
            MaleMean: 21.8,
            MaleStdDev: 6.2,
            FemaleMean: 14.4,
            FemaleStdDev: 3.9
        },
    },
    {
        ForceName: "3 - Pinch (Thumb vs Index)",
        StrengthValues: {
            MaleMean: 14.1,
            MaleStdDev: 4.3,
            FemaleMean: 10.2,
            FemaleStdDev: 3.1
        },
    },
    {
        ForceName: "4 - Pinch (Thumb vs First Two)",
        StrengthValues: {
            MaleMean: 21.4,
            MaleStdDev: 6.4,
            FemaleMean: 14.4,
            FemaleStdDev: 4.5
        },
    },
    {
        ForceName: "5 - Thumb Press",
        StrengthValues: {
            MaleMean: 18.3,
            MaleStdDev: 6.0,
            FemaleMean: 14.4,
            FemaleStdDev: 7.3
        },
    },
    {
        ForceName: "6 - Finger Press (Index)",
        StrengthValues: {
            MaleMean: 11.8,
            MaleStdDev: 4.0,
            FemaleMean: 8.8,
            FemaleStdDev: 3.3
        },
    },
    {
        ForceName: "7 - Finger Press (Middle)",
        StrengthValues: {
            MaleMean: 14.1,
            MaleStdDev: 4.4,
            FemaleMean: 9.4,
            FemaleStdDev: 2.9
        },
    },
    {
        ForceName: "8 - Finger Press (Multiple)",
        StrengthValues: {
            MaleMean: 44.4,
            MaleStdDev: 9.6,
            FemaleMean: 32.5,
            FemaleStdDev: 6.4
        },
    },
    {
        ForceName: "9 - Poke (Thumb)",
        StrengthValues: {
            MaleMean: 10.5,
            MaleStdDev: 6.6,
            FemaleMean: 7.3,
            FemaleStdDev: 3.5
        },
    },
    {
        ForceName: "10 - Poke (Index)",
        StrengthValues: {
            MaleMean: 10.1,
            MaleStdDev: 6.7,
            FemaleMean: 5.7,
            FemaleStdDev: 2.2
        },
    },
    {
        ForceName: "11 - Poke (Middle)",
        StrengthValues: {
            MaleMean: 9.3,
            MaleStdDev: 4.9,
            FemaleMean: 4.8,
            FemaleStdDev: 1.5
        },
    },
    {
        ForceName: "12 - Finger Pull (Index)",
        StrengthValues: {
            MaleMean: 37.0,
            MaleStdDev: 9.5,
            FemaleMean: 24.7,
            FemaleStdDev: 6.3
        },
    },
    {
        ForceName: "13 - Finger Pull (First 2)",
        StrengthValues: {
            MaleMean: 66.3,
            MaleStdDev: 19.1,
            FemaleMean: 44.2,
            FemaleStdDev: 12.7
        },
    },
    {
        ForceName: "14 - Finger Pull (First 3)",
        StrengthValues: {
            MaleMean: 84.5,
            MaleStdDev: 20.9,
            FemaleMean: 56.3,
            FemaleStdDev: 13.9
        },
    },
    {
        ForceName: "15 - Finger Pull (Four)",
        StrengthValues: {
            MaleMean: 90.6,
            MaleStdDev: 26.1,
            FemaleMean: 60.4,
            FemaleStdDev: 17.4
        },
    },
];



// ******** TESTING FUNCTIONS & DATASETS *****************
// Add back and make transformer-compatible ????
// See Calculations 11-5-24 to get this code



// EDGE CASE 4 - NOT ENOUGH TIME IN CYCLE TO PERFORM TASKS
// As the user inputs tasks, total time to apply forces (i.e., sum of Count x Duration for all tasks) can't exceed Cycle Time)
function screenNotEnoughTimeInCycle(taskInputs, hand_s) {

    let timeToPerformTask = 0;
    let totalTime = 0;

    console.log(" ");
    console.log(" ");
    console.log(`${hand_s} Hand Values`);

    for (let w = 0; w < taskInputs.length; w++) {

        let forceName_Screen = taskInputs[w].TaskName;
        console.log(" ");
        console.log(forceName_Screen);
        timeToPerformTask = taskInputs[w].ForceCount * taskInputs[w].ForceDuration;
        console.log(`Task Duration = ${timeToPerformTask}`);
        totalTime = totalTime + timeToPerformTask;
        console.log(`totalTime = ${totalTime}`);

        if (totalTime > cycleTime) {
            console.log(`The Cycle Time is too short to complete all Tasks entered for the ${hand_s} hand. Try reducing this Task's Count and/or Duration, or increase the Cycle Time to ${totalTime} sec or greater.`)
        }
        // else {
        //     console.log(`Still enough time to perform remaining tasks for ${hand_s} hand!`)
        // }
    }
}
// RUN FUNCTION by un-commenting two lines below:
// screenNotEnoughTimeInCycle(tasks_LH, "Left");
// screenNotEnoughTimeInCycle(tasks_RH, "Right");



const input = [
    {
        Task: 1,
        TaskName: "Seat Connector",
        Hand: "Right",
        ForceType: "2 - Pinch (Lateral/Key)",
        TaskModifiers: {
            WristPosture: "Extension",
            GripSpan: "2.75",
        },
        ForceCount: 2,
        ForceMagnitude: 3.0,
        ForceDuration: 1.0
    },
    {
        Task: 2,
        TaskName: "Insert Wire Transfer Mod into A-Box",
        Hand: "Right",
        ForceType: "7 - Finger Press (Middle)",
        TaskModifiers: {
            None: 1.0,
        },
        ForceCount: 1,
        ForceMagnitude: 3.1,
        ForceDuration: 0.5
    },
    {
        Task: 3,
        TaskName: "Mount Crown Holder",
        Hand: "Right",
        ForceType: "4 - Pinch (Thumb vs First Two)",
        TaskModifiers: {
            WristPosture: "Ulnar",
            GripSpan: "3.5",
            Glove: "Nitrile or Vinyl Exam"
        },
        ForceCount: 3,
        ForceMagnitude: 2.0,
        ForceDuration: 1.25
    },
    {
        Task: 4,
        TaskName: "Pull Housing Module Connectors",
        Hand: "Both",
        ForceType: "12 - Finger Pull (Index)",
        TaskModifiers: {
            None: 1.0,
        },
        ForceCount: 1,
        ForceMagnitude: 6.0,
        ForceDuration: 2.0
    },
    {
        Task: 5,
        TaskName: "Bend Module Door",
        Hand: "Left",
        ForceType: "15 - Finger Pull (Four)",
        TaskModifiers: {
            None: 1.0,
        },
        ForceCount: 1,
        ForceMagnitude: 15.4,
        ForceDuration: 2.0
    },
    {
        Task: 6,
        TaskName: "Insert J-Plug Connector",
        Hand: "Both",
        ForceType: "8 - Finger Press (Multiple)",
        TaskModifiers: {
            None: 1.0,
        },
        ForceCount: 1,
        ForceMagnitude: 7.5,
        ForceDuration: 1.2
    },
    {
        Task: 7,
        TaskName: "Adjust Off-side Connector",
        Hand: "Left",
        ForceType: "2 - Pinch (Lateral/Key)",
        TaskModifiers: {
            WristPosture: "Ulnar",
            GripSpan: "1.75",
        },
        ForceCount: 1,
        ForceMagnitude: 3.6,
        ForceDuration: 1.25
    },
    {
        Task: 8,
        TaskName: "Open Ramp Module Door",
        Hand: "Left",
        ForceType: "13 - Finger Pull (First 2)",
        TaskModifiers: {
            None: 1.0,
        },
        ForceCount: 1,
        ForceMagnitude: 5.0,
        ForceDuration: 1.5
    },
    {
        Task: 9,
        TaskName: "Hitch Seat Support Crossbar",
        Hand: "Left",
        ForceType: "8 - Finger Press (Multiple)",
        TaskModifiers: {
            None: 1.0,
        },
        ForceCount: 2,
        ForceMagnitude: 6.0,
        ForceDuration: 1.5
    },
    {
        Task: 10,
        TaskName: "Press Controller Switch",
        Hand: "Right",
        ForceType: "6 - Finger Press (Index)",
        TaskModifiers: {
            None: 1.0,
        },
        ForceCount: 1,
        ForceMagnitude: 2.0,
        ForceDuration: 0.55
    },
];


// TRANSFORMER FUNCTION

function transform(input) {
    let output = [];
    let wristPostureTemp;
    let gripSpanTemp;
    let elbowPostureTemp;
    let gloveTemp;

    for (let i = 0; i < input.length; i++) {

        wristPostureTemp = 1;
        gripSpanTemp = 1;
        elbowPostureTemp = 1;
        gloveTemp = 1;

        if (input[i].ForceType === "1 - Power Grip") {
            //wrist posture / grip span / elbow posture / glove
            switch (input[i].TaskModifiers.WristPosture) {
                case "Neutral":
                    wristPostureTemp = 1;
                    break;
                case "Mild Flexion":
                    wristPostureTemp = 0.7;
                    break;
                case "Severe Flexion":
                    wristPostureTemp = 0.45;
                    break;
                case "Extension":
                    wristPostureTemp = 0.75;
                    break;
                case "Ulnar":
                    wristPostureTemp = 0.75;
                    break;
                case "Radial":
                    wristPostureTemp = 0.8;
                    break;
                default:
                    wristPostureTemp = 1;
                    break;
            }
            switch (input[i].TaskModifiers.GripSpan) {
                case "< 1":
                    gripSpanTemp = 0.4;
                    break;
                case "1.5":
                    gripSpanTemp = 1;
                    break;
                case "2":
                    gripSpanTemp = 0.95;
                    break;
                case "2.5":
                    gripSpanTemp = 0.7;
                    break;
                case "4":
                    gripSpanTemp = 0.45;
                    break;
                default:
                    gripSpanTemp = 1;
                    break;
            }
            switch (input[i].TaskModifiers.ElbowPosture) {
                case "Elbow Bend - 90":
                    elbowPostureTemp = 0.95;
                    break;
                case "Elbow Bend - 135":
                    elbowPostureTemp = 1;
                    break;
                case "Elbow Bend - 180":
                    elbowPostureTemp = 0.93;
                    break;
                default:
                    elbowPostureTemp = 1;
                    break;
            }
            switch (input[i].TaskModifiers.Glove) {
                case "Bare Hand (no glove)":
                    gloveTemp = 1;
                    break;
                case "Nitrile or Vinyl Exam":
                    gloveTemp = 0.94;
                    break;
                case "Leather Work":
                    gloveTemp = 0.77;
                    break;
                case "Rubber":
                    gloveTemp = 0.75;
                    break;
                case "Heavy Heat-Resistant":
                    gloveTemp = 0.62;
                    break;
                case "Anti Vibration":
                    gloveTemp = 0.72;
                    break;
                case "Cotton Knitted":
                    gloveTemp = 0.89;
                    break;
                default:
                    gloveTemp = 1;
                    break;
            }

            output[i] = {
                Task : input[i].Task,
                TaskName: input[i].TaskName,
                Hand: input[i].Hand,
                ForceType: input[i].ForceType,
                TaskModifiers: {
                    WristPosture: wristPostureTemp,
                    GripSpan: gripSpanTemp,
                    ElbowPosture: elbowPostureTemp,
                    Glove: gloveTemp
                },
                ForceCount: input[i].ForceCount,
                ForceDuration: input[i].ForceDuration,
                ForceMagnitude: input[i].ForceMagnitude
            }

        } else if (input[i].ForceType === "2 - Pinch (Lateral/Key)") {
            //wrist posture / grip span
            switch (input[i].TaskModifiers.WristPosture) {
                case "Neutral":
                    wristPostureTemp = 1;
                    break;
                case "Flexion":
                    wristPostureTemp = 0.66;
                    break;
                case "Extension":
                    wristPostureTemp = 0.79;
                    break;
                case "Ulnar":
                    wristPostureTemp = 0.81;
                    break;
                case "Radial":
                    wristPostureTemp = 0.87;
                    break;
                default:
                    wristPostureTemp = 1;
                    break;
            }
            switch (input[i].TaskModifiers.GripSpan) {
                case "1":
                    gripSpanTemp = 1; 
                    break;
                case "1.75":
                    gripSpanTemp = 0.95;
                    break;
                case "2.75":
                    gripSpanTemp = 0.71;
                    break;
                case "3.5":
                    gripSpanTemp = 0.56;
                    break;
                default:
                    gripSpanTemp = 1;
                    break
            }

            output[i] = {
                Task : input[i].Task,
                TaskName: input[i].TaskName,
                Hand: input[i].Hand,
                ForceType: input[i].ForceType,
                TaskModifiers: {
                    WristPosture: wristPostureTemp,
                    GripSpan: gripSpanTemp,
                },
                ForceCount: input[i].ForceCount,
                ForceDuration: input[i].ForceDuration,
                ForceMagnitude: input[i].ForceMagnitude
            }




        } else if (input[i].ForceType === "3 - Pinch (Thumb vs Index)") {
            //wrist posture / grip span

            switch (input[i].TaskModifiers.WristPosture) {
                case "Neutral":
                    wristPostureTemp = 1;
                    break;
                case "Flexion":
                    wristPostureTemp = 0.6;
                    break;
                case "Extension":
                    wristPostureTemp = 0.71;
                    break;
                case "Ulnar":
                    wristPostureTemp = 0.71;
                    break;
                case "Radial":
                    wristPostureTemp = 0.71;
                    break;
                default:
                    wristPostureTemp = 1;
                    break;
            }
            switch (input[i].TaskModifiers.GripSpan) {
                case "0.75":
                    gripSpanTemp = 0.99;
                    break;
                case "1.75":
                    gripSpanTemp = 1;
                    break;
                case "2.75":
                    gripSpanTemp = 0.95;
                    break;
                case "3.5":
                    gripSpanTemp = 0.86;
                    break;
                case "4.5":
                    gripSpanTemp = 0.61;
                    break;
                case "5.5":
                    gripSpanTemp = 0.49;
                    break;
                default:
                    gripSpanTemp = 1;
                    break;
            }

            output[i] = {
                Task : input[i].Task,
                TaskName: input[i].TaskName,
                Hand: input[i].Hand,
                ForceType: input[i].ForceType,
                TaskModifiers: {
                    WristPosture: wristPostureTemp,
                    GripSpan: gripSpanTemp,
                },
                ForceCount: input[i].ForceCount,
                ForceDuration: input[i].ForceDuration,
                ForceMagnitude: input[i].ForceMagnitude
            }


        } else if (input[i].ForceType === "4 - Pinch (Thumb vs First Two)") {
            //wrist posture / grip span / glove
            switch (input[i].TaskModifiers.WristPosture) {
                case "Neutral":
                    wristPostureTemp = 1;
                    break;
                case "Flexion":
                    wristPostureTemp = 0.56;
                    break;
                case "Extension":
                    wristPostureTemp = 0.7;
                    break;
                case "Ulnar":
                    wristPostureTemp = 0.72;
                    break;
                case "Radial":
                    wristPostureTemp = 0.77;
                    break;
                default:
                    wristPostureTemp = 1;
                    break;
            }
            switch (input[i].TaskModifiers.GripSpan) {
                case "0.75":
                    break;
                    gripSpanTemp = 0.92;
                    break;
                case "1.75":
                    gripSpanTemp = 1;
                    break;
                case "2.75":
                    gripSpanTemp = 0.81;
                    break;
                case "3.5":
                    gripSpanTemp = 0.75;
                    break;
                case "4.5":
                    gripSpanTemp = 0.57;
                    break;
                case "5.5":
                    gripSpanTemp = 0.5;
                    break;
                default:
                    gripSpanTemp = 1;
                    break;
            }
            switch (input[i].TaskModifiers.Glove) {
                case "Bare Hand (no glove)":
                    gloveTemp = 1;
                    break;
                case "Nitrile or Vinyl Exam":
                    gloveTemp = 0.98;
                    break;
                case "Leather Work":
                    gloveTemp = 0.92;
                    break;
                default:
                    gloveTemp = 1;
                    break;
            }

            output[i] = {
                Task : input[i].Task,
                TaskName: input[i].TaskName,
                Hand: input[i].Hand,
                ForceType: input[i].ForceType,
                TaskModifiers: {
                    WristPosture: wristPostureTemp,
                    GripSpan: gripSpanTemp,
                    Glove: gloveTemp
                },
                ForceCount: input[i].ForceCount,
                ForceDuration: input[i].ForceDuration,
                ForceMagnitude: input[i].ForceMagnitude
            }


        } else {
            output[i] = {
                Task : input[i].Task,
                TaskName: input[i].TaskName,
                Hand: input[i].Hand,
                ForceType: input[i].ForceType,
                TaskModifiers: {
                    None: 1
                },
                ForceCount: input[i].ForceCount,
                ForceDuration: input[i].ForceDuration,
                ForceMagnitude: input[i].ForceMagnitude
            }
        };
            
    }

    return output;
}

const tasks = transform(input);



const tasks_RH = tasks.filter(z => z.Hand === "Right" || z.Hand === "Both");
const tasks_LH = tasks.filter(z => z.Hand === "Left" || z.Hand === "Both");




// SET P-VALUE FLOOR (Prevent a negative population strength value)

function setPValueFloor(tasks_d, gender_d) {

    let floor = 0;

    for (let j = 0; j < tasks_d.length; j++) {

        let forceTypeCalc = tasks_d[j].ForceType;
        // console.log(forceTypeCalc);
        let mean = 0;
        let stdDev = 0;
        let tempFloor = 0;

        if (gender_d === "Male") {
            mean = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.MaleMean;
            stdDev = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.MaleStdDev;
        }
        else {
            mean = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.FemaleMean;
            stdDev = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.FemaleStdDev;
        }
        for (let i = 0; i < pValue.length; i++) {
            let populationStrength = 0;
            populationStrength = mean + (pValue[i] * stdDev);
            // console.log(populationStrength);

            if (populationStrength >= 0) {
                tempFloor = i;
                break;
            }
        }
        if (tempFloor > floor) {
            floor = tempFloor;
        }
    }
    // console.log(`pValue Floor is ${floor}`);
    return floor;
}



// PERCENT FATIGUED FUNCTION
// Calculates the Percent Fatigued Metric using parameter inputs of RH or LH filtered tasks, and gender (male or female)
function percentFatigued(taskInputs, gender) {

    // If dataset is empty (i.e., no tasks for RH or LH) then function returns a value of 0 for Percent Fatigued
    let test = taskInputs.length;
    if (test === 0) {
        let i;
        return i = 0;
    }

    else {

        let iFloor = 0;
        iFloor = setPValueFloor(taskInputs, gender);
        // console.log(iFloor);

        // OUTER LOOP (pValues)
        for (let i = iFloor; i < pValue.length; i++) {

            let totalTaskRecovery = 0;
            let totalTaskDuration = 0;

            // INNER LOOP (Tasks)
            for (let j = 0; j < taskInputs.length; j++) {

                let forceTypeCalc = taskInputs[j].ForceType;
                let mean = 0;
                let stdDev = 0;

                if (gender === "Male") {
                    mean = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.MaleMean;
                    stdDev = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.MaleStdDev;
                }
                else {
                    mean = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.FemaleMean;
                    stdDev = forceTypeData.filter(x => x.ForceName === forceTypeCalc)[0].StrengthValues.FemaleStdDev;
                }

                let populationStrength = 0;
                populationStrength = mean + (pValue[i] * stdDev);

                const initialValue = 1;
                const modifierProduct = Object.values(taskInputs[j].TaskModifiers)
                    .reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);

                let taskDuration = taskInputs[j].ForceDuration * taskInputs[j].ForceCount;
                totalTaskDuration = totalTaskDuration + taskDuration;

                let forceMagnitude = taskInputs[j].ForceMagnitude * testModifier;

                let taskRecovery = (taskDuration) / (1 - (forceMagnitude / (populationStrength * modifierProduct))) ** (1 / 0.24) - (taskDuration);

                totalTaskRecovery = totalTaskRecovery + taskRecovery;
            }

            console.log(`${gender} pValue = ${i}, Solve Value = ${(cycleTime - totalTaskDuration) - totalTaskRecovery}`);

            if (totalTaskRecovery <= (cycleTime - totalTaskDuration) || i === 99) {
                // Returns i + 1, for the pValue at which totalTaskRecovery was <= cycleTime - totalTaskDuration. This is the Percent Fatigued metric used in subsequent Metrics display
                console.log(" ");
                console.log(`${gender} Total Task Recovery = ${totalTaskRecovery}\n${gender} Percent Fatigued = ${i + 1} %`);
                console.log(" ");
                return i + 1;
                break;
            }
        }
    }
}


// PERCENT CONTRIBUTION FUNCTION
// Calculates the Percent Contribution metric by task. If < 100% females are fatigued, use pValue corresponding to Female Percent Fatigued. If 100% of Females are fatigued, use pValue corresponding to the Male Percent Fatigued metric. The two arrays in the RETURN array are used in metrics calculation.
function percentContribution(taskInputs, percent, gender2) {

    let storeTaskNames = [];
    let storeRecoveryTimes = [];
    let storeMetricContribution = [];
    let storeResults = [];

    let totalTaskRecovery_MC = 0;
    let totalTaskDuration_MC = 0;
    let mean_MC = 0;
    let stdDev_MC = 0;

    for (let k = 0; k < taskInputs.length; k++) {

        let forceType_MC = taskInputs[k].ForceType;

        if (gender2 === "Male") {
            mean_MC = forceTypeData.filter(x => x.ForceName === forceType_MC)[0].StrengthValues.MaleMean;
            stdDev_MC = forceTypeData.filter(x => x.ForceName === forceType_MC)[0].StrengthValues.MaleStdDev;
        } else {
            mean_MC = forceTypeData.filter(x => x.ForceName === forceType_MC)[0].StrengthValues.FemaleMean;
            stdDev_MC = forceTypeData.filter(x => x.ForceName === forceType_MC)[0].StrengthValues.FemaleStdDev;
        }

        let populationStrength_MC = 0;
        // Note, "percent - 1" index used below. If used "percent", calculation would be 1 index off due to first slot in array being 0
        populationStrength_MC = mean_MC + (pValue[percent - 1] * stdDev_MC);

        const initialValue_MC = 1;
        const modifierProduct_MC = Object.values(taskInputs[k].TaskModifiers)
            .reduce((accumulator, currentValue) => accumulator * currentValue, initialValue_MC);

        let taskDuration_MC = taskInputs[k].ForceDuration * taskInputs[k].ForceCount;
        let forceMagnitude_MC = taskInputs[k].ForceMagnitude * testModifier;

        let taskRecovery_MC = (taskDuration_MC) / (1 - (forceMagnitude_MC / (populationStrength_MC * modifierProduct_MC))) ** (1 / 0.24) - (taskDuration_MC);

        // CONSOLE TO SEE ---- DELETE
        // console.log(`For ${percent} PopStrength, ${taskInputs[k].TaskName}: ${taskRecovery_MC}`);

        totalTaskRecovery_MC = totalTaskRecovery_MC + taskRecovery_MC

        totalTaskDuration_MC = totalTaskDuration_MC + taskDuration_MC

        // PUSH Task Name and Task Recovery Time into array
        storeTaskNames.push(taskInputs[k].TaskName);
        storeRecoveryTimes.push(taskRecovery_MC);
    }

    for (let m = 0; m < taskInputs.length; m++) {
        storeMetricContribution.push(rounder(storeRecoveryTimes[m] / totalTaskRecovery_MC));
    }

    // CONSOLE RESULTS
    console.log(" ");
    console.log(`Cycle Time: ${cycleTime}`);
    console.log(`Available Recovery: ${cycleTime - totalTaskDuration_MC}`)
    console.log(`Total Task Duration = ${totalTaskDuration_MC}`);
    console.log(`${gender2} Total Task Recovery = ${totalTaskRecovery_MC}`);

    storeResults.push(storeTaskNames);
    storeResults.push(storeMetricContribution);

    return storeResults;
}


// METRICS CALCULATION FUNCTION

// Establish variables for metricsCalculation Function
console.log("LEFT HAND:");
console.log(" ");
percentFemalesFatigued_LH = percentFatigued(tasks_LH, "Female");
percentMalesFatigued_LH = percentFatigued(tasks_LH, "Male");
console.log("RIGHT HAND:");
console.log(" ");
percentFemalesFatigued_RH = percentFatigued(tasks_RH, "Female");
percentMalesFatigued_RH = percentFatigued(tasks_RH, "Male");

console.log(`Percent Female workers = ${percentFemaleWorkers} %`);
console.log(`Percent Male workers = ${percentMaleWorkers} %`);

// Function itself ...
function metricsCalculation(percentFatigued_Female, percentFatigued_Male, hand, handTasks) {
    console.log(" ");
    console.log(`RESULTS - ${hand} Hand:`);
    console.log(" ");
    console.log(`Females Percent Fatigued for ${hand} Hand = ${percentFatigued_Female} %`);
    console.log(`Male Percent Fatigued for ${hand} Hand = ${percentFatigued_Male} %`);

    percentWorkersFatigued = (percentFatigued_Female * percentFemaleWorkers / 100) + (percentFatigued_Male * percentMaleWorkers / 100);
    console.log(`Percent Workers Fatigued for ${hand} Hand = ${rounder1(percentWorkersFatigued)} %`);

    // CASE 1 - There is a feasible Female solution
    if (percentFatigued_Female < 100) {
        const logResultsArray = percentContribution(handTasks, percentFatigued_Female, "Female");
        console.log(" ");
        console.log(`FEMALE Metric Contribution Values`);
        for (let x = 0; x < handTasks.length; x++) {
            console.log(`Case 1: ${logResultsArray[0][x]} = ${logResultsArray[1][x]}`);
        }
    }

    // CASE 2 - No feasible Female solution (i.e., 100% Females Fatigued), but a feasible Male solution
    if (percentFatigued_Female === 100 && percentFatigued_Male < 100) {
        const logResultsArray = percentContribution(handTasks, percentFatigued_Male, "Male");
        console.log(" ");
        console.log(`MALE Metric Contribution Values`);
        for (let x = 0; x < handTasks.length; x++) {
            console.log(`Case 2: ${logResultsArray[0][x]} = ${logResultsArray[1][x]}`);
        }
    }

    // CASE 3 - No feasible Female or Male solution
    if (percentFatigued_Male === 100) {
        const logResultsArray = percentContribution(handTasks, percentFatigued_Male, "Male");
        console.log(" ");
        console.log(`MALE Metric Contribution Values`);
        for (let x = 0; x < handTasks.length; x++) {
            console.log(`Case 3: ${logResultsArray[0][x]} = ${logResultsArray[1][x]}`);
        }
    }
}

// RUN METRICS CALCULATION FUNCTION
metricsCalculation(percentFemalesFatigued_LH, percentMalesFatigued_LH, "Left", tasks_LH);
console.log(" ");
metricsCalculation(percentFemalesFatigued_RH, percentMalesFatigued_RH, "Right", tasks_RH);








