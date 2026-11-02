"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

type ThemeButtonProps = {
  className?: string
}

export default function ThemeButton({ className = "" }: ThemeButtonProps) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Alternar tema"
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center transition-opacity hover:opacity-70 ${className}`}
    >
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="block dark:hidden" />
    </button>
  )
}
