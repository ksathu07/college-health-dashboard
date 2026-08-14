"use client"

import { Menu, Moon, Sun, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAccessibility } from "@/context/accessibility-context"
import { useNavigation } from "@/context/navigation-context"

export function Header() {
  const { theme, toggleTheme, fontSize, setFontSize, lineSpacing, setLineSpacing } = useAccessibility()
  const { toggleSidebar, isSidebarOpen } = useNavigation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="lg"
          className="md:hidden min-h-12 min-w-12"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">N</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight">NEXUS.AI</h1>
            <p className="text-xs text-muted-foreground">Medication Adherence</p>
          </div>
        </div>

        <div className="flex-1" />

        {/* Accessibility Settings */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="min-h-12 gap-2 px-4"
              aria-label="Accessibility settings"
            >
              <Settings className="h-5 w-5" />
              <span className="hidden sm:inline">Settings</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel className="text-base">Text Size</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => setFontSize("small")}
              className={`text-base py-3 ${fontSize === "small" ? "bg-accent" : ""}`}
            >
              Small
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFontSize("medium")}
              className={`text-base py-3 ${fontSize === "medium" ? "bg-accent" : ""}`}
            >
              Medium
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFontSize("large")}
              className={`text-lg py-3 ${fontSize === "large" ? "bg-accent" : ""}`}
            >
              Large
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFontSize("extra-large")}
              className={`text-xl py-3 ${fontSize === "extra-large" ? "bg-accent" : ""}`}
            >
              Extra Large
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="text-base">Line Spacing</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => setLineSpacing("normal")}
              className={`text-base py-3 ${lineSpacing === "normal" ? "bg-accent" : ""}`}
            >
              Normal
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setLineSpacing("relaxed")}
              className={`text-base py-3 ${lineSpacing === "relaxed" ? "bg-accent" : ""}`}
            >
              Relaxed
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setLineSpacing("loose")}
              className={`text-base py-3 ${lineSpacing === "loose" ? "bg-accent" : ""}`}
            >
              Loose
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="lg"
          onClick={toggleTheme}
          className="min-h-12 gap-2 px-4"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <>
              <Moon className="h-5 w-5" />
              <span className="hidden sm:inline">Dark</span>
            </>
          ) : (
            <>
              <Sun className="h-5 w-5" />
              <span className="hidden sm:inline">Light</span>
            </>
          )}
        </Button>
      </div>
    </header>
  )
}
