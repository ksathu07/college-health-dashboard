export interface PatientData {
  name: string
  age: number
  adherenceScore: number
  riskLevel: "low" | "medium" | "high"
  lastCheckIn: string
  medications: Medication[]
  activityLevel: ActivityData
  sleepData: SleepData
  upcomingReminders: Reminder[]
}

export interface Medication {
  name: string
  dosage: string
  frequency: string
  nextDose: string
  taken: boolean
}

export interface ActivityData {
  stepsToday: number
  stepsGoal: number
  activeMinutes: number
  caloriesBurned: number
}

export interface SleepData {
  hoursSlept: number
  sleepQuality: "poor" | "fair" | "good" | "excellent"
  bedtime: string
  wakeTime: string
}

export interface Reminder {
  id: string
  title: string
  time: string
  type: "medication" | "appointment" | "checkup"
}

export interface TeamMember {
  id: string
  name: string
  role: string
  email: string
  phone: string
  avatar: string
  specialty?: string
}

export const mockPatientData: PatientData = {
  name: "Sarah Johnson",
  age: 68,
  adherenceScore: 85,
  riskLevel: "medium",
  lastCheckIn: "2 hours ago",
  medications: [
    {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      nextDose: "8:00 AM Tomorrow",
      taken: true,
    },
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      nextDose: "6:00 PM Today",
      taken: false,
    },
    {
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily",
      nextDose: "9:00 PM Today",
      taken: false,
    },
    {
      name: "Aspirin",
      dosage: "81mg",
      frequency: "Once daily",
      nextDose: "8:00 AM Tomorrow",
      taken: true,
    },
  ],
  activityLevel: {
    stepsToday: 4250,
    stepsGoal: 6000,
    activeMinutes: 35,
    caloriesBurned: 180,
  },
  sleepData: {
    hoursSlept: 7.5,
    sleepQuality: "good",
    bedtime: "10:30 PM",
    wakeTime: "6:00 AM",
  },
  upcomingReminders: [
    {
      id: "1",
      title: "Take Metformin",
      time: "6:00 PM",
      type: "medication",
    },
    {
      id: "2",
      title: "Take Atorvastatin",
      time: "9:00 PM",
      type: "medication",
    },
    {
      id: "3",
      title: "Doctor Appointment",
      time: "Tomorrow 10:00 AM",
      type: "appointment",
    },
  ],
}

export const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    role: "Primary Care Physician",
    email: "emily.chen@healthcare.com",
    phone: "(555) 123-4567",
    avatar: "EC",
    specialty: "Internal Medicine",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Care Coordinator",
    email: "m.rodriguez@healthcare.com",
    phone: "(555) 234-5678",
    avatar: "MR",
    specialty: "Patient Care",
  },
  {
    id: "3",
    name: "Dr. James Wilson",
    role: "Cardiologist",
    email: "j.wilson@healthcare.com",
    phone: "(555) 345-6789",
    avatar: "JW",
    specialty: "Cardiology",
  },
  {
    id: "4",
    name: "Lisa Thompson",
    role: "Pharmacist",
    email: "l.thompson@healthcare.com",
    phone: "(555) 456-7890",
    avatar: "LT",
    specialty: "Medication Management",
  },
  {
    id: "5",
    name: "David Kim",
    role: "Nurse Practitioner",
    email: "d.kim@healthcare.com",
    phone: "(555) 567-8901",
    avatar: "DK",
    specialty: "Primary Care",
  },
  {
    id: "6",
    name: "Sarah Martinez",
    role: "Health Coach",
    email: "s.martinez@healthcare.com",
    phone: "(555) 678-9012",
    avatar: "SM",
    specialty: "Lifestyle & Wellness",
  },
]

export const weeklyAdherenceData = [
  { day: "Mon", adherence: 100 },
  { day: "Tue", adherence: 85 },
  { day: "Wed", adherence: 100 },
  { day: "Thu", adherence: 70 },
  { day: "Fri", adherence: 85 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 85 },
]

export const insightsData = {
  totalMedicationsTaken: 24,
  totalMedicationsMissed: 4,
  averageAdherenceRate: 85,
  streakDays: 5,
  improvementFromLastWeek: 12,
  nextRefillDate: "April 15, 2026",
  appointmentsThisMonth: 3,
  healthScore: 78,
}
