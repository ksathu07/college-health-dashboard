"use client"

import {
  LayoutDashboard,
  User,
  Brain,
  BarChart3,
  Bell,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigation } from "@/context/navigation-context"
import { cn } from "@/lib/utils"

const navItems = [
  {
    id: "dashboard" as const,
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Overview of your health",
  },
  {
    id: "patient-info" as const,
    label: "Patient Info",
    icon: User,
    description: "Your health details",
  },
  {
    id: "prediction" as const,
    label: "Prediction",
    icon: Brain,
    description: "Check health risks",
  },
  {
    id: "insights" as const,
    label: "Insights",
    icon: BarChart3,
    description: "View your progress",
  },
  {
    id: "actions" as const,
    label: "Actions",
    icon: Bell,
    description: "Get help & reminders",
  },
  {
    id: "team" as const,
    label: "Team",
    icon: Users,
    description: "Your care team",
  },
]

export function Sidebar() {
  const { currentPage, setCurrentPage, isSidebarOpen, setIsSidebarOpen } = useNavigation()

  const handleNavClick = (pageId: typeof navItems[number]["id"]) => {
    setCurrentPage(pageId)
    setIsSidebarOpen(false)
  }

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 transform border-r border-border bg-sidebar transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col pt-20 md:pt-4">
          <nav className="flex-1 space-y-2 p-4" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-4 min-h-14 px-4 text-left transition-all duration-200",
                    isActive && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  )}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col items-start">
                    <span className="text-base">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </div>
                </Button>
              )
            })}
          </nav>

          {/* Help section */}
          <div className="border-t border-sidebar-border p-4">
            <div className="rounded-lg bg-sidebar-accent p-4">
              <h3 className="font-medium text-sidebar-accent-foreground">Need Help?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Call your care team anytime for support.
              </p>
              <Button
                variant="default"
                size="lg"
                className="mt-3 w-full min-h-12"
              >
                <span>Contact Support</span>
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
