"use client"

import type React from "react"

import { useEffect } from "react"
import { useTheme } from "@/hooks/use-theme"

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return <>{children}</>
}
