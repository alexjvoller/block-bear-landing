"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";
import { bodyweight } from "../../public/data/bodyweight";
import { SlugNamesType } from "../../public/data/bodyweight";

type ContextValue = {
  slugName: SlugNamesType;
  date: string;
  actual: number;
  target: number;
};

type ChartContextType = {
  contextValue: ContextValue;
  setContextValue: (value: ContextValue) => void;
};

export const chartContext = createContext<ChartContextType | null>(null);

export const useChartContext = () => {
  const context = useContext(chartContext);
  if (!context) {
    throw new Error("useChartContext must be used within a ChartProvider");
  }
  return context;
};

export const ChartProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [contextValue, setContextValue] = useState<ContextValue>({
    slugName: "q1-cut",
    date: bodyweight[0].date,
    actual: bodyweight[0].actual!,
    target: bodyweight[0]["q1-cut"]!,
  });

  return (
    <chartContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </chartContext.Provider>
  );
};
