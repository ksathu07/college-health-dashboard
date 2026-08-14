"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { mockPatientData } from "@/lib/patient-data"
import {
  Activity,
  Moon,
  Pill,
  Clock,
  CheckCircle2,
  Circle,
  Flame,
  Timer,
} from "lucide-react"

export function PatientInfoPage() {
  const patient = mockPatientData

  const getSleepQualityColor = (quality: string) => {
    switch (quality) {
      case "excellent":
        return "bg-success text-success-foreground"
      case "good":
        return "bg-chart-1 text-primary-foreground"
      case "fair":
        return "bg-warning text-warning-foreground"
      case "poor":
        return "bg-danger text-danger-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Patient Information</h1>
        <p className="mt-2 text-muted-foreground">
          View your health data, activity, and medication schedule
        </p>
      </div>

      {/* Activity Level Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="rounded-lg bg-primary/10 p-2">
              <Activity className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            Activity Level
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Steps */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Activity className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Steps Today</span>
              </div>
              <p className="mt-4 text-3xl font-bold">
                {patient.activityLevel.stepsToday.toLocaleString()}
              </p>
              <Progress
                value={(patient.activityLevel.stepsToday / patient.activityLevel.stepsGoal) * 100}
                className="mt-3 h-2"
                aria-label={`Steps progress: ${patient.activityLevel.stepsToday} of ${patient.activityLevel.stepsGoal}`}
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Goal: {patient.activityLevel.stepsGoal.toLocaleString()}
              </p>
            </div>

            {/* Active Minutes */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Timer className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Active Minutes</span>
              </div>
              <p className="mt-4 text-3xl font-bold">
                {patient.activityLevel.activeMinutes}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">minutes today</p>
            </div>

            {/* Calories */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Flame className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Calories Burned</span>
              </div>
              <p className="mt-4 text-3xl font-bold">
                {patient.activityLevel.caloriesBurned}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">kcal today</p>
            </div>

            {/* Activity Score */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Activity className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Activity Score</span>
              </div>
              <p className="mt-4 text-3xl font-bold">
                {Math.round((patient.activityLevel.stepsToday / patient.activityLevel.stepsGoal) * 100)}%
              </p>
              <p className="mt-2 text-sm text-muted-foreground">of daily goal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sleep Data Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="rounded-lg bg-primary/10 p-2">
              <Moon className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            Sleep Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Hours Slept */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Moon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Hours Slept</span>
              </div>
              <p className="mt-4 text-3xl font-bold">{patient.sleepData.hoursSlept}</p>
              <p className="mt-2 text-sm text-muted-foreground">hours last night</p>
            </div>

            {/* Sleep Quality */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Moon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Sleep Quality</span>
              </div>
              <div className="mt-4">
                <Badge
                  className={`text-base px-3 py-1 ${getSleepQualityColor(
                    patient.sleepData.sleepQuality
                  )}`}
                >
                  {patient.sleepData.sleepQuality.charAt(0).toUpperCase() +
                    patient.sleepData.sleepQuality.slice(1)}
                </Badge>
              </div>
            </div>

            {/* Bedtime */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Bedtime</span>
              </div>
              <p className="mt-4 text-3xl font-bold">{patient.sleepData.bedtime}</p>
              <p className="mt-2 text-sm text-muted-foreground">last night</p>
            </div>

            {/* Wake Time */}
            <div className="rounded-xl bg-secondary/50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-medium">Wake Time</span>
              </div>
              <p className="mt-4 text-3xl font-bold">{patient.sleepData.wakeTime}</p>
              <p className="mt-2 text-sm text-muted-foreground">this morning</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medication Schedule */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="rounded-lg bg-primary/10 p-2">
              <Pill className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            Medication Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patient.medications.map((medication, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 rounded-xl border-2 p-5 transition-all ${
                  medication.taken
                    ? "border-success/30 bg-success/5"
                    : "border-border bg-card"
                }`}
              >
                <div
                  className={`rounded-full p-2 ${
                    medication.taken
                      ? "bg-success/20 text-success"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {medication.taken ? (
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Circle className="h-8 w-8" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{medication.name}</h3>
                    <Badge variant="secondary" className="text-sm">
                      {medication.dosage}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground">{medication.frequency}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Next dose</p>
                  <p className="text-lg font-medium">{medication.nextDose}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
