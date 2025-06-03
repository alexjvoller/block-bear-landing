import { IBenefitBullet } from "@/types";
import { CiCalculator1 } from "react-icons/ci";
import { FaRuler } from "react-icons/fa6";
export const bullets: IBenefitBullet[] = [
  {
    title: "Calculated Trackables",
    description:
      "Support for every possible equations with a rapidly growing catalogue. View your values with the raw functions and data we used for complete assurance",
    icon: <CiCalculator1 size={26} />,
  },
  {
    title: "Measured Trackables",
    description:
      "If it can be measured it can be tracked with support for over 60 units. Link your wearables for auto-feeds.",
    icon: <FaRuler size={26} />,
  },
];
