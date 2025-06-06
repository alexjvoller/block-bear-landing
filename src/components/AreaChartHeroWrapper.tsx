"use client";

import AreaChartHero from "./AreaChartHero";
import { AreaChartHeader } from "./AreaChartHeader";

export const AreaChartHeroWrapper = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <AreaChartHeader />
      <AreaChartHero />
    </div>
  );
};
