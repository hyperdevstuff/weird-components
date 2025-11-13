import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "weird/components",
  description: "collection of weird & wonderful ui components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-full">
            <AppSidebar />
            <main className="flex-1 overflow-auto">
              <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
              </div>
              <div className="container py-8">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
