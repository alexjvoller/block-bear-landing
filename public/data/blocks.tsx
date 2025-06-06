import { SlugNamesType } from "./bodyweight";

type Block = {
  name: string;
  slug: SlugNamesType;
  scheduledStart: Date;
  length: number;
  lengthInterval: "DAY" | "WEEK" | "MONTH";
  targetChangeRate: number;
  actualChangeRate: number;
  totalTargetChanage: number;
  totalActualChange: number;
  numPeriods: number;
  attendence: number;
  compliance: number;
  leaderboard: number;
};

export const blocks: Record<SlugNamesType, Block> = {
  "q1-cut": {
    name: "Q1 Cut",
    slug: "q1-cut",
    scheduledStart: new Date("2024-03-11"),
    length: 54,
    lengthInterval: "DAY",
    targetChangeRate: -0.5, // kg per week
    actualChangeRate: -0.45,
    totalTargetChanage: -3.86, // kg total
    totalActualChange: -3.47,
    numPeriods: 8,
    attendence: 92, // percentage
    compliance: 88, // percentage
    leaderboard: 3, // rank
  },
  "q2-bulk": {
    name: "Q2 bulk",
    slug: "q2-bulk",
    scheduledStart: new Date("2024-05-05"),
    length: 48,
    lengthInterval: "DAY",
    targetChangeRate: 0.4,
    actualChangeRate: 0.38,
    totalTargetChanage: 2.74,
    totalActualChange: 2.6,
    numPeriods: 7,
    attendence: 95,
    compliance: 91,
    leaderboard: 2,
  },
  "injury-cut": {
    name: "INJURED!",
    slug: "injury-cut",
    scheduledStart: new Date("2024-08-12"),
    length: 19,
    lengthInterval: "DAY",
    targetChangeRate: -0.3,
    actualChangeRate: -0.25,
    totalTargetChanage: -0.81,
    totalActualChange: -0.68,
    numPeriods: 3,
    attendence: 85,
    compliance: 82,
    leaderboard: 5,
  },
  permabulk: {
    name: "permabulk",
    slug: "permabulk",
    scheduledStart: new Date("2024-09-02"),
    length: 240,
    lengthInterval: "DAY",
    targetChangeRate: 0.3,
    actualChangeRate: 0.28,
    totalTargetChanage: 10.29,
    totalActualChange: 9.6,
    numPeriods: 34,
    attendence: 89,
    compliance: 86,
    leaderboard: 4,
  },
  "q2-mini-cut": {
    name: "Q2 mini-cut",
    slug: "q2-mini-cut",
    scheduledStart: new Date("2025-04-31"),
    length: 21,
    lengthInterval: "DAY",
    targetChangeRate: -0.4,
    actualChangeRate: -0.35,
    totalTargetChanage: -1.2,
    totalActualChange: -1.05,
    numPeriods: 3,
    attendence: 94,
    compliance: 90,
    leaderboard: 1,
  },
};
