"use client";

import React, { createContext, useState, ReactNode } from "react";
import { bodyweight } from "../../public/data/bodyweight";

type ContextValue = {
  slugName: string;
  date: string;
  actual: number;
  target: number;
};

type ChartContextType = {
  contextValue: ContextValue;
  setContextValue: (value: ContextValue) => void;
};

export const chartContext = createContext<ChartContextType | null>(null);

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
