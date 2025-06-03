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
      className={`px-10 w-full max-w-7xl  border-t-2 border-black ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
