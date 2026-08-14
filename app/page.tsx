"use client"

import { AccessibilityProvider } from "@/context/accessibility-context"
import { NavigationProvider } from "@/context/navigation-context"
import { NexusApp } from "@/components/nexus-app"

export default function Home() {
  return (
    <AccessibilityProvider>
      <NavigationProvider>
        <NexusApp />
      </NavigationProvider>
    </AccessibilityProvider>
  )
}
