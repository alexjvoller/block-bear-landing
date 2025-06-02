import React from "react";
import { Pill } from "./pill";

interface SectionHeaderProps {
  pillNumber: number;
  pillText: string;
  header: React.ReactNode;
  subheading?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  pillNumber,
  pillText,
  header,
  subheading,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex flex-col justify-center items-center gap-2">
        <Pill number={pillNumber} text={pillText} />
        <h2 className="text-3xl lg:text-5xl lg:leading-tight font-bold">
          {header}
        </h2>
      </div>
      {subheading && (
        <p className="mt-4 text-base text-foreground max-w-lg mx-auto">
          {subheading}
        </p>
      )}
    </div>
  );
};
