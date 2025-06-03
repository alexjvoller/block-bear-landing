"use client";

import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import BenefitBullet from "./Benefits/BenefitBullet";

const containerVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

interface TrackableBulletsProps {
  bullets: {
    title: string;
    icon: ReactElement;
    description: string;
  }[];
}

export const TrackableBullets: React.FC<TrackableBulletsProps> = ({
  bullets,
}) => {
  return (
    <motion.div
      className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className="flex gap-4">
        {bullets.map((item, index) => (
          <BenefitBullet
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </motion.div>
  );
};
