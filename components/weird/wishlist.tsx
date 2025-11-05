"use client";

import { motion, useAnimationControls } from "motion/react";
import { useRef, useState } from "react";

export function MorphButton() {
  const controls = useAnimationControls();
  const [checked, setChecked] = useState(false);
  const running = useRef(false);

  const SPEED = 1.0;

  const play = async () => {
    if (running.current) return;
    running.current = true;

    if (!checked) {
      await controls.start("collapse");
      await controls.start("stem");
      await controls.start("tail");
    } else {
      await controls.start("untail");
      await controls.start("unstem");
      await controls.start("uncollapse");
    }

    setChecked(!checked);
    running.current = false;
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        onClick={play}
        className="cursor-pointer flex size-28 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm transition-transform hover:scale-105 active:scale-95"
      >
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 60 60"
          initial="plus"
          animate={controls}
        >
          <motion.line
            x1="10"
            y1="30"
            x2="50"
            y2="30"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            variants={{
              plus: { opacity: 1 },
              collapse: {
                x1: 30,
                x2: 30,
                opacity: 0,
                transition: { duration: 0.28 * SPEED },
              },
              uncollapse: {
                x1: 10,
                x2: 50,
                opacity: 1,
                transition: { duration: 0.28 * SPEED },
              },
            }}
          />

          <motion.line
            x1="30"
            y1="10"
            x2="30"
            y2="50"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            variants={{
              plus: { opacity: 1 },
              collapse: { opacity: 1 },
              stem: {
                x1: 28,
                y1: 42,
                x2: 45,
                y2: 25,
                transition: { duration: 0.32 * SPEED },
              },
              unstem: {
                x1: 30,
                y1: 10,
                x2: 30,
                y2: 50,
                transition: { duration: 0.32 * SPEED },
              },
            }}
          />

          <motion.line
            x1="28"
            y1="42"
            x2="18"
            y2="32"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ pathLength: 0 }}
            variants={{
              plus: { opacity: 0, pathLength: 0 },
              collapse: { opacity: 0, pathLength: 0 },
              stem: { opacity: 0, pathLength: 0 },
              tail: {
                opacity: 1,
                pathLength: 1,
                transition: { pathLength: { duration: 0.42 * SPEED } },
              },
              untail: {
                opacity: 0,
                pathLength: 0,
                transition: { pathLength: { duration: 0.3 * SPEED } },
              },
            }}
          />
        </motion.svg>
      </button>
    </div>
  );
}
