"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "./SectionHeader";

const Testimonials: React.FC = () => {
  return (
    <section
      id="stories"
      className="relative flex border-t-2 border-black flex-col items-center justify-center py-10 md:py-5 px-5 mb-28 sm:mb-32"
    >
      <div className="flex items-center justify-center">
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>

        <div className="absolute left-0 right-0 bottom-0"></div>

        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader
            pillNumber={2}
            pillText="Stories"
            header={
              <>
                Here Our User <span className="font-['Lazer84'] ">STORIES</span>
              </>
            }
            subheading="See what our users have to say about their experience with Block Bear."
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mx-auto items-center justify-center w-full">
            <div className="grid gap-14 mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="">
                  <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      width={50}
                      height={50}
                      className="rounded-full shadow-md"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-secondary">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-foreground-accent">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground-accent text-center lg:text-left">
                    {testimonial.message}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center relative mb-12 sm:mb-0">
              <Image
                src="/images/alex-lift.jpeg"
                alt={`Alex lifting`}
                width={316}
                height={300}
                className="border-4 border-purple-300 rounded-lg"
              />
              <Image
                src="/images/hit.svg"
                alt={`Alex lifting`}
                width={707}
                height={244}
                className="hidden lg:block absolute -bottom-24 -left-80"
              />
              <Image
                src="/images/hit-flipped.svg"
                alt={`Alex lifting`}
                width={707}
                height={244}
                className="lg:hidden absolute -bottom-24 left-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
