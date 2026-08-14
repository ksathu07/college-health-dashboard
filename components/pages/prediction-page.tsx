"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, AlertTriangle, CheckCircle, Clock, Loader2 } from "lucide-react"

interface PredictionResult {
  riskLevel: "low" | "medium" | "high"
  score: number
  explanation: string
  recommendations: string[]
  daysUntilRisk: number
}

export function PredictionPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [prediction, setPrediction] = useState<PredictionResult | null>(null)

  const runPrediction = () => {
    setIsAnalyzing(true)
    setPrediction(null)

    // Simulate AI prediction with a delay
    setTimeout(() => {
      const mockPrediction: PredictionResult = {
        riskLevel: "medium",
        score: 65,
        explanation:
          "Based on your recent activity and medication history, you may have difficulty remembering your evening medication in the next few days.",
        recommendations: [
          "Set an alarm for your 6:00 PM medication",
          "Keep your medications in a visible place",
          "Ask a family member to remind you",
          "Use a pill organizer to track doses",
        ],
        daysUntilRisk: 3,
      }
      setPrediction(mockPrediction)
      setIsAnalyzing(false)
    }, 2500)
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low":
        return "text-success"
      case "medium":
        return "text-warning"
      case "high":
        return "text-danger"
      default:
        return "text-muted-foreground"
    }
  }

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-success/10 border-success/30"
      case "medium":
        return "bg-warning/10 border-warning/30"
      case "high":
        return "bg-danger/10 border-danger/30"
      default:
        return "bg-muted"
    }
  }

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "low":
        return <CheckCircle className="h-12 w-12 text-success" />
      case "medium":
        return <AlertTriangle className="h-12 w-12 text-warning" />
      case "high":
        return <AlertTriangle className="h-12 w-12 text-danger" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Health Risk Prediction</h1>
        <p className="mt-2 text-muted-foreground">
          Our AI analyzes your health data to predict potential medication adherence risks
        </p>
      </div>

      {/* Prediction Card */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="rounded-lg bg-primary/10 p-2">
              <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            AI Health Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Analysis Button */}
          <div className="flex flex-col items-center justify-center rounded-xl bg-secondary/50 p-8 text-center">
            {!isAnalyzing && !prediction && (
              <>
                <div className="rounded-full bg-primary/10 p-6">
                  <Brain className="h-16 w-16 text-primary" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">Ready to Check Your Health Risk?</h2>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Our AI will analyze your activity, sleep, and medication data to predict any upcoming risks.
                </p>
                <Button
                  size="lg"
                  onClick={runPrediction}
                  className="mt-6 min-h-14 px-8 text-lg"
                >
                  <Brain className="mr-2 h-6 w-6" />
                  Check My Health Risk
                </Button>
              </>
            )}

            {isAnalyzing && (
              <>
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
                <h2 className="mt-6 text-xl font-semibold">Analyzing Your Health Data...</h2>
                <p className="mt-2 text-muted-foreground">
                  Please wait while our AI processes your information.
                </p>
                <Progress value={66} className="mt-6 h-3 w-64" />
              </>
            )}
          </div>

          {/* Prediction Results */}
          {prediction && !isAnalyzing && (
            <div className="space-y-6">
              {/* Risk Level Display */}
              <div
                className={`rounded-xl border-2 p-6 ${getRiskBgColor(prediction.riskLevel)}`}
              >
                <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
                  <div className="mb-4 sm:mb-0 sm:mr-6">
                    {getRiskIcon(prediction.riskLevel)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-baseline">
                      <h3 className="text-2xl font-bold">
                        <span className={getRiskColor(prediction.riskLevel)}>
                          {prediction.riskLevel.charAt(0).toUpperCase() +
                            prediction.riskLevel.slice(1)}{" "}
                          Risk
                        </span>
                      </h3>
                      <span className="text-lg text-muted-foreground">
                        ({prediction.score}% confidence)
                      </span>
                    </div>
                    <p className="mt-3 text-lg">{prediction.explanation}</p>
                  </div>
                </div>
              </div>

              {/* Time Warning */}
              <div className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-5">
                <div className="rounded-full bg-warning/10 p-3">
                  <Clock className="h-8 w-8 text-warning" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    You may miss your medicine in {prediction.daysUntilRisk} days
                  </p>
                  <p className="text-muted-foreground">
                    Take action now to prevent this from happening
                  </p>
                </div>
              </div>

              {/* Recommendations */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {prediction.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-primary/10 p-1">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-lg">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Run Again Button */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={runPrediction}
                  className="min-h-14 px-8 text-lg"
                >
                  <Brain className="mr-2 h-6 w-6" />
                  Run Analysis Again
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl">How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-secondary/50 p-5 text-center">
              <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mt-4 font-semibold">Data Collection</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We gather your activity, sleep, and medication data
              </p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-5 text-center">
              <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mt-4 font-semibold">AI Analysis</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our AI finds patterns that may affect your adherence
              </p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-5 text-center">
              <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mt-4 font-semibold">Get Insights</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Receive personalized recommendations to stay on track
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
