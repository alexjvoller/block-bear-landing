import { FiTarget } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { IBenefit } from "@/types";
import { MdEdit } from "react-icons/md";
import { RxEraser } from "react-icons/rx";
import { FaLink } from "react-icons/fa6";
export const analyticsBenefits: IBenefit[] = [
  {
    title: "The markers you need",
    description:
      "Target and actual trend analysis, min, max, averages, forecasts, compliance, attendance and more for your training block.",
    bullets: [
      {
        title: "Actual Trendline and Forecast Values",
        description:
          "See the recorded trendline and view the forecasted value.",
        icon: <MdAutoGraph size={26} />,
      },
      {
        title: "Target Trendline for Incremental Goals",
        description:
          "Whether incrementing by a % or a fixed value, you'll know your target session every workout every run.",
        icon: <SlGraph size={26} />,
      },
      {
        title: "Get Strict with Tolerance Values",
        description:
          "Goals can be set with either a % or fixed value tolerance value so you can track how compliant your are to the plan.",
        icon: <FiTarget size={26} />,
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
          "Reset your increment rates, fixed targets or % change values from the start of the block.",
        icon: <RxEraser size={26} />,
      },
      {
        title: "Add a New Phase",
        description:
          "Don't want to lose your previous goal trend? Add a new phase from your target or actual trendline if you need a mid-block reset.",
        icon: <MdEdit size={26} />,
      },
      {
        title: "Condition Based Adjustments",
        description:
          "Goals can monitor your statistics and auto-update if a statistic meets a threshold. For example: Goal Calories may increase by 10% if bodyweight change per week is too low.",
        icon: <FaLink size={26} />,
      },
    ],
    imageSrc: "/images/goals-that-adjust.png",
  },
  {
    title: "Analytics for All Sports, All Levels",
    description:
      "Goals and statistics are built from trackables. If it can be calculated or measured, you can add goals and statistics to it in Block Bear.",
    bullets: [],
    imageSrc: "/images/statistics-you-need.png",
  },
];
