"use client"

import * as React from "react"
import Link from "next/link"
import { House, Briefcase, ShieldCheck, Phone } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


export function MobileNavigation() {
  return (
    <NavigationMenu viewport={false} className="bg-[#413F3F] py-3 rounded-[1rem] ">
      <NavigationMenuList className="uppercase flex flex-col gap-4 px-3 tracking-widest">
        <NavigationMenuItem >
          <Link href="#"><House/></Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#projects"><Briefcase/></Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
           <Link href="#certificates"><ShieldCheck /></Link>
        </NavigationMenuItem>
   {/*      <NavigationMenuItem>
           <Link href="/resource">Resources</Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
           <Link href="#contact"><Phone/></Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


