"use client";
import { useChartContext } from "@/contexts/use-chart-context";
import { blocks } from "../../public/data/blocks";
import { add, format } from "date-fns";

export const BlockSlug = () => {
  const { contextValue } = useChartContext();

  const { scheduledStart, length } = blocks[contextValue.slugName];
  return (
    <div className="absolute  bottom-0 right-0 flex-colgap-2">
      <div className="text-neutral-700">
        {format(scheduledStart, "dd MMM")}-
        {format(add(scheduledStart, { days: length }), "dd MMM")}
      </div>
      <h1 className="border-t-2 border-neutral-700 text-2xl text-neutral-700 md:text-4xl md:leading-tight font-bold  max-w-lg md:max-w-2xl mx-auto">
        {contextValue.slugName}
      </h1>
    </div>
  );
};
