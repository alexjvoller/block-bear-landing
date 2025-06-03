"use client";

import { Button } from "@/components/ui/button";
import { siteDetails } from "@/data/siteDetails";

const CTAButtons = () => {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
      <Button
        size="lg"
        variant="cta"
        className="w-48"
        onClick={() => window.open(siteDetails.blockBearHomeUrl, "_blank")}
      >
        Read More
      </Button>
      <Button
        size="lg"
        variant="ctafilled"
        className="w-48"
        onClick={() =>
          window.open(siteDetails.blockBearLaunchPartyUrl, "_blank")
        }
      >
        Join Launch Party List
      </Button>
    </div>
  );
};

export default CTAButtons;
