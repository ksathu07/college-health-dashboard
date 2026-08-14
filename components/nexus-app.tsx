"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { DashboardPage } from "@/components/pages/dashboard-page"
import { PatientInfoPage } from "@/components/pages/patient-info-page"
import { PredictionPage } from "@/components/pages/prediction-page"
import { InsightsPage } from "@/components/pages/insights-page"
import { ActionsPage } from "@/components/pages/actions-page"
import { TeamPage } from "@/components/pages/team-page"
import { useNavigation } from "@/context/navigation-context"

export function NexusApp() {
  const { currentPage } = useNavigation()

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />
      case "patient-info":
        return <PatientInfoPage />
      case "prediction":
        return <PredictionPage />
      case "insights":
        return <InsightsPage />
      case "actions":
        return <ActionsPage />
      case "team":
        return <TeamPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}
