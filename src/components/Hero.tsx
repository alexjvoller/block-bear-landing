import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 h-screen"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0   h-2/3 bg-gradient-to-b from-transparent to-[#9062d4]"></div>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          Training Blocks that{" "}
          <span className="font-['Lazer84'] text-pumpkin-300">Build</span>
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>

        <Image
          src={heroDetails.centerImageSrc}
          width={532}
          height={200}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
          style={{
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))",
            borderRadius: "4px",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
