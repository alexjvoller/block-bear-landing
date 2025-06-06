import React from "react";
import { SectionHeader } from "./SectionHeader";
import Benefits from "./Benefits/Benefits";

const Schedule: React.FC = () => {
  return (
    <section
      id="schedule"
      className="relative border-t-2 border-b-2 border-black flex flex-col items-center justify-center py-10 px-5 bg-purple-50"
    >
      <div className="flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-0"></div>

        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader
            pillNumber={4}
            pillText="Schedule"
            header={
              <>
                A Schedule That Starts, Stops,{" "}
                <span className="font-['Lazer84'] text-remy-500">SLIDES</span>
              </>
            }
            subheading="Manage your schedule in one place and plan out your month, year, or that marathon. "
          />
          <Benefits section="schedule" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
