import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ChartButton } from "@/components/weird/chart-button";

const salesData = [
  { label: "Jan", value: 45, color: "hsl(var(--primary))" },
  { label: "Feb", value: 52, color: "hsl(var(--primary))" },
  { label: "Mar", value: 48, color: "hsl(var(--primary))" },
  { label: "Apr", value: 61, color: "hsl(var(--primary))" },
  { label: "May", value: 75, color: "hsl(var(--primary))" },
  { label: "Jun", value: 82, color: "hsl(var(--primary))" },
];

const performanceData = [
  { label: "Week 1", value: 30 },
  { label: "Week 2", value: 45 },
  { label: "Week 3", value: 38 },
  { label: "Week 4", value: 55 },
  { label: "Week 5", value: 70 },
];

export default function ChartButtonPage() {
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
        <div className="container max-w-4xl mx-auto py-8 space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Chart Button
              </h1>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                Experimental
              </span>
            </div>
            <p className="text-muted-foreground">
              An experimental button component that expands into an animated chart when clicked. Perfect for dashboard quick views.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="border rounded-lg p-12 bg-card">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <ChartButton>View Stats</ChartButton>
                  <ChartButton variant="outline">Show Chart</ChartButton>
                  <ChartButton variant="ghost">Analytics</ChartButton>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Installation</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Install dependencies
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>bun add motion class-variance-authority lucide-react</code>
                  </pre>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Copy the component code
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`// components/weird/chart-button.tsx`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Usage</h2>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`import { ChartButton } from "@/components/weird/chart-button";

const data = [
  { label: "Mon", value: 20 },
  { label: "Tue", value: 45 },
  { label: "Wed", value: 30 },
  { label: "Thu", value: 60 },
  { label: "Fri", value: 80 },
];

export default function App() {
  return <ChartButton data={data}>View Stats</ChartButton>;
}`}</code>
              </pre>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Examples</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Chart Types</h3>
                  <div className="border rounded-lg p-8 bg-card">
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton chartType="bar">Bar Chart</ChartButton>
                        <code className="text-xs text-muted-foreground">bar</code>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton chartType="line">Line Chart</ChartButton>
                        <code className="text-xs text-muted-foreground">line</code>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton chartType="area">Area Chart</ChartButton>
                        <code className="text-xs text-muted-foreground">area</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Custom Data</h3>
                  <div className="border rounded-lg p-8 bg-card">
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                      <ChartButton data={salesData} chartType="bar">
                        Sales Report
                      </ChartButton>
                      <ChartButton
                        data={performanceData}
                        chartType="line"
                        variant="outline"
                      >
                        Performance
                      </ChartButton>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Variants</h3>
                  <div className="border rounded-lg p-8 bg-card">
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton variant="default">Default</ChartButton>
                        <code className="text-xs text-muted-foreground">default</code>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton variant="outline">Outline</ChartButton>
                        <code className="text-xs text-muted-foreground">outline</code>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton variant="ghost">Ghost</ChartButton>
                        <code className="text-xs text-muted-foreground">ghost</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Sizes</h3>
                  <div className="border rounded-lg p-8 bg-card">
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton size="sm">Small</ChartButton>
                        <code className="text-xs text-muted-foreground">sm</code>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton size="default">Default</ChartButton>
                        <code className="text-xs text-muted-foreground">default</code>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <ChartButton size="lg">Large</ChartButton>
                        <code className="text-xs text-muted-foreground">lg</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">API</h2>
              <div className="border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 font-medium">Prop</th>
                        <th className="text-left p-3 font-medium">Type</th>
                        <th className="text-left p-3 font-medium">Default</th>
                        <th className="text-left p-3 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3"><code>variant</code></td>
                        <td className="p-3 text-muted-foreground">&quot;default&quot; | &quot;outline&quot; | &quot;ghost&quot;</td>
                        <td className="p-3 text-muted-foreground">&quot;default&quot;</td>
                        <td className="p-3 text-muted-foreground">Button style variant</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>size</code></td>
                        <td className="p-3 text-muted-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                        <td className="p-3 text-muted-foreground">&quot;default&quot;</td>
                        <td className="p-3 text-muted-foreground">Button size</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>chartType</code></td>
                        <td className="p-3 text-muted-foreground">&quot;bar&quot; | &quot;line&quot; | &quot;area&quot;</td>
                        <td className="p-3 text-muted-foreground">&quot;bar&quot;</td>
                        <td className="p-3 text-muted-foreground">Type of chart to display</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>data</code></td>
                        <td className="p-3 text-muted-foreground">ChartData[]</td>
                        <td className="p-3 text-muted-foreground">Default week data</td>
                        <td className="p-3 text-muted-foreground">Chart data array</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-amber-500/10 border-amber-500/20 p-4">
              <h3 className="font-medium text-amber-600 dark:text-amber-400 mb-2">
                Experimental Component
              </h3>
              <p className="text-sm text-muted-foreground">
                This component is experimental and may receive breaking changes in future updates.
                The chart popup positioning might need adjustments based on your layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
