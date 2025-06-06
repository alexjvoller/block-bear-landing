import React from "react";

import { SectionHeader } from "./SectionHeader";
import Benefits from "./Benefits/Benefits";

const Analytics: React.FC = () => {
  return (
    <section
      id="analytics"
      className="relative flex flex-col items-center justify-center py-10 px-5 bg-cardinal-50"
    >
      <div className="flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-0"></div>

        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader
            pillNumber={1}
            pillText="Analytics"
            header={
              <>
                Analytics For Key{" "}
                <span className="font-['Lazer84'] text-cardinal-300">
                  INSIGHTS
                </span>
              </>
            }
            subheading="Easily identify undertraining, overtraining, plateus to fully optimise your training block."
          />
          <Benefits section="analytics" />
        </div>
      </div>
    </section>
  );
};

export default Analytics;
