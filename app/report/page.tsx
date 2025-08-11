"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Leaf, Camera, MapPin, Upload, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReportPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [location, setLocation] = useState("")

  const categories = [
    { value: "water-leakage", label: "Water Leakage", color: "bg-blue-100 text-blue-800" },
    { value: "fallen-tree", label: "Fallen Tree", color: "bg-green-100 text-green-800" },
    { value: "waste-dumping", label: "Illegal Waste Dumping", color: "bg-red-100 text-red-800" },
    { value: "air-pollution", label: "Air Pollution", color: "bg-gray-100 text-gray-800" },
    { value: "noise-pollution", label: "Noise Pollution", color: "bg-purple-100 text-purple-800" },
    { value: "damaged-infrastructure", label: "Damaged Infrastructure", color: "bg-orange-100 text-orange-800" },
    { value: "other", label: "Other Environmental Issue", color: "bg-yellow-100 text-yellow-800" },
  ]

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
        },
        (error) => {
          console.error("Error getting location:", error)
          setLocation("Location access denied")
        },
      )
    } else {
      setLocation("Geolocation not supported")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">EcoWatch</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-24 w-24 text-green-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted Successfully!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for helping protect our environment. Your report has been received and assigned tracking ID:{" "}
                <strong>ECO-2024-001847</strong>
              </p>
            </div>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle className="text-lg">What happens next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Review & Verification</p>
                    <p className="text-sm text-gray-600">Our team will review your report within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 text-sm flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Government Assignment</p>
                    <p className="text-sm text-gray-600">The issue will be forwarded to the relevant department</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 text-sm flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Resolution & Updates</p>
                    <p className="text-sm text-gray-600">You'll receive notifications about progress and resolution</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/report">Report Another Issue</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/volunteer">Join as Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">EcoWatch</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Report Environmental Issue</h1>
            <p className="text-gray-600">
              Help us protect our community by reporting environmental concerns. Your report will be reviewed and
              forwarded to the appropriate authorities.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Issue Details</CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us address the issue effectively.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Issue Category *</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of environmental issue" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          <div className="flex items-center gap-2">
                            <Badge className={category.color} variant="secondary">
                              {category.label}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Issue Title *</Label>
                  <Input id="title" placeholder="Brief description of the issue" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the environmental issue, including when you first noticed it and any relevant context..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="flex gap-2">
                    <Input
                      id="location"
                      placeholder="Enter address or coordinates"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                    <Button type="button" variant="outline" onClick={handleGetLocation}>
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Click the location button to automatically detect your current position
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photos">Photos</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload photos of the environmental issue</p>
                    <p className="text-sm text-gray-500 mb-4">Drag and drop files here, or click to browse</p>
                    <Button type="button" variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Information (Optional)</Label>
                  <Input id="contact" placeholder="Email or phone number for updates" />
                  <p className="text-sm text-gray-500">
                    Provide contact details if you'd like to receive updates about this issue
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Can wait for regular maintenance</SelectItem>
                      <SelectItem value="medium">Medium - Should be addressed soon</SelectItem>
                      <SelectItem value="high">High - Requires immediate attention</SelectItem>
                      <SelectItem value="critical">Critical - Emergency situation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    Submit Report
                  </Button>
                  <Button type="button" variant="outline" asChild>
                    <Link href="/">Cancel</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
