"use client";

import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  BottomBar,
  BottomSubmitButton,
  BottomActions,
} from "@/components/weird/bottom-bar";
import { Check, X, RefreshCw } from "lucide-react";

export default function BottomBarPage() {
  const [activeDemo, setActiveDemo] = useState<
    "ask-ai" | "submit" | "actions" | null
  >(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAskAI = (value: string) => {
    setLoading(true);
    setMessages((prev) => [...prev, `You: ${value}`]);

    setTimeout(() => {
      setMessages((prev) => [...prev, `AI: I received your message: "${value}"`]);
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = (value: string) => {
    setMessages((prev) => [...prev, `Submitted: ${value}`]);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
        <SidebarTrigger />
        <div className="flex-1" />
        <ThemeToggle />
      </header>

      {/* content */}
      <div className="flex-1 overflow-auto pb-32">
        <div className="container max-w-4xl mx-auto py-8 space-y-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Bottom Bar</h1>
            <p className="text-muted-foreground">
              Fixed bottom components inspired by z.ai - perfect for chat interfaces, forms, and action bars.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Interactive Demos</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Click on a demo below to see the bottom bar in action. Only one can be active at a time.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <button
                  onClick={() =>
                    setActiveDemo(activeDemo === "ask-ai" ? null : "ask-ai")
                  }
                  className={cn(
                    "border rounded-lg p-6 text-left transition-all hover:shadow-lg hover:border-primary/50",
                    activeDemo === "ask-ai" &&
                      "border-primary bg-primary/5 shadow-lg",
                  )}
                >
                  <h3 className="font-semibold mb-2">Ask AI Bar</h3>
                  <p className="text-sm text-muted-foreground">
                    Chat-style input with AI icon
                  </p>
                  {activeDemo === "ask-ai" && (
                    <p className="text-xs text-primary mt-2 font-medium">
                      Active - Scroll down
                    </p>
                  )}
                </button>

                <button
                  onClick={() =>
                    setActiveDemo(activeDemo === "submit" ? null : "submit")
                  }
                  className={cn(
                    "border rounded-lg p-6 text-left transition-all hover:shadow-lg hover:border-primary/50",
                    activeDemo === "submit" &&
                      "border-primary bg-primary/5 shadow-lg",
                  )}
                >
                  <h3 className="font-semibold mb-2">Submit Bar</h3>
                  <p className="text-sm text-muted-foreground">
                    Simple input with send button
                  </p>
                  {activeDemo === "submit" && (
                    <p className="text-xs text-primary mt-2 font-medium">
                      Active - Scroll down
                    </p>
                  )}
                </button>

                <button
                  onClick={() =>
                    setActiveDemo(activeDemo === "actions" ? null : "actions")
                  }
                  className={cn(
                    "border rounded-lg p-6 text-left transition-all hover:shadow-lg hover:border-primary/50",
                    activeDemo === "actions" &&
                      "border-primary bg-primary/5 shadow-lg",
                  )}
                >
                  <h3 className="font-semibold mb-2">Action Bar</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple action buttons
                  </p>
                  {activeDemo === "actions" && (
                    <p className="text-xs text-primary mt-2 font-medium">
                      Active - Scroll down
                    </p>
                  )}
                </button>
              </div>

              {messages.length > 0 && (
                <div className="mt-6 border rounded-lg p-4 bg-muted/50 space-y-2 max-h-48 overflow-auto">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium">Activity Log</h4>
                    <button
                      onClick={() => setMessages([])}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      Clear
                    </button>
                  </div>
                  {messages.map((msg, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {msg}
                    </p>
                  ))}
                </div>
              )}
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
                    <code>{`// components/weird/bottom-bar.tsx`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Usage</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Ask AI Style</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`import { BottomBar } from "@/components/weird/bottom-bar";

export default function App() {
  const handleSubmit = (value: string) => {
    console.log("AI Query:", value);
  };

  return (
    <BottomBar
      type="ask-ai"
      placeholder="Ask anything..."
      onSubmit={handleSubmit}
    />
  );
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Submit Button Style</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`import { BottomBar } from "@/components/weird/bottom-bar";

export default function App() {
  return (
    <BottomBar
      type="submit"
      placeholder="Type your message..."
      onSubmit={(value) => console.log(value)}
    />
  );
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Action Buttons</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`import { BottomActions } from "@/components/weird/bottom-bar";
import { Check, X } from "lucide-react";

export default function App() {
  return (
    <BottomActions
      actions={[
        { label: "Approve", onClick: () => {}, icon: <Check /> },
        { label: "Reject", onClick: () => {}, variant: "outline", icon: <X /> },
      ]}
    />
  );
}`}</code>
                  </pre>
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
                        <td className="p-3"><code>type</code></td>
                        <td className="p-3 text-muted-foreground">
                          &quot;ask-ai&quot; | &quot;custom&quot;
                        </td>
                        <td className="p-3 text-muted-foreground">&quot;ask-ai&quot;</td>
                        <td className="p-3 text-muted-foreground">Bar type/style</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>variant</code></td>
                        <td className="p-3 text-muted-foreground">
                          &quot;default&quot; | &quot;floating&quot; | &quot;minimal&quot;
                        </td>
                        <td className="p-3 text-muted-foreground">&quot;default&quot;</td>
                        <td className="p-3 text-muted-foreground">Visual style</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>placeholder</code></td>
                        <td className="p-3 text-muted-foreground">string</td>
                        <td className="p-3 text-muted-foreground">&quot;Ask anything...&quot;</td>
                        <td className="p-3 text-muted-foreground">Input placeholder</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>onSubmit</code></td>
                        <td className="p-3 text-muted-foreground">(value: string) =&gt; void</td>
                        <td className="p-3 text-muted-foreground">-</td>
                        <td className="p-3 text-muted-foreground">Submit callback</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>loading</code></td>
                        <td className="p-3 text-muted-foreground">boolean</td>
                        <td className="p-3 text-muted-foreground">false</td>
                        <td className="p-3 text-muted-foreground">Loading state</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>disabled</code></td>
                        <td className="p-3 text-muted-foreground">boolean</td>
                        <td className="p-3 text-muted-foreground">false</td>
                        <td className="p-3 text-muted-foreground">Disabled state</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Bottom Bar Demo */}
      {activeDemo === "ask-ai" && (
        <BottomBar
          type="ask-ai"
          placeholder="Ask AI anything..."
          onSubmit={handleAskAI}
          loading={loading}
        />
      )}

      {activeDemo === "submit" && (
        <BottomBar
          type="submit"
          placeholder="Type your message..."
          onSubmit={handleSubmit}
        />
      )}

      {activeDemo === "actions" && (
        <BottomActions
          variant="floating"
          actions={[
            {
              label: "Approve",
              onClick: () => setMessages((prev) => [...prev, "Approved!"]),
              icon: <Check className="h-4 w-4" />,
            },
            {
              label: "Reject",
              onClick: () => setMessages((prev) => [...prev, "Rejected!"]),
              variant: "outline",
              icon: <X className="h-4 w-4" />,
            },
            {
              label: "Retry",
              onClick: () => setMessages((prev) => [...prev, "Retrying..."]),
              variant: "secondary",
              icon: <RefreshCw className="h-4 w-4" />,
            },
          ]}
        />
      )}
    </div>
  );
}

// Helper function for className merging
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
