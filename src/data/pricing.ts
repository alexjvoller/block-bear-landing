import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Basic Block",
    price: "Free",
    features: [
      "Goal and statistic analytics",
      "Access to Journal",
      "Create Training Plan",
      "Stop/Start/Pause/Schedule After",
      "Progression Badges",
      "Create Block from AI/Scratch/Template",
    ],
  },
  {
    name: "Coach Template Block",
    price: "Set By Coach",
    features: [
      "Template goals, statistics defined by a template from your coach",
    ],
  },
  {
    name: "Coach Tailored Block",
    price: "Set By Coach",
    features: ["template goals, statistics, plan set by your coach for you"],
  },
  {
    name: "Coach One-on-One Block",
    price: "Set By Coach",
    features: ["In platform unlimited chat", "In platform file review"],
  },
  {
    name: "Friends Block",
    price: "TBA",
    features: [
      "Upto 5 participants",
      "In platform chat",
      "Participant stats and challenges",
    ],
  },
  {
    name: "Coached Class Block",
    price: "TBA",
    features: [
      "Upto 100 participants",
      "In platform chat",
      "Participant stats and challenges",
      "Coach sets training plan",
      "Coach can access partipant journal and set target fields",
    ],
  },
];
