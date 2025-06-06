"use client";

import { Button } from "@/components/ui/button";
import { siteDetails } from "@/data/siteDetails";
const HeroButtons = () => {
  return (
    <div className="max-w-sm flex items-end gap-2 z-100">
      <Button
        variant="cta"
        className="w-full"
        onClick={() => window.open(siteDetails.blockBearHomeUrl, "_blank")}
      >
        Read More
      </Button>
      <div className="flex flex-col text-xs gap-2">
        <p className="font-medium">Claim Launch Party Badge</p>
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
    </div>
  );
};

export default HeroButtons;
