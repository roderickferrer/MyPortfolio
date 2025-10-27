"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


export function BackButton() {
  return (
    <NavigationMenu viewport={false} className="bg-[#413F3F] p-5 rounded-[1rem] ">
      <NavigationMenuList className="uppercase flex gap-7 px-2 tracking-widest">
        <NavigationMenuItem >
          <Link href="/">Back</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


