"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { insightsData } from "@/lib/patient-data"
import {
  CheckCircle2,
  XCircle,
  TrendingUp,
  Flame,
  Calendar,
  RefreshCw,
  Heart,
  Award,
} from "lucide-react"

export function InsightsPage() {
  const insights = insightsData

  const statCards = [
    {
      title: "Medications Taken",
      value: insights.totalMedicationsTaken,
      subtitle: "this week",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Medications Missed",
      value: insights.totalMedicationsMissed,
      subtitle: "this week",
      icon: XCircle,
      color: "text-danger",
      bgColor: "bg-danger/10",
    },
    {
      title: "Adherence Rate",
      value: `${insights.averageAdherenceRate}%`,
      subtitle: "average",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Current Streak",
      value: insights.streakDays,
      subtitle: "days in a row",
      icon: Flame,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      title: "Improvement",
      value: `+${insights.improvementFromLastWeek}%`,
      subtitle: "from last week",
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Health Score",
      value: insights.healthScore,
      subtitle: "out of 100",
      icon: Heart,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Next Refill",
      value: insights.nextRefillDate.split(",")[0],
      subtitle: insights.nextRefillDate.split(",")[1]?.trim() || "",
      icon: RefreshCw,
      color: "text-muted-foreground",
      bgColor: "bg-muted",
    },
    {
      title: "Appointments",
      value: insights.appointmentsThisMonth,
      subtitle: "this month",
      icon: Calendar,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Your Insights</h1>
        <p className="mt-2 text-muted-foreground">
          Track your progress and see how you&apos;re doing with your medications
        </p>
      </div>

      {/* Summary Banner */}
      <Card className="border-2 bg-primary/5">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="mb-4 rounded-full bg-primary/10 p-4 md:mb-0 md:mr-6">
              <Award className="h-12 w-12 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold md:text-2xl">
                Great Progress This Week!
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                You&apos;ve improved your medication adherence by{" "}
                <span className="font-semibold text-success">
                  {insights.improvementFromLastWeek}%
                </span>{" "}
                compared to last week. Keep up the good work!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="border-2 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className={`mt-2 text-4xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.subtitle}
                    </p>
                  </div>
                  <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Detailed Insights */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Performance */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">Weekly Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center justify-between">
                <span className="font-medium">Medications Taken</span>
                <span className="text-2xl font-bold text-success">
                  {insights.totalMedicationsTaken}
                </span>
              </div>
              <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-success transition-all duration-500"
                  style={{
                    width: `${
                      (insights.totalMedicationsTaken /
                        (insights.totalMedicationsTaken + insights.totalMedicationsMissed)) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center justify-between">
                <span className="font-medium">Medications Missed</span>
                <span className="text-2xl font-bold text-danger">
                  {insights.totalMedicationsMissed}
                </span>
              </div>
              <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-danger transition-all duration-500"
                  style={{
                    width: `${
                      (insights.totalMedicationsMissed /
                        (insights.totalMedicationsTaken + insights.totalMedicationsMissed)) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips for Improvement */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">Tips for Better Adherence</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                "Take your medications at the same time every day",
                "Use a pill organizer to keep track of doses",
                "Set reminders on your phone or ask family to help",
                "Keep medications in a visible place",
                "Never skip a dose - contact your doctor if you have concerns",
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-primary/10 p-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Important Dates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="rounded-lg bg-primary/10 p-3">
                <RefreshCw className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium">Next Medication Refill</p>
                <p className="text-lg font-semibold text-primary">
                  {insights.nextRefillDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="rounded-lg bg-primary/10 p-3">
                <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium">Doctor Appointment</p>
                <p className="text-lg font-semibold text-primary">Tomorrow 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="rounded-lg bg-primary/10 p-3">
                <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium">Health Checkup</p>
                <p className="text-lg font-semibold text-primary">April 20, 2026</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
