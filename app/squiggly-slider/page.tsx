"use client";

import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SquigglySlider } from "@/components/weird/squiggly-slider";

export default function SquigglySliderPage() {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(75);
  const [value3, setValue3] = useState(30);

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
            <h1 className="text-3xl font-bold tracking-tight">
              Squiggly Slider
            </h1>
            <p className="text-muted-foreground">
              A playful slider component with animated squiggly effects powered by SVG filters.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="border rounded-lg p-12 bg-card space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Volume</span>
                    <span className="text-sm text-muted-foreground">{value1}%</span>
                  </div>
                  <SquigglySlider value={value1} onValueChange={setValue1} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Brightness</span>
                    <span className="text-sm text-muted-foreground">{value2}%</span>
                  </div>
                  <SquigglySlider
                    value={value2}
                    onValueChange={setValue2}
                    variant="secondary"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Speed</span>
                    <span className="text-sm text-muted-foreground">{value3}%</span>
                  </div>
                  <SquigglySlider
                    value={value3}
                    onValueChange={setValue3}
                    variant="accent"
                  />
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
                    <code>bun add motion class-variance-authority</code>
                  </pre>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Copy the component code
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`// components/weird/squiggly-slider.tsx`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Usage</h2>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`"use client";

import { useState } from "react";
import { SquigglySlider } from "@/components/weird/squiggly-slider";

export default function App() {
  const [value, setValue] = useState(50);

  return (
    <SquigglySlider
      value={value}
      onValueChange={setValue}
    />
  );
}`}</code>
              </pre>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Examples</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Variants</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">default</code>
                      <SquigglySlider variant="default" />
                    </div>
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">secondary</code>
                      <SquigglySlider variant="secondary" />
                    </div>
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">accent</code>
                      <SquigglySlider variant="accent" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Sizes</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">sm</code>
                      <SquigglySlider size="sm" />
                    </div>
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">default</code>
                      <SquigglySlider size="default" />
                    </div>
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">lg</code>
                      <SquigglySlider size="lg" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Custom Squiggle Intensity</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">squiggleIntensity: 1</code>
                      <SquigglySlider squiggleIntensity={1} />
                    </div>
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">squiggleIntensity: 3 (default)</code>
                      <SquigglySlider squiggleIntensity={3} />
                    </div>
                    <div className="space-y-2">
                      <code className="text-sm text-muted-foreground">squiggleIntensity: 6</code>
                      <SquigglySlider squiggleIntensity={6} />
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
                        <td className="p-3 text-muted-foreground">&quot;default&quot; | &quot;secondary&quot; | &quot;accent&quot;</td>
                        <td className="p-3 text-muted-foreground">&quot;default&quot;</td>
                        <td className="p-3 text-muted-foreground">Color variant</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>size</code></td>
                        <td className="p-3 text-muted-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                        <td className="p-3 text-muted-foreground">&quot;default&quot;</td>
                        <td className="p-3 text-muted-foreground">Slider height</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>value</code></td>
                        <td className="p-3 text-muted-foreground">number</td>
                        <td className="p-3 text-muted-foreground">50</td>
                        <td className="p-3 text-muted-foreground">Current value</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>onValueChange</code></td>
                        <td className="p-3 text-muted-foreground">(value: number) =&gt; void</td>
                        <td className="p-3 text-muted-foreground">-</td>
                        <td className="p-3 text-muted-foreground">Callback when value changes</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>min</code></td>
                        <td className="p-3 text-muted-foreground">number</td>
                        <td className="p-3 text-muted-foreground">0</td>
                        <td className="p-3 text-muted-foreground">Minimum value</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>max</code></td>
                        <td className="p-3 text-muted-foreground">number</td>
                        <td className="p-3 text-muted-foreground">100</td>
                        <td className="p-3 text-muted-foreground">Maximum value</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>step</code></td>
                        <td className="p-3 text-muted-foreground">number</td>
                        <td className="p-3 text-muted-foreground">1</td>
                        <td className="p-3 text-muted-foreground">Step increment</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>squiggleIntensity</code></td>
                        <td className="p-3 text-muted-foreground">number</td>
                        <td className="p-3 text-muted-foreground">3</td>
                        <td className="p-3 text-muted-foreground">Intensity of squiggle effect</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
