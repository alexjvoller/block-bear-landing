import BenefitSection from "./BenefitSection";

import { analyticsBenefits } from "@/data/analyticsBenefits";
import { scheduleBenefits } from "@/data/scheduleBenefits";
type Props = {
  section: "analytics" | "schedule";
};

const Benefits: React.FC<Props> = ({ section }) => {
  const benefits =
    section === "analytics" ? analyticsBenefits : scheduleBenefits;

  return (
    <div id="features">
      <h2 className="sr-only">Features</h2>
      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
