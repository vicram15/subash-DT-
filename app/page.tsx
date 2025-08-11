import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Camera, MapPin, Users, Shield, BarChart3, Bell } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">EcoWatch</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/report" className="text-gray-600 hover:text-green-600 transition-colors">
              Report Issue
            </Link>
            <Link href="/volunteer" className="text-gray-600 hover:text-green-600 transition-colors">
              Volunteer
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
              Dashboard
            </Link>
            <Button asChild>
              <Link href="/report">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            Community-Driven Environmental Action
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empower Your Community to
            <span className="text-green-600 block">Protect the Environment</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Report environmental issues, engage volunteers, and collaborate with government officials to create a
            cleaner, greener community through our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/report">
                <Camera className="mr-2 h-5 w-5" />
                Report an Issue
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/volunteer">
                <Users className="mr-2 h-5 w-5" />
                Join as Volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Environmental Reporting</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform connects citizens, volunteers, and government officials in a unified effort to address
              environmental concerns efficiently and transparently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Camera className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Easy Reporting</CardTitle>
                <CardDescription>
                  Capture photos, add GPS coordinates, and categorize environmental issues with our intuitive interface.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Precise Location</CardTitle>
                <CardDescription>
                  Automatic geotagging ensures accurate location identification for faster government response.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Volunteer Network</CardTitle>
                <CardDescription>
                  Engage with local volunteers, earn recognition, and participate in community environmental
                  initiatives.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Government Portal</CardTitle>
                <CardDescription>
                  Dedicated dashboard for officials to manage, prioritize, and update the status of reported issues.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bell className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Real-time Updates</CardTitle>
                <CardDescription>
                  Stay informed with instant notifications about issue status, new reports, and community activities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Track trends, monitor resolution times, and access transparent reporting on environmental progress.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2,847</div>
              <div className="text-gray-600">Issues Reported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1,923</div>
              <div className="text-gray-600">Issues Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">456</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">23</div>
              <div className="text-gray-600">Partner Agencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of citizens working together to protect our environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/report">Start Reporting</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              asChild
            >
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">EcoWatch</span>
              </div>
              <p className="text-gray-400">
                Empowering communities to protect and preserve our environment through collaborative action.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/report" className="hover:text-white transition-colors">
                    Report Issue
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="hover:text-white transition-colors">
                    Volunteer Portal
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Government Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoWatch. All rights reserved. Building a sustainable future together.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
