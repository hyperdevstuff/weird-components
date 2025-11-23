"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

const chartButtonVariants = cva(
  "relative rounded-lg border font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border-border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface ChartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chartButtonVariants> {
  data?: ChartData[];
  chartType?: "bar" | "line" | "area";
}

const ChartButton = React.forwardRef<HTMLButtonElement, ChartButtonProps>(
  (
    {
      className,
      variant,
      size,
      children = "View Stats",
      data = [
        { label: "Mon", value: 20, color: "hsl(var(--primary))" },
        { label: "Tue", value: 45, color: "hsl(var(--primary))" },
        { label: "Wed", value: 30, color: "hsl(var(--primary))" },
        { label: "Thu", value: 60, color: "hsl(var(--primary))" },
        { label: "Fri", value: 80, color: "hsl(var(--primary))" },
        { label: "Sat", value: 55, color: "hsl(var(--primary))" },
        { label: "Sun", value: 70, color: "hsl(var(--primary))" },
      ],
      chartType = "bar",
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const maxValue = Math.max(...data.map((d) => d.value));

    return (
      <div className="relative inline-block">
        <motion.button
          ref={ref}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(chartButtonVariants({ variant, size, className }))}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          <span className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            {children}
          </span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 mt-2 origin-top"
              style={{ transformOrigin: "top center" }}
            >
              <div className="bg-card border rounded-lg shadow-2xl p-6 min-w-[320px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-sm">Statistics</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className="text-muted-foreground hover:text-foreground text-xs"
                  >
                    Close
                  </button>
                </div>

                {/* Chart */}
                <div className="space-y-3">
                  {chartType === "bar" && (
                    <div className="flex items-end justify-between gap-2 h-32">
                      {data.map((item, index) => {
                        const height = (item.value / maxValue) * 100;
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center flex-1 gap-2"
                          >
                            <motion.div
                              className="w-full rounded-t-md relative group"
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                              }}
                              style={{
                                backgroundColor:
                                  item.color || "hsl(var(--primary))",
                              }}
                            >
                              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.value}
                              </div>
                            </motion.div>
                            <span className="text-xs text-muted-foreground">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {chartType === "line" && (
                    <div className="h-32 relative">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <motion.polyline
                          points={data
                            .map((item, i) => {
                              const x = (i / (data.length - 1)) * 100;
                              const y = 100 - (item.value / maxValue) * 90;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                        {data.map((item, i) => {
                          const x = (i / (data.length - 1)) * 100;
                          const y = 100 - (item.value / maxValue) * 90;
                          return (
                            <motion.circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="2"
                              fill="hsl(var(--primary))"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                delay: 0.5 + i * 0.1,
                                duration: 0.3,
                              }}
                            />
                          );
                        })}
                      </svg>
                      <div className="flex justify-between mt-2">
                        {data.map((item, i) => (
                          <span key={i} className="text-xs text-muted-foreground">
                            {item.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {chartType === "area" && (
                    <div className="h-32 relative">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="areaGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity="0.4"
                            />
                            <stop
                              offset="100%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d={`M 0,100 L ${data
                            .map((item, i) => {
                              const x = (i / (data.length - 1)) * 100;
                              const y = 100 - (item.value / maxValue) * 90;
                              return `${x},${y}`;
                            })
                            .join(" L ")} L 100,100 Z`}
                          fill="url(#areaGradient)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.polyline
                          points={data
                            .map((item, i) => {
                              const x = (i / (data.length - 1)) * 100;
                              const y = 100 - (item.value / maxValue) * 90;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      </svg>
                      <div className="flex justify-between mt-2">
                        {data.map((item, i) => (
                          <span key={i} className="text-xs text-muted-foreground">
                            {item.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Summary */}
                <div className="mt-4 pt-4 border-t text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average</span>
                    <span className="font-medium">
                      {Math.round(
                        data.reduce((sum, d) => sum + d.value, 0) / data.length,
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Peak</span>
                    <span className="font-medium">{maxValue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

ChartButton.displayName = "ChartButton";

export { ChartButton, chartButtonVariants };
export type { ChartData };
