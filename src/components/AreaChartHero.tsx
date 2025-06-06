"use client";

import { AreaChart } from "@/components/AreaChart";
import {
  bodyweight,
  slugNames,
  SlugNamesType,
} from "@/../public/data/bodyweight";
import { useContext } from "react";
import { chartContext } from "@/contexts/use-chart-context";

const colorMap = (key: SlugNamesType): "purple" | "pumpkin" => {
  return "purple";
};

//responsible for setting the slug name, date, actual, target values up to the use context.
const AreaChartHero = () => {
  const context = useContext(chartContext);

  if (!context) {
    throw new Error("AreaChartHero must be used within a ChartContextProvider");
  }

  const { setContextValue } = context;

  return (
    <AreaChart
      className="h-80 "
      data={bodyweight}
      index="date"
      categories={["actual", ...slugNames]}
      colors={["pumpkin", ...slugNames.map(colorMap)]}
      showLegend={false}
      connectNulls={true}
      showXAxis={false}
      showYAxis={false}
      showGridLines={false}
      autoMinValue={true}
      valueFormatter={(number: number) =>
        `${Intl.NumberFormat("us").format(number).toString()}`
      }
      tooltipCallback={({ active, payload, label }) => {
        if (active && payload && payload.length) {
          const actualValue = payload.find(
            (item: any) => item.category === "actual"
          )?.value;
          const targetItem = payload.find(
            (item: any) => item.category !== "actual"
          );

          if (actualValue !== undefined && targetItem) {
            setContextValue({
              slugName: targetItem.category as SlugNamesType,
              date: label,
              actual: actualValue,
              target: targetItem.value,
            });
          }
        }
      }}
    />
  );
};

export default AreaChartHero;
