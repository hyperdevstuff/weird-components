import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight } from "lucide-react";

const components = [
  {
    name: "Wishlist Button",
    description: "An animated plus-to-checkmark morphing button component",
    href: "/wishlist",
  },
  {
    name: "Squiggly Slider",
    description: "A playful progress bar with squiggly animations",
    href: "/squiggly-slider",
  },
  {
    name: "Chart Button",
    description: "Experimental chart that grows from a button (WIP)",
    href: "/chart-button",
  },
  {
    name: "Bottom Bar",
    description: "Fixed bottom components like Ask AI (inspired by z.ai)",
    href: "/bottom-bar",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
        <SidebarTrigger />
        <div className="flex-1" />
        <ThemeToggle />
      </header>

      {/* content */}
      <div className="flex-1 overflow-auto">
        <div className="container max-w-5xl mx-auto py-12 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Weird Components
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of experimental and playful UI components. Copy,
              paste, and customize to your needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {components.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-foreground/20"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-foreground transition-colors">
                    {component.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {component.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                  View component
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-lg border bg-muted/50 p-6">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-sm text-muted-foreground">
              These components are built with React, TypeScript, Tailwind CSS,
              and Motion (Framer Motion). They&apos;re designed to be copied and
              pasted into your projects - not installed as dependencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
