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
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onSelect={() => setOpen(false)}>
      <Link href="#">Home</Link>
     </DropdownMenuItem>
    <DropdownMenuItem onSelect={() => setOpen(false)}>
      <Link href="#projects">Projects</Link>
    </DropdownMenuItem>
    <DropdownMenuItem onSelect={() => setOpen(false)}>
      <Link href="#certificates">Certificates</Link>
    </DropdownMenuItem>
      <DropdownMenuItem onSelect={() => setOpen(false)}>
      <Link href="#contact">Contact</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}