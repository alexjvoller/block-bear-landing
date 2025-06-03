import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiPieChart,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const analyticsBenefits: IBenefit[] = [
  {
    title: "The markers you need",
    description:
      "target and actual trend analysis, min, max, averages, forecasts, compliance, attendance: throughout your training block",
    bullets: [
      {
        title: "Actual Trendline and Forecast Values",
        description:
          "See the recorded trendline for your block data and see the forecasted value",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Target Trendline for Incremental Goals",
        description:
          "Whether incrementing by a % or a fixed value, you'll know your target session every workout every run.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Get Strict with Tolerance Values",
        description:
          "Goals can set with either a % or fixed value tolerance value so you can track how compliant your are to the plan.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/statistics.png",
  },
  {
    title: "Make adjustments",
    description:
      "Goals can be adjusted mid-block give you unmatched flexibility and control.",
    bullets: [
      {
        title: "Reset from Start",
        description:
          "Reset your incrent rates, targets by from the start of the block",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Add a new phase",
        description:
          "Don't want to lose your previous goal trend? Add a new phase begining from your target or actual trendline value for a mid-block reset.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Condition Based Adjustments",
        description:
          "Goals can monitor your statistics and auto-update if a statistic meets a threshold. For example Goal Calories may increase by 10% if bodyweight change per week is too low",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/goals-that-adjust.png",
  },
  {
    title: "Analytics for all sports, all levels",
    description:
      "Goals and statistics are built from of the Block Bear trackables catalogue. If it can be calculated or measured, you can add goals and statistics to it in Block Bear.",
    bullets: [],
    imageSrc: "/images/statistics-you-need.png",
  },
];
