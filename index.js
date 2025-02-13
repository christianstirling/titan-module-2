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


//  Object containing all of the Handle types used in the Twist and Turn module (2).

const handleTypes = {
    "Key": {
        "Male": {
            mean: 36.72,
            stdDev: 5.75
        },
        "Female": {
            mean: 28.76,
            stdDev: 0.44
        }
    },
    "Door Knob": {
        "Male": {
            mean: 61.51,
            stdDev: 21.86
        },
        "Female": {
            mean: 46.47,
            stdDev: 12.75
        }
    },
    "L-Shaped": {
        "Right": {
            "Counter-clockwise": {
                "Male": {
                    mean: 154,
                    stdDev: 46.02
                },
                "Female": {
                    mean: 101.64,
                    stdDev: 30.38
                }
            },
            "Clockwise": {
                "Male": {
                    mean: 121.26,
                    stdDev: 30.09
                },
                "Female": {
                    mean: 80.03,
                    stdDev: 19.86
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Male": {
                    mean: 154.00,
                    stdDev: 46.02
                },
                "Female": {
                    mean: 101.64,
                    stdDev: 30.38
                }
            },
            "Counter-clockwise": {
                "Male": {
                    mean: 121.26,
                    stdDev: 30.09
                },
                "Female": {
                    mean: 80.03,
                    stdDev: 19.86
                }
            }
        }
    },
    "Ridged Knob": {
        "Male": {
            mean: 37.79,
            stdDev: 8.67
        },
        "Female": {
            mean: 25.40,
            stdDev: 5.66
        }
    },
    "Tap": {
        "Male": {
            mean: 73.20,
            stdDev: 19.91
        },
        "Female": {
            mean: 53.37,
            stdDev: 13.28
        }
    },
    "Wing Nut": {
        "Male": {
            mean: 34.96,
            stdDev: 9.74
        },
        "Female": {
            mean: 23.90,
            stdDev: 5.13
        }
    },
    "Jar Lid": {
        "Knurled": {
            "1.8 inch diameter": {
                "Male": {
                    mean: 39.83,
                    stdDev: 11.33
                },
                "Female": {
                    mean: 31.95,
                    stdDev: 10.18
                }
            },
            "2.6 inch diameter": {
                "Male": {
                    mean: 58.68,
                    stdDev: 13.28
                },
                "Female": {
                    mean: 42.13,
                    stdDev: 12.39
                }
            },
            "3.3 inch diameter": {
                "Male": {
                    mean: 74.61,
                    stdDev: 15.84
                },
                "Female": {
                    mean: 52.48,
                    stdDev: 13.45
                }
            }
        },
        "Smooth": {
            "1.8 inch diameter": {
                "Male": {
                    mean: 32.66,
                    stdDev: 10.09
                },
                "Female": {
                    mean: 28.59,
                    stdDev: 10.09
                }
            },
            "2.6 inch diameter": {
                "Male": {
                    mean: 50.01,
                    stdDev: 10.80
                },
                "Female": {
                    mean: 38.85,
                    stdDev: 12.39
                }
            },
            "3.3 inch diameter": {
                "Male": {
                    mean: 67.27,
                    stdDev: 15.22
                },
                "Female": {
                    mean: 51.51,
                    stdDev: 16.73
                }
            }
        }
    },
    "Round Knob": {
        "Knurled": {
            "0.125 inch diameter": {
                "Male": {
                    mean: 0.57,
                    stdDev: 0.19
                },
                "Female": {
                    mean: 0.38,
                    stdDev: 0.13
                }
            },
            "0.25 inch diameter": {
                "Male": {
                    mean: 1.22,
                    stdDev: 0.34
                },
                "Female": {
                    mean: 0.81,
                    stdDev: 0.22
                }
            },
            "0.5 inch diameter": {
                "Male": {
                    mean: 1.99,
                    stdDev: 0.84
                },
                "Female": {
                    mean: 1.33,
                    stdDev: 0.56
                }
            },
            "0.75 inch diameter": {
                "Male": {
                    mean: 5.81,
                    stdDev: 1.98
                },
                "Female": {
                    mean: 3.88,
                    stdDev: 1.32
                }
            },
            "1.0 inch diameter": {
                "Male": {
                    mean: 7.25,
                    stdDev: 2.22
                },
                "Female": {
                    mean: 4.82,
                    stdDev: 1.48
                }
            },
            "1.5 inch diameter": {
                "Male": {
                    mean: 9.17,
                    stdDev: 2.35
                },
                "Female": {
                    mean: 6.11,
                    stdDev: 1.56
                }
            },
            "2.0 inch diameter": {
                "Male": {
                    mean: 13.13,
                    stdDev: 3.05
                },
                "Female": {
                    mean: 8.74,
                    stdDev: 2.04
                }
            },
            "3.0 inch diameter": {
                "Male": {
                    mean: 29.85,
                    stdDev: 8.53
                },
                "Female": {
                    mean: 19.88,
                    stdDev: 5.68
                }
            },
            "4.0 inch diameter": {
                "Male": {
                    mean: 43.62,
                    stdDev: 10.87
                },
                "Female": {
                    mean: 29.05,
                    stdDev: 7.24
                }
            },
            "5.0 inch diameter": {
                "Male": {
                    mean: 60.82,
                    stdDev: 16.42
                },
                "Female": {
                    mean: 40.51,
                    stdDev: 10.93
                }
            }
        },
        "Smooth": {
            "0.125 inch diameter": {
                "Male": {
                    mean: 0.19,
                    stdDev: 0.10
                },
                "Female": {
                    mean: 0.12,
                    stdDev: 0.06
                }
            },
            "0.25 inch diameter": {
                "Male": {
                    mean: 0.52,
                    stdDev: 0.20
                },
                "Female": {
                    mean: 0.35,
                    stdDev: 0.13
                }
            },
            "0.5 inch diameter": {
                "Male": {
                    mean: 1.36,
                    stdDev: 0.48
                },
                "Female": {
                    mean: 0.90,
                    stdDev: 0.32
                }
            },
            "0.75 inch diameter": {
                "Male": {
                    mean: 2.49,
                    stdDev: 0.66
                },
                "Female": {
                    mean: 1.66,
                    stdDev: 0.44
                }
            },
            "1.0 inch diameter": {
                "Male": {
                    mean: 3.69,
                    stdDev: 1.33
                },
                "Female": {
                    mean: 2.46,
                    stdDev: 0.89
                }
            },
            "1.5 inch diameter": {
                "Male": {
                    mean: 6.09,
                    stdDev: 1.65
                },
                "Female": {
                    mean: 4.05,
                    stdDev: 1.10
                }
            },
            "2.0 inch diameter": {
                "Male": {
                    mean: 9.25,
                    stdDev: 2.92
                },
                "Female": {
                    mean: 6.16,
                    stdDev: 1.95
                }
            },
            "3.0 inch diameter": {
                "Male": {
                    mean: 16.69,
                    stdDev: 5.07
                },
                "Female": {
                    mean: 11.12,
                    stdDev: 3.38
                }
            },
            "4.0 inch diameter": {
                "Male": {
                    mean: 28.38,
                    stdDev: 8.45
                },
                "Female": {
                    mean: 18.91,
                    stdDev: 5.63
                }
            },
            "5.0 inch diameter": {
                "Male": {
                    mean: 44.77,
                    stdDev: 14.11
                },
                "Female": {
                    mean: 29.82,
                    stdDev: 9.40
                }
            }
        }
    },
    "Regular Screwdriver": {
        "Right": {
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 18.19,
                        stdDev: 5.64
                    },
                    "Female": {
                        mean: 12.00,
                        stdDev: 3.72
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 35.03,
                        stdDev: 6.46
                    },
                    "Female": {
                        mean: 23.12,
                        stdDev: 4.26
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 44.26,
                        stdDev: 9.14
                    },
                    "Female": {
                        mean: 29.21,
                        stdDev: 6.03
                    }
                }
            },
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 46.19,
                        stdDev: 13.08
                    },
                    "Female": {
                        mean: 30.49,
                        stdDev: 8.63
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 44.94,
                        stdDev: 9.53
                    },
                    "Female": {
                        mean: 29.66,
                        stdDev: 6.29
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 36.52,
                        stdDev: 12.15
                    },
                    "Female": {
                        mean: 24.10,
                        stdDev: 8.02
                    }
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 18.19,
                        stdDev: 5.64
                    },
                    "Female": {
                        mean: 12.00,
                        stdDev: 3.72
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 35.03,
                        stdDev: 6.46
                    },
                    "Female": {
                        mean: 23.12,
                        stdDev: 4.26
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 44.26,
                        stdDev: 9.14
                    },
                    "Female": {
                        mean: 29.21,
                        stdDev: 6.03
                    }
                }
            },
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 46.19,
                        stdDev: 13.08
                    },
                    "Female": {
                        mean: 30.49,
                        stdDev: 8.63
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 44.94,
                        stdDev: 9.53
                    },
                    "Female": {
                        mean: 29.66,
                        stdDev: 6.29
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 36.52,
                        stdDev: 12.15
                    },
                    "Female": {
                        mean: 24.10,
                        stdDev: 8.02
                    }
                }
            }
        }
    },
    "Pistol Grip Screwdriver": {
        "Right": {
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 31.42,
                        stdDev: 17.36
                    },
                    "Female": {
                        mean: 18.22,
                        stdDev: 10.07
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 68.51,
                        stdDev: 21.61
                    },
                    "Female": {
                        mean: 39.74,
                        stdDev: 12.54
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 103.64,
                        stdDev: 24.84
                    },
                    "Female": {
                        mean: 60.11,
                        stdDev: 14.40
                    }
                }
            },
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 105.37,
                        stdDev: 26.76
                    },
                    "Female": {
                        mean: 55.85,
                        stdDev: 14.19
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 87.84,
                        stdDev: 19.10
                    },
                    "Female": {
                        mean: 46.56,
                        stdDev: 10.12
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 52.90,
                        stdDev: 19.48
                    },
                    "Female": {
                        mean: 28.04,
                        stdDev: 10.32
                    }
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 31.42,
                        stdDev: 17.36
                    },
                    "Female": {
                        mean: 18.22,
                        stdDev: 10.07
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 68.51,
                        stdDev: 21.61
                    },
                    "Female": {
                        mean: 39.74,
                        stdDev: 12.54
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 103.64,
                        stdDev: 24.84
                    },
                    "Female": {
                        mean: 60.11,
                        stdDev: 14.40
                    }
                }
            },
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 105.37,
                        stdDev: 26.76
                    },
                    "Female": {
                        mean: 55.85,
                        stdDev: 14.19
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 87.84,
                        stdDev: 19.10
                    },
                    "Female": {
                        mean: 46.56,
                        stdDev: 10.12
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 52.90,
                        stdDev: 19.48
                    },
                    "Female": {
                        mean: 28.04,
                        stdDev: 10.32
                    }
                }
            }
        }
    },
    "T-Handle": {
        "Right": {
            "Elbow Angle 180 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 40.71
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 30.09
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 17.45
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 25.67
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 14.89
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 128.34,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 68.02,
                            stdDev: 23.45
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 102.67,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 54.41,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 99.13,
                            stdDev: 60.19
                        },
                        "Female": {
                            mean: 52.54,
                            stdDev: 31.90
                        }
                    }
                }
            },
            "Elbow Angle 135 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 107.09,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 62.11,
                            stdDev: 25.67
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 119.49,
                            stdDev: 26.55
                        },
                        "Female": {
                            mean: 69.30,
                            stdDev: 15.40
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 29.21
                        },
                        "Female": {
                            mean: 68.27,
                            stdDev: 16.94
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 139.84,
                            stdDev: 56.64
                        },
                        "Female": {
                            mean: 74.12,
                            stdDev: 30.02
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 126.57,
                            stdDev: 49.56
                        },
                        "Female": {
                            mean: 67.08,
                            stdDev: 26.27
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.06,
                            stdDev: 64.61
                        },
                        "Female": {
                            mean: 60.98,
                            stdDev: 34.24
                        }
                    }
                }
            },
            "Elbow Angle 90 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 97.36,
                            stdDev: 50.45
                        },
                        "Female": {
                            mean: 56.47,
                            stdDev: 29.26
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 39.83
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.10
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.94,
                            stdDev: 35.40
                        },
                        "Female": {
                            mean: 67.25,
                            stdDev: 20.53
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 137.19,
                            stdDev: 53.99
                        },
                        "Female": {
                            mean: 72.71,
                            stdDev: 28.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 138.96,
                            stdDev: 55.76
                        },
                        "Female": {
                            mean: 73.65,
                            stdDev: 29.55
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 69.92
                        },
                        "Female": {
                            mean: 62.39,
                            stdDev: 37.06
                        }
                    }
                }
            },
            "Elbow Angle 45 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 79.66,
                            stdDev: 42.48
                        },
                        "Female": {
                            mean: 46.20,
                            stdDev: 24.64
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 104.44,
                            stdDev: 33.63
                        },
                        "Female": {
                            mean: 60.57,
                            stdDev: 19.51
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 13.86
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 143.38,
                            stdDev: 51.33
                        },
                        "Female": {
                            mean: 75.99,
                            stdDev: 27.21
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 122.14,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 64.73,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 96.47,
                            stdDev: 52.22
                        },
                        "Female": {
                            mean: 51.13,
                            stdDev: 27.68
                        }
                    }
                }
            }
        },
        "Left": {
            "Elbow Angle 180 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 40.71
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 30.09
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 17.45
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 25.67
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 14.89
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 128.34,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 68.02,
                            stdDev: 23.45
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 102.67,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 54.41,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 99.13,
                            stdDev: 60.19
                        },
                        "Female": {
                            mean: 52.54,
                            stdDev: 31.90
                        }
                    }
                }
            },
            "Elbow Angle 135 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 107.09,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 62.11,
                            stdDev: 25.67
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 119.49,
                            stdDev: 26.55
                        },
                        "Female": {
                            mean: 69.30,
                            stdDev: 15.40
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 29.21
                        },
                        "Female": {
                            mean: 68.27,
                            stdDev: 16.94
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 139.84,
                            stdDev: 56.64
                        },
                        "Female": {
                            mean: 74.12,
                            stdDev: 30.02
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 126.57,
                            stdDev: 49.56
                        },
                        "Female": {
                            mean: 67.08,
                            stdDev: 26.27
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.06,
                            stdDev: 64.61
                        },
                        "Female": {
                            mean: 60.98,
                            stdDev: 34.24
                        }
                    }
                }
            },
            "Elbow Angle 90 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 97.36,
                            stdDev: 50.45
                        },
                        "Female": {
                            mean: 56.47,
                            stdDev: 29.26
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 39.83
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.10
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.94,
                            stdDev: 35.40
                        },
                        "Female": {
                            mean: 67.25,
                            stdDev: 20.53
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 137.19,
                            stdDev: 53.99
                        },
                        "Female": {
                            mean: 72.71,
                            stdDev: 28.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 138.96,
                            stdDev: 55.76
                        },
                        "Female": {
                            mean: 73.65,
                            stdDev: 29.55
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 69.92
                        },
                        "Female": {
                            mean: 62.39,
                            stdDev: 37.06
                        }
                    }
                }
            },
            "Elbow Angle 45 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 79.66,
                            stdDev: 42.48
                        },
                        "Female": {
                            mean: 46.20,
                            stdDev: 24.64
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 104.44,
                            stdDev: 33.63
                        },
                        "Female": {
                            mean: 60.57,
                            stdDev: 19.51
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 13.68
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 143.38,
                            stdDev: 51.33
                        },
                        "Female": {
                            mean: 75.99,
                            stdDev: 27.21
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 122.14,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 64.73,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 96.47,
                            stdDev: 52.22
                        },
                        "Female": {
                            mean: 51.13,
                            stdDev: 27.68
                        }
                    }
                }
            }
        }
    },
    "Cylindrical Handle": {
        "Right": {
            "Smooth": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 55.76,
                            stdDev: 20.36
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 13.28
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 46.91,
                            stdDev: 11.51
                        },
                        "Female": {
                            mean: 19.47,
                            stdDev: 13.28
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 43.37,
                            stdDev: 18.59
                        },
                        "Female": {
                            mean: 21.24,
                            stdDev: 12.39
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 61.96,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 25.67,
                            stdDev: 22.13
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 15.05
                        },
                        "Female": {
                            mean: 26.67,
                            stdDev: 22.13
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 53.10,
                            stdDev: 16.82
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 17.70
                        }
                    }
                }
            },
            "Knurled": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 23.01
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 15.05
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 53.99,
                            stdDev: 13.28
                        },
                        "Female": {
                            mean: 22.13,
                            stdDev: 15.05
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 49.56,
                            stdDev: 21.24
                        },
                        "Female": {
                            mean: 24.78,
                            stdDev: 14.16
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 71.69,
                            stdDev: 27.44
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 73.46,
                            stdDev: 17.70
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 61.07,
                            stdDev: 19.47
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 20.36
                        }
                    }
                }
            }
        },
        "Left": {
            "Smooth": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 55.76,
                            stdDev: 20.36
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 13.28
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 46.91,
                            stdDev: 11.51
                        },
                        "Female": {
                            mean: 19.47,
                            stdDev: 13.28
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 43.37,
                            stdDev: 18.59
                        },
                        "Female": {
                            mean: 21.24,
                            stdDev: 12.39
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 61.96,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 25.67,
                            stdDev: 22.13
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 15.05
                        },
                        "Female": {
                            mean: 25.67,
                            stdDev: 22.13
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 53.10,
                            stdDev: 16.82
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 17.70
                        }
                    }
                }
            },
            "Knurled": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 23.01
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 15.05
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 53.99,
                            stdDev: 13.28
                        },
                        "Female": {
                            mean: 22.13,
                            stdDev: 15.05
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 49.56,
                            stdDev: 21.24
                        },
                        "Female": {
                            mean: 24.78,
                            stdDev: 14.16
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 71.69,
                            stdDev: 27.44
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 73.46,
                            stdDev: 17.70
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 61.07,
                            stdDev: 19.47
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 20.36
                        }
                    }
                }
            }
        }
    }
}



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

