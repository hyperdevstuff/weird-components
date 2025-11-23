"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plus, Activity, TrendingUp, MessageSquare } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const components = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Wishlist Button",
    url: "/wishlist",
    icon: Plus,
  },
  {
    title: "Squiggly Slider",
    url: "/squiggly-slider",
    icon: Activity,
  },
  {
    title: "Chart Button",
    url: "/chart-button",
    icon: TrendingUp,
  },
  {
    title: "Bottom Bar",
    url: "/bottom-bar",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <span className="font-semibold">weird/components</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {components.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>
                        <Icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
