"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Star, MapPin, Users, MessageSquare, ArrowLeft, Trophy, Target, Clock } from "lucide-react"
import Link from "next/link"

export default function VolunteerPage() {
  const [isRegistered, setIsRegistered] = useState(false)

  const volunteerStats = {
    level: "Environmental Guardian",
    points: 2450,
    nextLevel: 3000,
    issuesReported: 23,
    issuesVerified: 45,
    communityRank: 12,
  }

  const badges = [
    { name: "First Reporter", icon: "🎯", description: "Reported your first environmental issue" },
    { name: "Water Guardian", icon: "💧", description: "Reported 10 water-related issues" },
    { name: "Tree Protector", icon: "🌳", description: "Reported 5 fallen tree incidents" },
    { name: "Community Helper", icon: "🤝", description: "Helped verify 20 community reports" },
    { name: "Monthly Champion", icon: "🏆", description: "Top contributor this month" },
  ]

  const nearbyIssues = [
    {
      id: "ECO-2024-001850",
      title: "Broken streetlight near park",
      category: "Infrastructure",
      distance: "0.3 miles",
      urgency: "Medium",
      reportedDate: "2 hours ago",
    },
    {
      id: "ECO-2024-001849",
      title: "Overflowing trash bin",
      category: "Waste Management",
      distance: "0.7 miles",
      urgency: "Low",
      reportedDate: "5 hours ago",
    },
    {
      id: "ECO-2024-001848",
      title: "Pothole on bike path",
      category: "Infrastructure",
      distance: "1.2 miles",
      urgency: "Medium",
      reportedDate: "1 day ago",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", points: 3240, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "Mike Rodriguez", points: 2890, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 3, name: "Emma Thompson", points: 2650, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 4, name: "You", points: 2450, avatar: "/placeholder.svg?height=40&width=40", isCurrentUser: true },
    { rank: 5, name: "David Kim", points: 2320, avatar: "/placeholder.svg?height=40&width=40" },
  ]

  if (!isRegistered) {
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

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Volunteer Community</h1>
              <p className="text-xl text-gray-600 mb-8">
                Make a difference in your community by helping monitor and protect our environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-green-200">
                <CardHeader>
                  <Trophy className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Earn Recognition</CardTitle>
                  <CardDescription>
                    Gain points, badges, and climb the leaderboard as you contribute to environmental protection
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <Users className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Community Impact</CardTitle>
                  <CardDescription>
                    Connect with like-minded individuals and make a real difference in your local environment
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <Target className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Verify Reports</CardTitle>
                  <CardDescription>
                    Help validate environmental issues reported by community members to ensure accuracy
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>Share Knowledge</CardTitle>
                  <CardDescription>
                    Participate in forums, share expertise, and learn from other environmental advocates
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
                <CardDescription>
                  Join our community of environmental volunteers and start making an impact today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Button size="lg" onClick={() => setIsRegistered(true)} className="w-full sm:w-auto">
                    Join as Volunteer
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Free to join • No commitments • Make a difference</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">EcoWatch</span>
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">Volunteer Portal</Badge>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Volunteer Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your impact and opportunities to help your community.</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="nearby">Nearby Issues</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-gray-600">{volunteerStats.level}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-green-100 text-green-800">
                        <Star className="h-3 w-3 mr-1" />
                        {volunteerStats.points} points
                      </Badge>
                      <Badge variant="outline">Rank #{volunteerStats.communityRank}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress to next level</span>
                      <span>
                        {volunteerStats.points}/{volunteerStats.nextLevel}
                      </span>
                    </div>
                    <Progress value={(volunteerStats.points / volunteerStats.nextLevel) * 100} className="h-2" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{volunteerStats.issuesReported}</div>
                      <div className="text-sm text-gray-600">Issues Reported</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{volunteerStats.issuesVerified}</div>
                      <div className="text-sm text-gray-600">Issues Verified</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">12</div>
                      <div className="text-sm text-gray-600">Community Rank</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Button asChild className="h-24 flex-col">
                <Link href="/report">
                  <MapPin className="h-8 w-8 mb-2" />
                  Report New Issue
                </Link>
              </Button>
              <Button variant="outline" className="h-24 flex-col bg-transparent">
                <Users className="h-8 w-8 mb-2" />
                Verify Reports
              </Button>
              <Button variant="outline" className="h-24 flex-col bg-transparent">
                <MessageSquare className="h-8 w-8 mb-2" />
                Community Forum
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="nearby" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Issues Near You</CardTitle>
                <CardDescription>Environmental issues in your area that need attention or verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyIssues.map((issue) => (
                    <div key={issue.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{issue.category}</Badge>
                          <Badge
                            className={
                              issue.urgency === "High"
                                ? "bg-red-100 text-red-800"
                                : issue.urgency === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                            }
                          >
                            {issue.urgency}
                          </Badge>
                        </div>
                        <h3 className="font-medium">{issue.title}</h3>
                        <p className="text-sm text-gray-600 flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {issue.distance} away
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {issue.reportedDate}
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Verify
                        </Button>
                        <Button size="sm">Investigate</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Leaderboard</CardTitle>
                  <CardDescription>Top volunteers this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboard.map((volunteer) => (
                      <div
                        key={volunteer.rank}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          volunteer.isCurrentUser ? "bg-green-50 border border-green-200" : ""
                        }`}
                      >
                        <div className="text-lg font-bold text-gray-500 w-6">#{volunteer.rank}</div>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={volunteer.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {volunteer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{volunteer.name}</p>
                          <p className="text-sm text-gray-600">{volunteer.points} points</p>
                        </div>
                        {volunteer.rank <= 3 && (
                          <Trophy
                            className={`h-5 w-5 ${
                              volunteer.rank === 1
                                ? "text-yellow-500"
                                : volunteer.rank === 2
                                  ? "text-gray-400"
                                  : "text-orange-600"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Forum</CardTitle>
                  <CardDescription>Recent discussions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">Water Quality Concerns Downtown</h4>
                      <p className="text-sm text-gray-600 mt-1">Discussion about recent water testing results...</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>Sarah Chen</span>
                        <span>•</span>
                        <span>2 hours ago</span>
                        <span>•</span>
                        <span>12 replies</span>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">Tree Planting Event This Weekend</h4>
                      <p className="text-sm text-gray-600 mt-1">Join us for a community tree planting initiative...</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <span>Mike Rodriguez</span>
                        <span>•</span>
                        <span>5 hours ago</span>
                        <span>•</span>
                        <span>8 replies</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    View All Discussions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Badges</CardTitle>
                <CardDescription>Recognition for your environmental contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <div key={index} className="p-4 border rounded-lg text-center">
                      <div className="text-4xl mb-2">{badge.icon}</div>
                      <h3 className="font-medium">{badge.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Goals</CardTitle>
                <CardDescription>Track your progress towards monthly objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Report 5 environmental issues</span>
                      <span>3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Verify 10 community reports</span>
                      <span>7/10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Participate in 3 forum discussions</span>
                      <span>1/3</span>
                    </div>
                    <Progress value={33} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
