"use client";

import React, { createContext, useContext, useState } from "react";

interface AnimationContextType {
  isChartVisible: boolean;
  setChartVisible: (visible: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isChartVisible, setChartVisible] = useState(true); // Start as true

  return (
    <AnimationContext.Provider value={{ isChartVisible, setChartVisible }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error(
      "useAnimationContext must be used within an AnimationProvider"
    );
  }
  return context;
};
