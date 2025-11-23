"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const squigglySliderVariants = cva(
  "relative w-full cursor-pointer select-none touch-none",
  {
    variants: {
      variant: {
        default: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
      },
      size: {
        sm: "h-8",
        default: "h-12",
        lg: "h-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface SquigglySliderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof squigglySliderVariants> {
  value?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  squiggleIntensity?: number;
}

const SquigglySlider = React.forwardRef<HTMLDivElement, SquigglySliderProps>(
  (
    {
      className,
      variant,
      size,
      value: controlledValue,
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      squiggleIntensity = 3,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(50);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isDragging = React.useRef(false);

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const motionValue = useMotionValue(value);
    const progress = useTransform(motionValue, [min, max], [0, 100]);

    React.useEffect(() => {
      motionValue.set(value);
    }, [value, motionValue]);

    const updateValue = (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(100, ((clientX - rect.left) / rect.width) * 100),
      );
      const rawValue = (percentage / 100) * (max - min) + min;
      const steppedValue =
        Math.round(rawValue / step) * step;
      const clampedValue = Math.max(min, Math.min(max, steppedValue));

      if (!isControlled) {
        setInternalValue(clampedValue);
      }
      onValueChange?.(clampedValue);
    };

    const handlePointerDown = (e: React.PointerEvent) => {
      isDragging.current = true;
      updateValue(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updateValue(e.clientX);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      isDragging.current = false;
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };

    const squigglePath = React.useMemo(() => {
      const points: string[] = [];
      const segments = 20;
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * 100;
        const y = 50;
        points.push(`${x},${y}`);
      }
      return `M ${points.join(" L ")}`;
    }, []);

    return (
      <div
        ref={ref}
        className={cn(squigglySliderVariants({ variant, size, className }))}
        {...props}
      >
        <div
          ref={containerRef}
          className="relative h-full flex items-center"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* Background track */}
          <div className="absolute w-full h-2 bg-muted rounded-full" />

          {/* Squiggly progress track */}
          <motion.svg
            className="absolute w-full h-full overflow-visible pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d={squigglePath}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="0 100"
              initial={{ strokeDasharray: "0 100" }}
              animate={{
                strokeDasharray: `${progress.get()} 100`,
                d: squigglePath,
              }}
              transition={{
                strokeDasharray: { duration: 0.2 },
                d: { duration: 0.3, repeat: Infinity, repeatType: "reverse" },
              }}
              style={{
                filter: "url(#squiggle)",
              }}
            />
            <defs>
              <filter id="squiggle">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.02"
                  numOctaves="2"
                  result="turbulence"
                >
                  <animate
                    attributeName="baseFrequency"
                    values="0.02;0.04;0.02"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turbulence"
                  scale={squiggleIntensity}
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </motion.svg>

          {/* Thumb */}
          <motion.div
            className="absolute w-5 h-5 bg-current rounded-full shadow-lg border-2 border-background pointer-events-none"
            style={{
              left: `${(value - min) / (max - min) * 100}%`,
              x: "-50%",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
    );
  },
);

SquigglySlider.displayName = "SquigglySlider";

export { SquigglySlider, squigglySliderVariants };
