import { ITestimonial } from "@/types";

export const testimonials: ITestimonial[] = [
  {
    name: "Alex Voller",
    role: "Developer, Block Bear",
    message: (
      <>
        <p className="mb-4 text-left">
          &ldquo;I trained for 10 years, 5-6 times per week with no coach,
          tracking or goals; just max effort everytime. After being in a plateu
          for years, I sought out a coach who introduced me to the concept of
          training blocks which fundaementally changed how I structure my
          training and nutrition.
        </p>
        <p className="mt-4 text-left">
          I&apos;m more focused now, I have designated rest periods, and my
          results are better. Block Bear is the mangament and tracking platform
          above it all so I can focus on my training&rdquo;
        </p>
      </>
    ),
    avatar: "/images/alex-avatar.png",
  },
];
