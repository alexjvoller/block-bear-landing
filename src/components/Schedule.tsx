import React from "react";
import Image from "next/image";

import { scheduleDetails } from "@/data/schedule";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./ui/card";

const Schedule: React.FC = () => {
  return (
    <section
      id="schedule"
      className="relative border-t-2 border-black flex flex-col items-center justify-center py-3 md:py-5 px-5 bg-cardinal-50"
    >
      <div className="flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-0"></div>

        <div className="flex flex-col">
          <SectionHeader
            pillNumber={3}
            pillText="Schedule"
            header={
              <>
                A Schedule that starts, stops,{" "}
                <span className="font-['Lazer84'] text-remy-500">SLIDES</span>
              </>
            }
            subheading={scheduleDetails.subheading}
          />

          <Image
            src={scheduleDetails.centerImageSrc}
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
      <div className="mt-10 flex gap-4 md:gap-6">
        <Card className="">
          <div className="flex flex-col h-full justify-center items-center gap-4 p-6">
            <Image
              src={scheduleDetails.card1Image}
              width={116}
              height={48}
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
                {scheduleDetails.card1Header}
              </h3>
              <p className="text-base text-foreground-accent max-w-sm text-center">
                {scheduleDetails.card1Description}
              </p>
            </div>
          </div>
        </Card>
        <Card className="">
          <div className="flex flex-col gap-4 p-6">
            <Image
              src={scheduleDetails.card2Image}
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
                {scheduleDetails.card2Header}
              </h3>
              <p className="text-base text-foreground-accent max-w-sm text-center">
                {scheduleDetails.card2Description}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Schedule;
