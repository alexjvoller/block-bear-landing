import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const scheduleBenefits: IBenefit[] = [
  {
    title: "All your training in one place",
    description:
      "Your lifetime training history stored in one place. Reschedule or restart your favourite training blocks and compare your performance.",
    bullets: [
      {
        title: "Schedule in Advance",
        description:
          "Set start dates, or schedule after another block in your program.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Link Blocks and Goals",
        description:
          "Let your goals and blocks build from each other by linking starting values to the block before.",
        icon: <FiTarget size={26} />,
      },
    ],
    imageSrc: "/images/schedule-center.png",
  },
  {
    title: "Sync your Training to your Schedule",
    description:
      "Adjust your training so it fits your schedule. When your schedule slides, we’ll calculate your forecasted targets, goals and analytics, and the start dates of future blocks to adjust.",
    bullets: [
      {
        title: "Stop, Stop, Pause, Schedule",
        description: "Start, stop, pause your training blocks when you need.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Active recalculation",
        description:
          "If life happens and you schedule changes, we’ll recalculate your schedule and your forecasts when this happens.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/start-stop.png",
  },
];
