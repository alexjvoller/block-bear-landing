"use client";

import { Button } from "@/components/ui/button";

const HeroButtons = () => {
  return (
    <div className="max-w-sm flex gap-2 z-100">
      <Button
        variant="cta"
        className="w-full"
        onClick={() => window.open("https://blockbear.mintlify.app", "_blank")}
      >
        Read More
      </Button>
      <Button
        variant="ctafilled"
        className="w-full"
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSc6rsouNnUsDthJATvblnFAtIaJfYlgU3TQQ0Cdd554du2VEQ/viewform?usp=header",
            "_blank"
          )
        }
      >
        Join Launch Party List
      </Button>
    </div>
  );
};

export default HeroButtons;
