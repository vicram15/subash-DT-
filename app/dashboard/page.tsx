"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Eye,
  ArrowLeft,
  BarChart3,
  Users,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const issues = [
    {
      id: "ECO-2024-001847",
      title: "Water pipe burst on Main Street",
      category: "Water Leakage",
      status: "In Progress",
      urgency: "High",
      location: "Main Street, Downtown",
      reportedBy: "John Doe",
      reportedDate: "2024-01-15",
      assignedTo: "Water Department",
      description: "Large water pipe burst causing flooding on the sidewalk",
    },
    {
      id: "ECO-2024-001846",
      title: "Fallen tree blocking bike path",
      category: "Fallen Tree",
      status: "Acknowledged",
      urgency: "Medium",
      location: "Central Park, East Trail",
      reportedBy: "Sarah Wilson",
      reportedDate: "2024-01-14",
      assignedTo: "Parks & Recreation",
      description: "Large oak tree fell across the main bike path after yesterday's storm",
    },
    {
      id: "ECO-2024-001845",
      title: "Illegal dumping behind shopping center",
      category: "Waste Dumping",
      status: "Resolved",
      urgency: "Medium",
      location: "Westfield Shopping Center",
      reportedBy: "Mike Johnson",
      reportedDate: "2024-01-12",
      assignedTo: "Waste Management",
      description: "Construction debris and household waste dumped illegally",
    },
    {
      id: "ECO-2024-001844",
      title: "Air quality concerns near factory",
      category: "Air Pollution",
      status: "Under Review",
      urgency: "High",
      location: "Industrial District",
      reportedBy: "Environmental Group",
      reportedDate: "2024-01-10",
      assignedTo: "Environmental Protection",
      description: "Strong chemical odors and visible emissions from manufacturing facility",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Acknowledged":
        return "bg-yellow-100 text-yellow-800"
      case "Under Review":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Critical":
        return "bg-red-100 text-red-800"
      case "High":
        return "bg-orange-100 text-orange-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredIssues = issues.filter((issue) => {
    const statusMatch = selectedStatus === "all" || issue.status === selectedStatus
    const categoryMatch = selectedCategory === "all" || issue.category === selectedCategory
    return statusMatch && categoryMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">EcoWatch</span>
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">Government Portal</Badge>
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Dashboard</h1>
          <p className="text-gray-600">
            Monitor, manage, and respond to environmental issues reported by the community.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,847</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,923</div>
                  <p className="text-xs text-muted-foreground">67.5% resolution rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">456</div>
                  <p className="text-xs text-muted-foreground">Average 3.2 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Volunteers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground">+8 new this week</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Issues */}
            <Card>
              <CardHeader>
                <CardTitle>Recent High Priority Issues</CardTitle>
                <CardDescription>Issues requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {issues
                    .filter((issue) => issue.urgency === "High")
                    .map((issue) => (
                      <div key={issue.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getStatusColor(issue.status)}>{issue.status}</Badge>
                            <Badge className={getUrgencyColor(issue.urgency)}>{issue.urgency}</Badge>
                          </div>
                          <h3 className="font-medium">{issue.title}</h3>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {issue.location}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="issues" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Filter Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input placeholder="Search issues..." className="w-full" />
                  </div>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="Under Review">Under Review</SelectItem>
                      <SelectItem value="Acknowledged">Acknowledged</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Water Leakage">Water Leakage</SelectItem>
                      <SelectItem value="Fallen Tree">Fallen Tree</SelectItem>
                      <SelectItem value="Waste Dumping">Waste Dumping</SelectItem>
                      <SelectItem value="Air Pollution">Air Pollution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Issues List */}
            <div className="space-y-4">
              {filteredIssues.map((issue) => (
                <Card key={issue.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{issue.id}</Badge>
                          <Badge className={getStatusColor(issue.status)}>{issue.status}</Badge>
                          <Badge className={getUrgencyColor(issue.urgency)}>{issue.urgency}</Badge>
                        </div>
                        <CardTitle className="text-lg">{issue.title}</CardTitle>
                        <CardDescription>{issue.description}</CardDescription>
                      </div>
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">
                          <strong>Location:</strong> {issue.location}
                        </p>
                        <p className="text-gray-600">
                          <strong>Category:</strong> {issue.category}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <strong>Reported by:</strong> {issue.reportedBy}
                        </p>
                        <p className="text-gray-600">
                          <strong>Assigned to:</strong> {issue.assignedTo}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Issue Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Water Leakage</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded">
                          <div className="w-16 h-2 bg-blue-500 rounded"></div>
                        </div>
                        <span className="text-sm text-gray-600">67%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fallen Trees</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded">
                          <div className="w-12 h-2 bg-green-500 rounded"></div>
                        </div>
                        <span className="text-sm text-gray-600">50%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Waste Dumping</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded">
                          <div className="w-8 h-2 bg-red-500 rounded"></div>
                        </div>
                        <span className="text-sm text-gray-600">33%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Resolution Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">3.2</div>
                      <p className="text-sm text-gray-600">Average days to resolution</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Same day</span>
                        <span>15%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>1-3 days</span>
                        <span>45%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>4-7 days</span>
                        <span>30%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Over 1 week</span>
                        <span>10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Create detailed reports for transparency and performance tracking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 flex-col bg-transparent">
                    <BarChart3 className="h-8 w-8 mb-2" />
                    Monthly Performance Report
                  </Button>
                  <Button variant="outline" className="h-24 flex-col bg-transparent">
                    <MapPin className="h-8 w-8 mb-2" />
                    Geographic Analysis
                  </Button>
                  <Button variant="outline" className="h-24 flex-col bg-transparent">
                    <Users className="h-8 w-8 mb-2" />
                    Community Engagement
                  </Button>
                  <Button variant="outline" className="h-24 flex-col bg-transparent">
                    <Clock className="h-8 w-8 mb-2" />
                    Response Time Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
