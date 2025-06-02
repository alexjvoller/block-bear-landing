import React from "react";
import Image from "next/image";

import { SectionHeader } from "./SectionHeader";

const Trackables: React.FC = () => {
  return (
    <section
      id="trackables"
      className="relative flex flex-col items-center justify-center py-3 md:py-5 px-5 border-t-2 border-black"
    >
      <div className="flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-0"></div>

        <div className="flex flex-col">
          <SectionHeader
            pillNumber={2}
            pillText="Trackables"
            header={
              <>
                Over <span className="font-['Lazer84']">300</span>
                Trackables
              </>
            }
            subheading="target and actual trend analysis, min, max, averages, forecasts, compliance, attendance: throughout your training block"
          />
          <Image
            src="/images/trackables.png"
            width={532}
            height={200}
            quality={100}
            sizes="(max-width: 768px) 100vw, 384px"
            priority={true}
            unoptimized={true}
            alt="app mockup"
            className="relative mt-12 md:mt-16 mx-auto z-10"
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Trackables;
