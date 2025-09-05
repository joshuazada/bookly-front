"use client"

import { ChevronRight, House, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
}) {
  return (
    <SidebarGroup className="text-white">
      <SidebarMenu>
          <Collapsible className="group/collapsible">
            <SidebarMenuItem>
              <SidebarMenuButton>
                <a href="/home" className="flex items-center stroke-white hover:stroke-slate-800">
                  <House className="w-4 h-4  mr-2  transition-colors" />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
