"use client"

import * as React from "react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMobileMenu() {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Link href="#">Home</Link>
     </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href="#projects">Projects</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href="#certificates">Certificates</Link>
    </DropdownMenuItem>
      <DropdownMenuItem>
      <Link href="#contact">Contact</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}