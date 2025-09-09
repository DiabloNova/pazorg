"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark"

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => {
        set({ theme })
        document.documentElement.classList.toggle("dark", theme === "dark")
      },
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light"
        get().setTheme(newTheme)
      },
    }),
    {
      name: "pazirik-theme",
    },
  ),
)
