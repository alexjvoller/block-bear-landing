import React from "react";

interface Props {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      className={`px-10 w-full mx-auto max-w-7xl   ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