/*  
    'input' array - simulation of the user's input as it would be entered into the app.
*/


const input = [
    {
        name: "Task 1.1 Key",
        handleType: "Key",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1.2",
        handleType: "Door Knob",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1.3",
        handleType: "Ridged Knob",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1.4",
        handleType: "Tap",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 1.5",
        handleType: "Wing Nut",
        modifiers: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
]

/*
    'createTasks' function - takes the input above and turns it into tasks. 

    The big difference between the input objects and the tasks objects is that the task objects have the 2 mean
    and standard deviation values already in them. to accomodate this, we will be changing how the calculator
    finds the mean and standard deviation values in the later functions.

    Also, we removed the Modifiers attribute from the tasks objects since the modifiers are already calculated
    in the findValues function.

 */


    

/*  ** Begin changes

    Created two constants: testPerc and durationMod

    testPerc is the percentage that the female mean is multiplied by when
    calculating the force magnitude.

    durationMod is the modifier that the force duration (the value in the input object)
    is multiplied by when calculating the force duration of the task.
*/

const testPerc = .25

const durationMod = 5

/*  ** End changes (2.13.25 cls)
*/




function createTasks(input) {

    let outputArray = new Array();

    for (let i = 0; i < input.length; i++) {

        maleMean = 0;
        maleStdDev = 0;
        femaleMean = 0;
        femaleStdDev = 0;
        
        findValues(handleTypes[input[i].handleType], input[i].handleType, input[i].modifiers, input[i].hand)

        if (maleMean === null || maleStdDev === null || femaleMean === null || femaleStdDev === null) {
            console.log("Could not calculate one of the mean or standard deviation values for task number " + (i+1) + ".")
            console.log("Check the modifiers entered for this task and try again.\n")
        } else if (maleMean === 0 || maleStdDev === 0 || femaleMean === 0 || femaleStdDev === 0) {
            console.log("The handle type entered for task number " + (i+1) + " is invalid.\n")
        } else {
            outputArray.push(makeOutput(i, input, maleMean, maleStdDev, femaleMean, femaleStdDev))
        }

    };

    return outputArray;
};

function findValues(force, handleType, modifiers, hand) {

    switch (handleType) {
        case 'Key':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Door Knob':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'L-Shaped':
            maleMean = force[hand][modifiers[0]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]]["Female"].stdDev
            break
        case 'Ridged Knob':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Tap':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Wing Nut':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Jar Lid':
            maleMean = force[modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'Round Knob':
            maleMean = force[modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'Regular Screwdriver':
            maleMean = force[hand][modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'Pistol Grip Screwdriver':
            maleMean = force[hand][modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'T-Handle':
            maleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].stdDev
            break
        case 'Cylindrical Handle':
            maleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].stdDev
            break
        default:
    }
};

function makeOutput(index, input, maleMean, maleStdDev, femaleMean, femaleStdDev) {

    let output = new Object();

    output.Task = (index + 1);
    output.TaskName = input[index].name;
    output.Hand = input[index].hand;
    output.ForceType = input[index].handleType;



    //  ** Begin changes

    //  Commented out the following line:

    // output.ForceMagnitude = input[index].forceMagnitude;


    //  Added the next line.  Sets the force magnitude to a value of the female mean
    //  multiplied by a set percentage modifier.

    //  The idea is to be able to make all of the force magnitude values the same
    //  so that the percent contributions are all equal and easy to check during
    //  testing.

    output.ForceMagnitude = (testPerc * femaleMean)

    //  ** End changes




    output.ForceCount = input[index].forceCount;



    //  ** Begin changes

    //  Commented out the following line:

    // output.ForceDuration = input[index].forceDuration;


    //  This next line sets the duration as the value passed in from the input,
    //  which in this case should be 1, multiplied by out duration modifier.

    //  The purpose of this is to allow us to ramp up the duration of each task
    //  without having to change the force duration values in the input array.

    output.ForceDuration = (input[index].forceDuration * durationMod);

    // ** End changes (2.13.25 cls)



    output.MaleMean = maleMean;
    output.MaleStdDev = maleStdDev;
    output.FemaleMean = femaleMean;
    output.FemaleStdDev = femaleStdDev;


    return output;

};

let maleMean;
let maleStdDev;
let femaleMean;
let femaleStdDev;

const tasks = createTasks(input);



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

        /*  Changed the following If-Else statement. 
            Previously it pulled the mean and standard dev values from the force type array.
            Now, it can look in the tasks_d parameter sent to this function and pull the values straight from
            named attributes there.
        */

        if (gender_d === "Male") {
            mean = tasks_d[j].MaleMean;
            stdDev = tasks_d[j].MaleStdDev;
        }
        else {
            mean = tasks_d[j].FemaleMean;
            stdDev = tasks_d[j].FemaleStdDev;
        }

        /*  End of changes.
        */


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



                /*  Changed the following If-Else statement. 
                    Previously it pulled the mean and standard dev values from the force type array.
                    Now, it can look in the taskInputs parameter sent to this function and pull the values straight from
                    named attributes there.
                */

                if (gender === "Male") {
                    mean = taskInputs[j].MaleMean;
                    stdDev = taskInputs[j].MaleStdDev;
                }
                else {
                    mean = taskInputs[j].FemaleMean;
                    stdDev = taskInputs[j].FemaleStdDev;
                }

                /*  End of changes.
                */  



                let populationStrength = 0;
                populationStrength = mean + (pValue[i] * stdDev);


                let taskDuration = taskInputs[j].ForceDuration * taskInputs[j].ForceCount;
                totalTaskDuration = totalTaskDuration + taskDuration;

                let forceMagnitude = taskInputs[j].ForceMagnitude;

                let taskRecovery = (taskDuration) / (1 - (forceMagnitude / (populationStrength))) ** (1 / 0.24) - (taskDuration);

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

        /*  Changed the following If-Else statement. 
            Previously it pulled the mean and standard dev values from the force type array.
            Now, it can look in the taskInputs parameter sent to this function and pull the values straight from
            named attributes there.
        */

        if (gender2 === "Male") {
            mean_MC = taskInputs[k].MaleMean;
            stdDev_MC = taskInputs[k].MaleStdDev;
        } else {
            mean_MC = taskInputs[k].FemaleMean;
            stdDev_MC = taskInputs[k].FemaleStdDev;
        }

        /*  End of changes.
        */  


        let populationStrength_MC = 0;
        // Note, "percent - 1" index used below. If used "percent", calculation would be 1 index off due to first slot in array being 0
        populationStrength_MC = mean_MC + (pValue[percent - 1] * stdDev_MC);



        /*  Changed the following section to remove the modifier variables.

            A modifier constant was created here that took all of the modifier values from the tasks
            array in module 1 (Hand and Finger) and multiplied them together. 
            Since modifiers are now being calculated and implemented in the very beginning of the code, 
            then there is no value in this part at all.

            Also removed the use of the modifier variable in the force magnitude equation and the
            task recovery equation below.
        */

        let taskDuration_MC = taskInputs[k].ForceDuration * taskInputs[k].ForceCount;
        let forceMagnitude_MC = taskInputs[k].ForceMagnitude;

        let taskRecovery_MC = (taskDuration_MC) / (1 - (forceMagnitude_MC / (populationStrength_MC))) ** (1 / 0.24) - (taskDuration_MC);

        /*  End of changes.
        */



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








