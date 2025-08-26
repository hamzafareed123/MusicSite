"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row h-[30rem] justify-center lg:space-x-16 overflow-y-auto rounded-md p-6 lg:p-10"
      ref={ref}
    >
      {/* Text Section */}
      <div className="relative flex items-start w-full px-2 sm:px-4">
        <div className="w-full">
          {content.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <div key={item.title + index} className="my-16 sm:my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isActive ? 0.6 : 1,
                  }}
                  className={cn(
                    "text-xl sm:text-2xl md:text-3xl font-bold transition-colors",
                    isActive ? "text-slate-400" : "text-white"
                  )}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isActive ? 0.6 : 1,
                  }}
                  className={cn(
                    "mt-6 sm:mt-8 text-sm sm:text-base md:text-lg max-w-full lg:max-w-xl transition-colors",
                    isActive ? "text-slate-400" : "text-white"
                  )}
                >
                  {item.description}
                </motion.p>
              </div>
            );
          })}
          <div className="h-20" />
        </div>
      </div>

      {/* Sticky Image Section (hidden on small/medium) */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden lg:block h-60 w-80 overflow-hidden rounded-md bg-white",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
