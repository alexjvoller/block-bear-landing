import React from "react";
import Image from "next/image";

import { statisticsDetails } from "@/data/statistics";
import { SectionHeader } from "./SectionHeader";

const Statistics: React.FC = () => {
  return (
    <section
      id="statistics"
      className="relative flex flex-col items-center justify-center py-3 md:py-5 px-5 bg-cardinal-50"
    >
      <div className="flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-0"></div>

        <div className="flex flex-col">
          <SectionHeader
            pillNumber={1}
            pillText="Statistics"
            header={
              <>
                Analytics for Key{" "}
                <span className="font-['Lazer84'] text-cardinal-300">
                  INSIGHTS
                </span>
              </>
            }
            subheading={statisticsDetails.subheading}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <Image
                src={statisticsDetails.centerImageSrc}
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

            <div className="flex flex-col gap-4 p-6">
              <Image
                src={statisticsDetails.image2}
                width={325}
                height={150}
                quality={100}
                sizes="(max-width: 768px) 100vw, 384px"
                priority={true}
                unoptimized={true}
                alt="app mockup"
                className="relative mx-auto z-10"
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))",
                  borderRadius: "4px",
                }}
              />
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-xl font-semibold">Goals That Adjust</h3>
                <p className="text-base text-foreground-accent">
                  Goal phases allow adjustments mid-block giving you unmatched
                  flexibility and control.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <Image
                src={statisticsDetails.image3}
                width={325}
                height={150}
                quality={100}
                sizes="(max-width: 768px) 100vw, 384px"
                priority={true}
                unoptimized={true}
                alt="app mockup"
                className="relative mx-auto z-10"
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))",
                  borderRadius: "4px",
                }}
              />
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-xl font-semibold text-foreground">
                  The Statistics You Need
                </h3>
                <p className="text-base text-foreground-accent max-w-sm text-center">
                  Add statistics to the statistics you need to your in-block
                  quick-reference dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
