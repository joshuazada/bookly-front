"use client"

import { Slot } from "@radix-ui/react-slot"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarItemProps extends React.ComponentProps<typeof Link> {
  icon?: React.ReactNode
  asChild?: boolean
  className?: string
}

const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ icon, children, href, asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : Link
    const pathname = usePathname()
    const isActive = pathname === href

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(
          "flex items-center gap-4 px-8 py-4 text-2xl rounded-xl transition-colors",
          isActive
            ? "bg-[#082145] text-slate-50"
            : "text-slate-50 hover:bg-[#082145]",
          className
        )}
        {...props}
      >
        {icon && <span className="w-5 h-6">{icon}</span>}
        <span>{children}</span>
      </Comp>
    )
  }
)

SidebarItem.displayName = "SidebarItem"

export { SidebarItem }
