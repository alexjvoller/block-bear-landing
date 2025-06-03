import React from "react";
import Image from "next/image";
import { TrackableBullets } from "./TrackableBullets";

import { SectionHeader } from "./SectionHeader";
import { bullets } from "@/data/trackables";

const Trackables: React.FC = () => {
  return (
    <section id="trackables" className="py-24 border-t-2 border-black">
      <div className="container flex flex-col items-center justify-center mx-auto px-8 md:px-12 lg:px-16">
        <SectionHeader
          pillNumber={2}
          pillText="Trackables"
          header={
            <>
              A platform for all your sports, hobbies,
              <span className="font-['Lazer84']">QUESTS</span>
            </>
          }
          subheading="Build your blocks from over 300 measured and calculated trackables. With the scale and specificity we offer, Block Bear is able to support all of your tracking needs. No more multiple apps, no more splinted data."
        />
        <TrackableBullets bullets={bullets} />
        <Image
          src="/images/trackables.png"
          width={532}
          height={200}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mx-auto z-10"
          style={{
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))",
            borderRadius: "4px",
          }}
        />
      </div>
    </section>
  );
};

export default Trackables;
