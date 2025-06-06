import React from "react";
import { SectionHeader } from "./SectionHeader";

interface Props {
  id: string;
  pillNumber: number;
  pillText: string;
  header: React.ReactNode;
  subheading?: string;
  className?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  pillNumber,
  pillText,
  header,
  subheading,
  className = "",
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <section
      id={id}
      className={`py-10 lg:py-20 flex flex-col gap-4 ${className}`}
    >
      <SectionHeader
        pillNumber={pillNumber}
        pillText={pillText}
        header={header}
        subheading={subheading}
      />
      {children}
    </section>
  );
};

export default Section;
