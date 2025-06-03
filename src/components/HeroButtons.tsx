"use client";

import { Button } from "@/components/ui/button";
import { siteDetails } from "@/data/siteDetails";
const HeroButtons = () => {
  return (
    <div className="max-w-sm flex gap-2 z-100">
      <Button
        variant="cta"
        className="w-full"
        onClick={() => window.open(siteDetails.blockBearHomeUrl, "_blank")}
      >
        Read More
      </Button>
      <Button
        variant="ctafilled"
        className="w-full"
        onClick={() =>
          window.open(siteDetails.blockBearLaunchPartyUrl, "_blank")
        }
      >
        Join Launch List
      </Button>
    </div>
  );
};

export default HeroButtons;
