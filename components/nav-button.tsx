import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type NavButtonProps = {
  href: string
  label: string
  isActive?: boolean
}

export const NavButton = ({ href, label, isActive }: NavButtonProps) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto justify-between font-normal text-white border-none outline-none hover:bg-white/20 hover:text-white focus-visible:ring-offset-0 focus-visible:ring-transparent focus:bg-white/30 transition",
        isActive ? "bg-white/10" : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}
