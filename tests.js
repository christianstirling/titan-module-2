/*  Test input sets for module 2 calculator.
*/

const input = []

/*  Test set 0 - This will be an initial test set just to get started - NOT exhaustive,
    meaning that it is only useful until we have completed the full list of test sets
    below.

    Format should be one test for each handle type, plus a couple extra for the ones with modifiers,
*/

input = [
    {
        name: "Task 0.1",
        handleType: "Key",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.2",
        handleType: "Door Knob",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.3",
        handleType: "Ridged Knob",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.4",
        handleType: "Tap",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.5",
        handleType: "Wing Nut",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.6",
        handleType: "L-Shaped",
        modifiers: ["Counter-clockwise"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.7.1",
        handleType: "Jar Lid",
        modifiers: ["Knurled", "1.8 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.7.2",
        handleType: "Jar Lid",
        modifiers: ["Smooth", "3.3 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.8.1",
        handleType: "Round Knob",
        modifiers: ["Smooth", "0.5 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.8.2",
        handleType: "Round Knob",
        modifiers: ["Knurled", "4.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.9.1",
        handleType: "Regular Screwdriver",
        modifiers: ["Clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.9.2",
        handleType: "Regular Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.10.1",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.10.2",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.11.1",
        handleType: "T-Handle",
        modifiers: ["Elbow Angle 135 degrees", "Counter-clockwise", "Palm-up (75% Range of Motion)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.11.2",
        handleType: "T-Handle",
        modifiers: ["Elbow Angle 45 degrees", "Clockwise", "Palm-down (75% Range of Motion)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.11.3",
        handleType: "T-Handle",
        modifiers: ["Elbow Angle 180 degrees", "Clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.12.1",
        handleType: "Cylindrical Handle",
        modifiers: ["Smooth", "Inward", "1.8 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 0.12.2",
        handleType: "Cylindrical Handle",
        modifiers: ["Knurled", "Inward", "2.3 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 0.12.3",
        handleType: "Cylindrical Handle",
        modifiers: ["Smooth", "Outward", "3.3 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }

]

/*  Test set 1 - All of the handle types that have no modifiers.

    This will include (1)Key, (2)Door Knob, (4)Ridged Knob, (5)Tap, (6)Wing Nut
*/  

input = [
    {
        name: "Task 1a",
        handleType: "Key",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1b",
        handleType: "Door Knob",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1c",
        handleType: "Ridged Knob",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1d",
        handleType: "Tap",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1e",
        handleType: "Wing Nut",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
]

/*  Test set 2 - Handle type: (3)L-Shaped 
*/

input = [
    {
        name: "Task 2a",
        handleType: "L-Shaped",
        modifiers: ["Counter-clockwise"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 2b",
        handleType: "L-Shaped",
        modifiers: ["Clockwise"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 2c",
        handleType: "L-Shaped",
        modifiers: ["Clockwise"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 2d",
        handleType: "L-Shaped",
        modifiers: ["Counter-clockwise"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    }
]

/*  Test set 3 - Handle type: (7)Jar Lid 
*/

input = [
    {
        name: "Task 3a",
        handleType: "Jar Lid",
        modifiers: ["Knurled", "1.8 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 3b",
        handleType: "Jar Lid",
        modifiers: ["Knurled", "2.6 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 3c",
        handleType: "Jar Lid",
        modifiers: ["Knurled", "3.3 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 3d",
        handleType: "Jar Lid",
        modifiers: ["Smooth", "1.8 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 3e",
        handleType: "Jar Lid",
        modifiers: ["Smooth", "2.6 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 3f",
        handleType: "Jar Lid",
        modifiers: ["Smooth", "3.3 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
]

/*  Test set 4 - Handle type: (8)Round Knob  - Texture: Knurled
*/

input = [
    {
        name: "Task 4a",
        handleType: "Round Knob",
        modifiers: ["Knurled", "0.125 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4b",
        handleType: "Round Knob",
        modifiers: ["Knurled", "0.25 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4c",
        handleType: "Round Knob",
        modifiers: ["Knurled", "0.5 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4d",
        handleType: "Round Knob",
        modifiers: ["Knurled", "0.75 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4e",
        handleType: "Round Knob",
        modifiers: ["Knurled", "1.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4f",
        handleType: "Round Knob",
        modifiers: ["Knurled", "2.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4g",
        handleType: "Round Knob",
        modifiers: ["Knurled", "3.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4h",
        handleType: "Round Knob",
        modifiers: ["Knurled", "4.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 4i",
        handleType: "Round Knob",
        modifiers: ["Knurled", "5.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
]

/*  Test set 5 - Handle type: (8)Round Knob  - Texture: Smooth
*/

input = [
    {
        name: "Task 5a",
        handleType: "Round Knob",
        modifiers: ["Smooth", "0.125 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5b",
        handleType: "Round Knob",
        modifiers: ["Smooth", "0.25 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5c",
        handleType: "Round Knob",
        modifiers: ["Smooth", "0.5 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5d",
        handleType: "Round Knob",
        modifiers: ["Smooth", "0.75 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5e",
        handleType: "Round Knob",
        modifiers: ["Smooth", "1.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5f",
        handleType: "Round Knob",
        modifiers: ["Smooth", "2.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5g",
        handleType: "Round Knob",
        modifiers: ["Smooth", "3.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5h",
        handleType: "Round Knob",
        modifiers: ["Smooth", "4.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 5i",
        handleType: "Round Knob",
        modifiers: ["Smooth", "5.0 inch diameter"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
]

/*  Test set 6 - Handle type: (9)Regular Screwdriver - Hand: Right
*/

input = [
    {
        name: "Task 6a",
        handleType: "Regular Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 6b",
        handleType: "Regular Screwdriver",
        modifiers: ["Counter-clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 6c",
        handleType: "Regular Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },

    {
        name: "Task 6d",
        handleType: "Regular Screwdriver",
        modifiers: ["Clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 6e",
        handleType: "Regular Screwdriver",
        modifiers: ["Clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 6f",
        handleType: "Regular Screwdriver",
        modifiers: ["Clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
]

/*  Test set 7 - Handle type: (9)Regular Screwdriver - Hand: Left
*/

input = [
    {
        name: "Task 7a",
        handleType: "Regular Screwdriver",
        modifiers: ["Clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 7b",
        handleType: "Regular Screwdriver",
        modifiers: ["Clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 7c",
        handleType: "Regular Screwdriver",
        modifiers: ["Clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 7d",
        handleType: "Regular Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 7e",
        handleType: "Regular Screwdriver",
        modifiers: ["Counter-clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 7f",
        handleType: "Regular Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
]


/*  Test set 8 - Handle type: (10)Pistol Grip Screwdriver - Hand: Right
*/

input = [
    {
        name: "Task 8a",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 8b",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Counter-clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 8c",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },

    {
        name: "Task 8d",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 8e",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 8f",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
]

/*  Test set 9 - Handle type: (10)Pistol Grip Screwdriver - Hand: Left
*/

input = [
    {
        name: "Task 9a",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 9b",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 9c",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 9d",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-down (60 degrees Pronated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 9e",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Counter-clockwise", "Hand-shake (Neutral)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 9f",
        handleType: "Pistol Grip Screwdriver",
        modifiers: ["Counter-clockwise", "Palm-up (60 degrees Supinated)"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
]





/*  Test set n - Handle type: (11)T-Handle - Hand: Right - Elbow posture: 180 degrees
*/

/*  Test set n - Handle type: (11)T-Handle - Hand: Right - Elbow posture: 135 degrees
*/

/*  Test set n - Handle type: (11)T-Handle - Hand: Right - Elbow posture: 90 degrees
*/

/*  Test set n - Handle type: (11)T-Handle - Hand: Right - Elbow posture: 45 degrees
*/

/*  Test set n - Handle type: (11)T-Handle - Hand: Left - Elbow posture: 180 degrees
*/

/*  Test set n - Handle type: (11)T-Handle - Hand: Left - Elbow posture: 135 degrees
*/

/*  Test set n - Handle type: (11)T-Handle - Hand: Left - Elbow posture: 90 degrees
*/

/*  Test set n - Handle type: (11)T-Handle - Hand: Left - Elbow posture: 45 degrees
*/

/*  Test set n - Handle type: (12)Cylindrical Handle - Hand: Right - Texture: Smooth
*/

/*  Test set n - Handle type: (12)Cylindrical Handle - Hand: Right - Texture: Knurled
*/

/*  Test set n - Handle type: (12)Cylindrical Handle - Hand: Left - Texture: Smooth
*/

/*  Test set n - Handle type: (12)Cylindrical Handle - Hand: Left - Texture: Knurled
*/