import { WishlistButton } from "@/components/weird/wishlist";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-12 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">wishlist button</h1>
        <p className="text-muted-foreground">
          animated plus-to-checkmark morphing button
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">preview</h2>
          <div className="flex items-center justify-center border rounded-lg p-12 bg-card">
            <WishlistButton />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">installation</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                install motion
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>npm install motion</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                copy component
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`// components/ui/wishlist-button.tsx`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">usage</h2>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
            <code>{`import { WishlistButton } from "@/components/ui/wishlist-button";

export default function App() {
  return <WishlistButton />;
}`}</code>
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">variants</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <WishlistButton variant="default" />
                <code className="text-sm">variant=&quot;default&quot;</code>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <WishlistButton variant="outline" />
                <code className="text-sm">variant="outline"</code>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <WishlistButton variant="ghost" />
                <code className="text-sm">variant="ghost"</code>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">sizes</h2>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <WishlistButton size="sm" />
              <code className="text-sm">size="sm"</code>
            </div>
            <div className="flex items-center gap-4">
              <WishlistButton size="default" />
              <code className="text-sm">size="default"</code>
            </div>
            <div className="flex items-center gap-4">
              <WishlistButton size="lg" />
              <code className="text-sm">size="lg"</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
