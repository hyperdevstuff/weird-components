"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowUp } from "lucide-react";

const bottomBarVariants = cva(
  "fixed bottom-0 left-0 right-0 z-50 border-t bg-background/50 backdrop-blur-xl",
  {
    variants: {
      variant: {
        default: "shadow-lg",
        floating: "mx-4 mb-4 rounded-xl border shadow-2xl left-4 right-4",
        minimal: "border-t",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BottomBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bottomBarVariants> {
  type?: "ask-ai" | "custom";
  placeholder?: string;
  onSubmit?: (value: string) => void;
  loading?: boolean;
  disabled?: boolean;
}

const BottomBar = React.forwardRef<HTMLDivElement, BottomBarProps>(
  (
    {
      className,
      variant,
      type = "ask-ai",
      placeholder = "Ask anything...",
      onSubmit,
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState("");
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim() && !loading && !disabled) {
        onSubmit?.(value.trim());
        setValue("");
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
      }
    };

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
        inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
      }
    }, [value]);

    if (type === "custom") {
      return (
        <motion.div
          ref={ref}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(bottomBarVariants({ variant, className }))}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(bottomBarVariants({ variant, className }))}
        {...props}
      >
        <div className="container max-w-4xl mx-auto p-2">
          <form onSubmit={handleSubmit} className="relative">
            <div
              className={cn(
                "relative flex items-center justify-center gap-2 rounded-xl border bg-background transition-all h-12",
                isFocused && "ring-2 ring-ring ring-offset-2",
                disabled && "opacity-50 cursor-not-allowed",
              )}
            >
              {type === "ask-ai" && (
                <div className="absolute left-4 top-4">
                  <Sparkles className="h-5 w-5 text-muted-foreground" />
                </div>
              )}

              <textarea
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                disabled={disabled || loading}
                rows={1}
                className={cn(
                  "flex-1 resize-none bg-transparent px-12 py-2.5 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
                  type === "ask-ai" && "pl-12",
                )}
              />

              <AnimatePresence>
                {value.trim() && (
                  <motion.button
                    type="submit"
                    disabled={loading || disabled}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "mx-1 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50",
                      loading && "cursor-wait",
                    )}
                  >
                    {loading ? (
                      <motion.div
                        className="h-3.5 w-3.5 rounded-full border-2 border-primary-foreground border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ) : (
                      <ArrowUp className="h-3.5 w-3.5" />
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {type === "ask-ai" && (
              <p className="mt-1 text-xs text-center text-muted-foreground">
                Ctrl+K to focus • Enter to send, Shift+Enter for new line
              </p>
            )}
          </form>
        </div>
      </motion.div>
    );
  },
);

BottomBar.displayName = "BottomBar";

// Additional component variants
const BottomSubmitButton = React.forwardRef<
  HTMLDivElement,
  Omit<BottomBarProps, "type"> & {
    buttonText?: string;
    onButtonClick?: () => void;
  }
>(({ buttonText = "Submit", onButtonClick, variant, className, ...props }, ref) => {
  return (
    <BottomBar ref={ref} type="custom" variant={variant} className={className} {...props}>
      <div className="container max-w-4xl mx-auto p-2">
        <motion.button
          onClick={onButtonClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-lg bg-primary py-3 px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          {buttonText}
        </motion.button>
      </div>
    </BottomBar>
  );
});

BottomSubmitButton.displayName = "BottomSubmitButton";

const BottomActions = React.forwardRef<
  HTMLDivElement,
  Omit<BottomBarProps, "type"> & {
    actions?: Array<{
      label: string;
      onClick: () => void;
      variant?: "default" | "secondary" | "outline";
      icon?: React.ReactNode;
    }>;
  }
>(({ actions = [], variant, className, ...props }, ref) => {
  return (
    <BottomBar ref={ref} type="custom" variant={variant} className={className} {...props}>
      <div className="container max-w-4xl mx-auto p-2">
        <div className="flex justify-center gap-2 pb-1 px-2 flex-wrap">
          {actions.map((action, index) => (
            <motion.button
              key={index}
              onClick={action.onClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
                action.variant === "outline"
                  ? "border border-border bg-background hover:bg-accent"
                  : action.variant === "secondary"
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    : "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              {action.icon}
              {action.label}
            </motion.button>
          ))}
        </div>
      </div>
    </BottomBar>
  );
});

BottomActions.displayName = "BottomActions";

export { BottomBar, BottomActions, bottomBarVariants };
