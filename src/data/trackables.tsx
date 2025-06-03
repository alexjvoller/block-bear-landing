import { IBenefitBullet } from "@/types";
import { FiBarChart2 } from "react-icons/fi";

export const bullets: IBenefitBullet[] = [
  {
    title: "Calculated Trackables",
    description:
      "Support for every possible equations with a rapidly growing catalogue. View your values with the raw functions and data we used for complete assurance",
    icon: <FiBarChart2 size={26} />,
  },
  {
    title: "Measured Trackables",
    description:
      "If it can be measured it can be tracked with support for over 60 units. Link your wearables for auto-feeds.",
    icon: <FiBarChart2 size={26} />,
  },
];
