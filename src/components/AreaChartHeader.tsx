"use client";
import { useContext } from "react";
import { chartContext } from "@/contexts/use-chart-context";

export const AreaChartHeader = () => {
  const context = useContext(chartContext);
  if (!context) return null;
  const { contextValue } = context;
  return (
    <div className="flex gap-2">
      {contextValue.slugName}
      {contextValue.date}
      {contextValue.actual}
      {contextValue.target}
    </div>
  );
};
