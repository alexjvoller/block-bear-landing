"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonials: React.FC = () => {
  return (
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
          className="hidden sm:block absolute -bottom-24 -left-80"
        />
        <Image
          src="/images/hit-flipped.svg"
          alt={`Alex lifting`}
          width={707}
          height={244}
          className="sm:hidden absolute -bottom-24 left-0"
        />
      </div>
    </div>
  );
};

export default Testimonials;
