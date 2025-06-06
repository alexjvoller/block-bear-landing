"use client";

import React from "react";
import { AreaChart } from "@/components/AreaChart";
import {
  bodyweight,
  slugNames,
  SlugNamesType,
} from "@/../public/data/bodyweight";
import { useChartContext } from "@/contexts/use-chart-context";
import { useAnimationContext } from "@/contexts/use-animation-context";
import { motion } from "framer-motion";

const colorMap = (): "purple" | "pumpkin" => {
  return "purple";
};

//responsible for setting the slug name, date, actual, target values up to the use context.
const AreaChartHero = () => {
  const { setContextValue } = useChartContext();
  const { setChartVisible } = useAnimationContext();

  React.useEffect(() => {
    setChartVisible(true);
  }, [setChartVisible]);

  interface PayloadItem {
    category: string;
    value: number;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
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
        showTooltip={false}
        autoMinValue={true}
        startEndOnly={true}
        intervalType="preserveStartEnd"
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat("us").format(number).toString()}`
        }
        tooltipCallback={({ active, payload, label }) => {
          if (active && payload && payload.length) {
            const actualValue = payload.find(
              (item: PayloadItem) => item.category === "actual"
            )?.value;
            const targetItem = payload.find(
              (item: PayloadItem) => item.category !== "actual"
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
    </motion.div>
  );
};

export default AreaChartHero;
