"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { mockPatientData, weeklyAdherenceData } from "@/lib/patient-data"
import { Activity, Clock, Heart, TrendingUp } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts"

export function DashboardPage() {
  const patient = mockPatientData
  
  const getRiskColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-success text-success-foreground"
      case "medium":
        return "bg-warning text-warning-foreground"
      case "high":
        return "bg-danger text-danger-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getRiskLabel = (level: string) => {
    switch (level) {
      case "low":
        return "Low Risk - Great job!"
      case "medium":
        return "Medium Risk - Keep improving"
      case "high":
        return "High Risk - Needs attention"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-xl bg-primary/10 p-6 md:p-8">
        <h1 className="text-2xl font-bold md:text-3xl text-balance">
          Welcome back, {patient.name.split(" ")[0]}!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Last check-in: {patient.lastCheckIn}
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Adherence Score Card */}
        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-base font-medium">
              <div className="rounded-lg bg-primary/10 p-2">
                <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              Adherence Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2">
              <span className="text-4xl font-bold">{patient.adherenceScore}%</span>
              <Progress 
                value={patient.adherenceScore} 
                className="mt-3 h-3"
                aria-label={`Adherence score: ${patient.adherenceScore}%`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Risk Level Card */}
        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-base font-medium">
              <div className="rounded-lg bg-primary/10 p-2">
                <TrendingUp className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              Risk Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2">
              <span
                className={`inline-block rounded-full px-4 py-2 text-lg font-semibold ${getRiskColor(
                  patient.riskLevel
                )}`}
              >
                {patient.riskLevel.charAt(0).toUpperCase() + patient.riskLevel.slice(1)}
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                {getRiskLabel(patient.riskLevel)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Activity Card */}
        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-base font-medium">
              <div className="rounded-lg bg-primary/10 p-2">
                <Activity className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              Daily Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2">
              <span className="text-4xl font-bold">
                {patient.activityLevel.stepsToday.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground"> steps</span>
              <Progress
                value={(patient.activityLevel.stepsToday / patient.activityLevel.stepsGoal) * 100}
                className="mt-3 h-3"
                aria-label={`Steps progress: ${patient.activityLevel.stepsToday} of ${patient.activityLevel.stepsGoal}`}
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Goal: {patient.activityLevel.stepsGoal.toLocaleString()} steps
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Next Medication Card */}
        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-base font-medium">
              <div className="rounded-lg bg-primary/10 p-2">
                <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              Next Medication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-2">
              {patient.medications.filter(m => !m.taken)[0] ? (
                <>
                  <span className="text-xl font-bold">
                    {patient.medications.filter(m => !m.taken)[0].name}
                  </span>
                  <p className="mt-1 text-muted-foreground">
                    {patient.medications.filter(m => !m.taken)[0].dosage}
                  </p>
                  <p className="mt-2 text-lg font-medium text-primary">
                    {patient.medications.filter(m => !m.taken)[0].nextDose}
                  </p>
                </>
              ) : (
                <span className="text-lg font-medium text-success">
                  All medications taken!
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Adherence Chart */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Weekly Adherence</CardTitle>
          <p className="text-muted-foreground">
            Your medication adherence over the past week
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full" role="img" aria-label="Bar chart showing weekly adherence percentages">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyAdherenceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 14 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 14 }}
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                />
                <Bar dataKey="adherence" radius={[8, 8, 0, 0]} maxBarSize={50}>
                  {weeklyAdherenceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.adherence >= 90
                          ? "hsl(var(--chart-1))"
                          : entry.adherence >= 70
                          ? "hsl(var(--chart-2))"
                          : "hsl(var(--chart-3))"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-chart-1" />
              <span className="text-sm">90%+ (Great)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-chart-2" />
              <span className="text-sm">70-89% (Good)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-chart-3" />
              <span className="text-sm">Below 70% (Needs Attention)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Reminders */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Upcoming Reminders</CardTitle>
          <p className="text-muted-foreground">Your scheduled medications and appointments</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patient.upcomingReminders.map((reminder) => (
              <div
                key={reminder.id}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/50"
              >
                <div
                  className={`rounded-full p-3 ${
                    reminder.type === "medication"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  {reminder.type === "medication" ? (
                    <Heart className="h-6 w-6" />
                  ) : (
                    <Clock className="h-6 w-6" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium">{reminder.title}</p>
                  <p className="text-muted-foreground">{reminder.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
