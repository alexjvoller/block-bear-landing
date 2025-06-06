"use client";

import React from "react";

import { heroDetails } from "@/data/hero";
import HeroButtons from "./HeroButtons";
import AreaChartHero from "./AreaChartHero";
import { BlockSlug } from "./BlockSlug";
import { useChartContext } from "@/contexts/use-chart-context";
import { ValueStatistic } from "./value-statistic";
import { blocks } from "../../public/data/blocks";

const Hero: React.FC = () => {
  const { contextValue } = useChartContext();
  const config = blocks[contextValue.slugName];
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 h-screen overflow-clip"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-[#9062d4] -z-10"></div>

      <div className="flex flex-col gap-4 text-center items-center justify-center relative z-10 w-full">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          Training Blocks That{" "}
          <span className="font-['Lazer84'] text-pumpkin-300">Build</span>
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>

        <HeroButtons />
        <AreaChartHero />
        <BlockSlug />
        <ValueStatistic
          name="actual"
          value={contextValue.actual}
          date={contextValue.date}
          className="text-neutral-300 absolute -top-24 left-3"
        />
        <ValueStatistic
          name="target"
          value={contextValue.target}
          className="text-neutral-500 absolute  bottom-20 left-2/4"
          date={contextValue.date}
        />

        <ValueStatistic
          name="Total Target Change"
          value={config.totalTargetChanage}
          unit="kg"
          className="text-neutral-300 absolute -top-20 right-3"
          date={undefined}
        />

        <ValueStatistic
          name="Attendance"
          value={config.attendence}
          unit="%"
          className="text-neutral-200 absolute -top-36 left-1/3"
          date={undefined}
        />
        <ValueStatistic
          name="Compliance"
          value={config.compliance}
          unit="%"
          className="text-neutral-400 absolute -top-40 right-28"
          date={undefined}
        />
        <ValueStatistic
          name="Leaderboard Rank"
          value={config.leaderboard}
          className="text-neutral-600 text-md absolute bottom-0 left-10"
          date={undefined}
        />
      </div>
    </section>
  );
};

export default Hero;
