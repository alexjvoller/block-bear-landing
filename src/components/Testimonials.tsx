"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <div className="flex gap-20 flex-wrap mx-auto items-center justify-center">
      <div className="grid gap-14  mx-auto w-96">
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
              &quot;{testimonial.message}&quot;
            </p>
          </div>
        ))}
      </div>
      <div className="">
        <Image
          src="/images/alex-lift.jpeg"
          alt={`Alex lifting`}
          width={316}
          height={300}
          className="border-4 border-purple-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Testimonials;
