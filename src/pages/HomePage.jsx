"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, MessageCircle, Award, Shield } from "lucide-react"
import BlogCard from "../components/BlogCard"
import CategoryCard from "../components/CategoryCard"
import LoadingScreen from "../components/LoadingScreen"

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setFeaturedPosts(mockFeaturedPosts)
      setCategories(mockCategories)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect with Legal Experts on NyaySetu</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A platform for lawyers to share insights and for users to gain legal knowledge without crossing regulatory
              boundaries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100"
              >
                Browse Articles
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/qa"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-700"
              >
                Ask a Question
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose NyaySetu?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to connect legal professionals with those seeking knowledge while respecting
              regulatory boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Verified Professionals</h3>
              <p className="text-gray-600 text-center">
                All lawyers on our platform are verified through their Bar Council registration numbers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Quality Content</h3>
              <p className="text-gray-600 text-center">
                Access insightful articles and legal commentary from experienced professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Ethical Interaction</h3>
              <p className="text-gray-600 text-center">
                Our platform maintains strict ethical standards in accordance with Bar Council regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
            <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
            <p className="mt-4 text-lg text-gray-600">Find legal insights in your area of interest</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Register today to start sharing your legal knowledge or to learn from verified professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100"
            >
              Register Now
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-700"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Mock data for the homepage
const mockFeaturedPosts = [
  {
    id: 1,
    title: "Understanding the New Data Protection Bill",
    excerpt:
      "An analysis of India's new data protection legislation and its implications for businesses and individuals.",
    author: "Adv. Priya Sharma",
    date: "April 2, 2025",
    category: "Data Privacy",
    tags: ["Data Protection", "Legislation", "Privacy"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    isVerified: true,
    likes: 124,
    comments: 32,
  },
  {
    id: 2,
    title: "Supreme Court's Landmark Judgment on Environmental Law",
    excerpt: "Breaking down the recent Supreme Court decision that changes how environmental cases will be handled.",
    author: "Adv. Rajesh Kumar",
    date: "March 28, 2025",
    category: "Environmental Law",
    tags: ["Supreme Court", "Environment", "Judgment"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    isVerified: true,
    likes: 98,
    comments: 45,
  },
  {
    id: 3,
    title: "Startup Legal Compliance: A Comprehensive Guide",
    excerpt:
      "Everything founders need to know about legal compliance when starting and scaling their business in India.",
    author: "Adv. Vikram Mehta",
    date: "March 25, 2025",
    category: "Corporate Law",
    tags: ["Startups", "Compliance", "Business Law"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    isVerified: true,
    likes: 156,
    comments: 27,
  },
]

const mockCategories = [
  {
    id: 1,
    name: "Constitutional Law",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Fundamental rights, constitutional amendments, and interpretations",
    count: 42,
  },
  {
    id: 2,
    name: "Criminal Law",
    icon: <Shield className="h-6 w-6" />,
    description: "Criminal procedures, defenses, and recent developments",
    count: 38,
  },
  {
    id: 3,
    name: "Family Law",
    icon: <Award className="h-6 w-6" />,
    description: "Marriage, divorce, custody, and inheritance matters",
    count: 29,
  },
  {
    id: 4,
    name: "Corporate Law",
    icon: <Award className="h-6 w-6" />,
    description: "Business regulations, compliance, and corporate governance",
    count: 35,
  },
]

export default HomePage

