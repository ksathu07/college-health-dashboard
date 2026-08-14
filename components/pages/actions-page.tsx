"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Bell,
  Phone,
  HelpCircle,
  CheckCircle,
  MessageSquare,
  Calendar,
  Pill,
} from "lucide-react"

interface ActionFeedback {
  type: "remind" | "call" | "help" | "message" | "schedule" | "refill"
  message: string
}

export function ActionsPage() {
  const [feedback, setFeedback] = useState<ActionFeedback | null>(null)

  const showFeedback = (action: ActionFeedback) => {
    setFeedback(action)
    setTimeout(() => setFeedback(null), 4000)
  }

  const handleRemindMe = () => {
    showFeedback({
      type: "remind",
      message: "Reminder set! We will notify you when it is time for your next medication.",
    })
  }

  const handleCallCaregiver = () => {
    showFeedback({
      type: "call",
      message: "Connecting you to your caregiver... Please wait.",
    })
  }

  const handleGetHelp = () => {
    showFeedback({
      type: "help",
      message: "Help request sent! A member of your care team will contact you soon.",
    })
  }

  const handleSendMessage = () => {
    showFeedback({
      type: "message",
      message: "Message sent to your care team. They will respond shortly.",
    })
  }

  const handleScheduleAppointment = () => {
    showFeedback({
      type: "schedule",
      message: "Appointment request submitted. You will receive a confirmation soon.",
    })
  }

  const handleRequestRefill = () => {
    showFeedback({
      type: "refill",
      message: "Refill request sent to your pharmacy. It should be ready in 24-48 hours.",
    })
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Quick Actions</h1>
        <p className="mt-2 text-muted-foreground">
          Get help, set reminders, or contact your care team with one tap
        </p>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div className="animate-in fade-in slide-in-from-top-2 rounded-xl border-2 border-success/30 bg-success/10 p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-success/20 p-2">
              <CheckCircle className="h-8 w-8 text-success" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-success">Success!</h3>
              <p className="text-foreground">{feedback.message}</p>
            </div>
          </div>
        </div>
      )}

      {/* Primary Actions */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Primary Actions</CardTitle>
          <p className="text-muted-foreground">
            The most common actions you might need
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Remind Me Button */}
            <Button
              size="lg"
              onClick={handleRemindMe}
              className="flex h-auto min-h-32 flex-col items-center justify-center gap-3 p-6 text-lg"
            >
              <div className="rounded-full bg-primary-foreground/20 p-4">
                <Bell className="h-10 w-10" aria-hidden="true" />
              </div>
              <span className="font-semibold">Remind Me</span>
              <span className="text-sm text-primary-foreground/80">
                Set medication reminder
              </span>
            </Button>

            {/* Call Caregiver Button */}
            <Button
              size="lg"
              variant="secondary"
              onClick={handleCallCaregiver}
              className="flex h-auto min-h-32 flex-col items-center justify-center gap-3 border-2 p-6 text-lg"
            >
              <div className="rounded-full bg-secondary-foreground/10 p-4">
                <Phone className="h-10 w-10" aria-hidden="true" />
              </div>
              <span className="font-semibold">Call Caregiver</span>
              <span className="text-sm text-muted-foreground">
                Contact your caregiver
              </span>
            </Button>

            {/* Get Help Button */}
            <Button
              size="lg"
              variant="outline"
              onClick={handleGetHelp}
              className="flex h-auto min-h-32 flex-col items-center justify-center gap-3 border-2 p-6 text-lg hover:bg-accent"
            >
              <div className="rounded-full bg-accent p-4">
                <HelpCircle className="h-10 w-10" aria-hidden="true" />
              </div>
              <span className="font-semibold">Get Help</span>
              <span className="text-sm text-muted-foreground">
                Request assistance
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Secondary Actions */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">More Actions</CardTitle>
          <p className="text-muted-foreground">
            Additional ways to manage your health
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Message Care Team */}
            <button
              onClick={handleSendMessage}
              className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-5 text-left transition-all hover:border-primary hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="rounded-lg bg-primary/10 p-3">
                <MessageSquare className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Send Message</h3>
                <p className="text-sm text-muted-foreground">
                  Message your care team
                </p>
              </div>
            </button>

            {/* Schedule Appointment */}
            <button
              onClick={handleScheduleAppointment}
              className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-5 text-left transition-all hover:border-primary hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="rounded-lg bg-primary/10 p-3">
                <Calendar className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Schedule Appointment</h3>
                <p className="text-sm text-muted-foreground">
                  Book a visit with your doctor
                </p>
              </div>
            </button>

            {/* Request Refill */}
            <button
              onClick={handleRequestRefill}
              className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-5 text-left transition-all hover:border-primary hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="rounded-lg bg-primary/10 p-3">
                <Pill className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Request Refill</h3>
                <p className="text-sm text-muted-foreground">
                  Order medication refill
                </p>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-2 border-danger/30 bg-danger/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-danger">
            <Phone className="h-6 w-6" />
            Emergency Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-foreground">
            If you are experiencing a medical emergency, please call emergency services
            immediately or use the button below.
          </p>
          <Button
            size="lg"
            variant="destructive"
            className="min-h-14 w-full text-lg sm:w-auto"
            onClick={() => window.open("tel:911")}
          >
            <Phone className="mr-2 h-6 w-6" />
            Call Emergency Services (911)
          </Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-secondary/50 p-5">
              <h3 className="font-semibold">Primary Care Office</h3>
              <p className="mt-1 text-muted-foreground">Dr. Emily Chen</p>
              <p className="mt-2 text-lg font-medium text-primary">(555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 8AM - 5PM</p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-5">
              <h3 className="font-semibold">Pharmacy</h3>
              <p className="mt-1 text-muted-foreground">HealthCare Pharmacy</p>
              <p className="mt-2 text-lg font-medium text-primary">(555) 987-6543</p>
              <p className="text-sm text-muted-foreground">Open 24 hours</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
