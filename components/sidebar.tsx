"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const components = [
  {
    title: "Wishlist Button",
    url: "/",
    icon: Plus,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(true);

  return (
    <div
      className={cn(
        "hidden border-r bg-sidebar md:block transition-all duration-300",
        open ? "w-[280px]" : "w-[60px]",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px]">
          {open && (
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-sidebar-foreground">weird/components</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen(!open)}
            className="ml-auto"
          >
            <ChevronRight
              className={cn(
                "transition-transform duration-300",
                open ? "rotate-180" : "",
              )}
            />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {components.map((component) => {
            const Icon = component.icon;
            const isActive = pathname === component.url;
            return (
              <Link key={component.url} href={component.url}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {open && <span className="ml-2">{component.title}</span>}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
