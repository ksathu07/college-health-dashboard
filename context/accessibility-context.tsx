"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type FontSize = "small" | "medium" | "large" | "extra-large"
type LineSpacing = "normal" | "relaxed" | "loose"
type Theme = "light" | "dark"

interface AccessibilityContextType {
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
  lineSpacing: LineSpacing
  setLineSpacing: (spacing: LineSpacing) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("medium")
  const [lineSpacing, setLineSpacing] = useState<LineSpacing>("normal")
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved preferences
    const savedFontSize = localStorage.getItem("nexus-font-size") as FontSize
    const savedLineSpacing = localStorage.getItem("nexus-line-spacing") as LineSpacing
    const savedTheme = localStorage.getItem("nexus-theme") as Theme
    
    if (savedFontSize) setFontSize(savedFontSize)
    if (savedLineSpacing) setLineSpacing(savedLineSpacing)
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("nexus-font-size", fontSize)
    localStorage.setItem("nexus-line-spacing", lineSpacing)
    localStorage.setItem("nexus-theme", theme)
    
    // Apply theme
    document.documentElement.classList.toggle("dark", theme === "dark")
    
    // Apply font size class to body
    document.body.classList.remove("text-size-small", "text-size-medium", "text-size-large", "text-size-extra-large")
    document.body.classList.add(`text-size-${fontSize}`)
    
    // Apply line spacing class to body
    document.body.classList.remove("line-spacing-normal", "line-spacing-relaxed", "line-spacing-loose")
    document.body.classList.add(`line-spacing-${lineSpacing}`)
  }, [fontSize, lineSpacing, theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        lineSpacing,
        setLineSpacing,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}
