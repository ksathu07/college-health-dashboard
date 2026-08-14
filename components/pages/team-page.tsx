"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockTeamMembers } from "@/lib/patient-data"
import { Phone, Mail, Users } from "lucide-react"

export function TeamPage() {
  const teamMembers = mockTeamMembers

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Your Care Team</h1>
        <p className="mt-2 text-muted-foreground">
          Meet the healthcare professionals dedicated to your wellbeing
        </p>
      </div>

      {/* Team Summary */}
      <Card className="border-2 bg-primary/5">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="mb-4 rounded-full bg-primary/10 p-4 md:mb-0 md:mr-6">
              <Users className="h-12 w-12 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold md:text-2xl">
                {teamMembers.length} Healthcare Professionals
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Your dedicated care team is here to support you every step of the way.
                Don&apos;t hesitate to reach out if you need help.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="border-2 transition-all hover:shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {member.avatar}
                </div>
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {member.specialty && (
                <div className="rounded-lg bg-secondary/50 px-3 py-2">
                  <p className="text-sm font-medium">Specialty</p>
                  <p className="text-muted-foreground">{member.specialty}</p>
                </div>
              )}

              <div className="space-y-3">
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-accent/50"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{member.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-accent/50"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm break-all">{member.email}</p>
                  </div>
                </a>
              </div>

              <Button
                variant="outline"
                className="w-full min-h-12"
                onClick={() => window.open(`tel:${member.phone}`)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact All */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Need to Reach Everyone?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            If you have a general question or need to notify your entire care team,
            you can send a message to everyone at once.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="min-h-14 flex-1">
              <Mail className="mr-2 h-6 w-6" />
              Message All Team Members
            </Button>
            <Button size="lg" variant="outline" className="min-h-14 flex-1">
              <Phone className="mr-2 h-6 w-6" />
              Call Care Coordinator
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hours of Operation */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">Office Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-secondary/50 p-4 text-center">
              <p className="font-semibold">Monday - Friday</p>
              <p className="mt-1 text-lg text-primary">8:00 AM - 6:00 PM</p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4 text-center">
              <p className="font-semibold">Saturday</p>
              <p className="mt-1 text-lg text-primary">9:00 AM - 1:00 PM</p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4 text-center">
              <p className="font-semibold">Sunday</p>
              <p className="mt-1 text-lg text-muted-foreground">Closed</p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4 text-center">
              <p className="font-semibold">Emergency Line</p>
              <p className="mt-1 text-lg text-success">24/7 Available</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
