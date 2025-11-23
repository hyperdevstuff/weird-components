import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { WishlistButton } from "@/components/weird/wishlist";

export default function WishlistPage() {
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
              Wishlist Button
            </h1>
            <p className="text-muted-foreground">
              An animated plus-to-checkmark morphing button component with smooth transitions.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className="flex items-center justify-center border rounded-lg p-12 bg-card">
                <WishlistButton />
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
                    <code>{`// components/weird/wishlist.tsx`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Usage</h2>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`import { WishlistButton } from "@/components/weird/wishlist";

export default function App() {
  return <WishlistButton />;
}`}</code>
              </pre>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Examples</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Variants</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-4">
                        <WishlistButton variant="default" />
                        <code className="text-sm text-muted-foreground">default</code>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-4">
                        <WishlistButton variant="outline" />
                        <code className="text-sm text-muted-foreground">outline</code>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-4">
                        <WishlistButton variant="ghost" />
                        <code className="text-sm text-muted-foreground">ghost</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Sizes</h3>
                  <div className="flex items-center gap-8 flex-wrap">
                    <div className="flex items-center gap-4">
                      <WishlistButton size="sm" />
                      <code className="text-sm text-muted-foreground">sm</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <WishlistButton size="default" />
                      <code className="text-sm text-muted-foreground">default</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <WishlistButton size="lg" />
                      <code className="text-sm text-muted-foreground">lg</code>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Custom Speed</h3>
                  <div className="flex items-center gap-8 flex-wrap">
                    <div className="flex items-center gap-4">
                      <WishlistButton speed={0.5} />
                      <code className="text-sm text-muted-foreground">speed: 0.5</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <WishlistButton speed={1.0} />
                      <code className="text-sm text-muted-foreground">speed: 1.0</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <WishlistButton speed={2.0} />
                      <code className="text-sm text-muted-foreground">speed: 2.0</code>
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
                        <td className="p-3"><code>speed</code></td>
                        <td className="p-3 text-muted-foreground">number</td>
                        <td className="p-3 text-muted-foreground">1.0</td>
                        <td className="p-3 text-muted-foreground">Animation speed multiplier</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>checked</code></td>
                        <td className="p-3 text-muted-foreground">boolean</td>
                        <td className="p-3 text-muted-foreground">-</td>
                        <td className="p-3 text-muted-foreground">Controlled checked state</td>
                      </tr>
                      <tr>
                        <td className="p-3"><code>onCheckedChange</code></td>
                        <td className="p-3 text-muted-foreground">(checked: boolean) =&gt; void</td>
                        <td className="p-3 text-muted-foreground">-</td>
                        <td className="p-3 text-muted-foreground">Callback when state changes</td>
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
