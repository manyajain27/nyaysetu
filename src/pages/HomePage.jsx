"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  Shield,
  Search,
  Users,
  TrendingUp,
  Scale,
  Gavel,
  CheckCircle,
  FileText,
  Clock,
  ChevronRight,
  ExternalLink,
} from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"
import ContributorCard from "../components/ContributorCard"

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [topContributors, setTopContributors] = useState([])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setFeaturedPosts(mockFeaturedPosts)
      setCategories(mockCategories)
      setTopContributors(mockContributors)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section - More elegant and professional */}
      <section className="relative bg-gradient-to-r from-amber-950 via-amber-600 to-amber-950 text-white py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg width="100%" height="100%">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-amber-500 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="bg-amber-800/50 p-4 rounded-full border-2 border-amber-500/30 mr-4">
                <Scale className="h-16 w-16 text-amber-200" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-amber-50">
                <span className="font-devanagari text-amber-200">न्यायसेतु</span>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl mb-4 max-w-3xl mx-auto text-amber-100 font-light">The Legal Bridge</p>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-amber-200">
              Connecting legal professionals with those seeking knowledge while respecting all regulatory boundaries
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-medium rounded-lg text-amber-950 bg-amber-100 hover:bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <BookOpen className="mr-3 h-5 w-5" />
                Browse Articles
              </Link>
              <Link
                to="/qa"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-200 text-lg font-medium rounded-lg text-amber-100 bg-transparent hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Ask a Question
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg border border-amber-700/50 shadow-lg">
              <div className="text-3xl font-bold text-amber-100">1,200+</div>
              <div className="text-amber-300">Verified Lawyers</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg border border-amber-700/50 shadow-lg">
              <div className="text-3xl font-bold text-amber-100">25,000+</div>
              <div className="text-amber-300">Questions Answered</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg border border-amber-700/50 shadow-lg">
              <div className="text-3xl font-bold text-amber-100">500+</div>
              <div className="text-amber-300">Legal Articles</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg border border-amber-700/50 shadow-lg">
              <div className="text-3xl font-bold text-amber-100">50,000+</div>
              <div className="text-amber-300">Monthly Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="relative z-20 bg-amber-50 py-8">
        <div className="max-w-4xl mx-auto px-4 -mt-12 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-6 border border-amber-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-amber-600" />
                </div>
                <input
                  type="text"
                  className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 pr-3 py-4 sm:text-sm border-amber-300 rounded-lg bg-amber-50 text-amber-900 placeholder-amber-500"
                  placeholder="Search legal topics, questions, or keywords..."
                />
              </div>
              <Link
                to="/search"
                className="bg-amber-800 text-amber-50 px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center font-medium shadow-md"
              >
                Search Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - New */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-950">How NyaySetu Works</h2>
            <div className="mt-4 text-lg text-amber-800 max-w-3xl mx-auto">
              Our platform bridges the gap between legal professionals and those seeking knowledge
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-200 h-full">
                <div className="absolute -top-5 -left-5 flex items-center justify-center w-10 h-10 bg-amber-800 text-white rounded-full font-bold shadow-lg">
                  1
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl mb-6 mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-amber-900">Join the Community</h3>
                <p className="text-amber-800 text-center">
                  Create an account as a user seeking knowledge or as a legal professional willing to share expertise.
                </p>
                <div className="mt-6 text-center">
                  <Link
                    to="/register"
                    className="inline-flex items-center text-amber-800 hover:text-amber-600 font-medium"
                  >
                    Register Now <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 text-amber-500">
                <ArrowRight className="h-10 w-10" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-200 h-full">
                <div className="absolute -top-5 -left-5 flex items-center justify-center w-10 h-10 bg-amber-800 text-white rounded-full font-bold shadow-lg">
                  2
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl mb-6 mx-auto">
                  {/* For lawyers */}
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-amber-900">Verification Process</h3>
                <p className="text-amber-800 text-center">
                  Legal professionals undergo verification through their Bar Council credentials to receive a verified
                  badge.
                </p>
                <div className="mt-6 text-center">
                  <Link
                    to="/verification"
                    className="inline-flex items-center text-amber-800 hover:text-amber-600 font-medium"
                  >
                    Get Verified <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2 text-amber-500">
                <ArrowRight className="h-10 w-10" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-200 h-full">
                <div className="absolute -top-5 -left-5 flex items-center justify-center w-10 h-10 bg-amber-800 text-white rounded-full font-bold shadow-lg">
                  3
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl mb-6 mx-auto">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-amber-900">Share & Learn</h3>
                <p className="text-amber-800 text-center">
                  Lawyers share insights through articles and Q&A, while users gain valuable legal knowledge.
                </p>
                <div className="mt-6 text-center">
                  <Link to="/blog" className="inline-flex items-center text-amber-800 hover:text-amber-600 font-medium">
                    Explore Content <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with more modern cards */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-950">Why Choose NyaySetu?</h2>
            <div className="mt-4 text-lg text-amber-800 max-w-3xl mx-auto">
              Our platform is designed to make legal knowledge accessible while maintaining the highest ethical
              standards
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-amber-200">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl mb-6 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">Verified Professionals</h3>
              <p className="text-amber-800 text-center">
                Every legal professional on our platform undergoes rigorous verification through their Bar Council
                credentials, ensuring authenticity and trustworthiness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-amber-200">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl mb-6 mx-auto">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">Quality Content</h3>
              <p className="text-amber-800 text-center">
                Access insightful articles, expert commentary, and comprehensive analyses of legal developments from
                experienced professionals across India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-amber-200">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl mb-6 mx-auto">
                <Gavel className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">Ethical Interaction</h3>
              <p className="text-amber-800 text-center">
                Our platform maintains strict adherence to Bar Council regulations, ensuring all information sharing
                stays within ethical and professional boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section with improved styling */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-amber-950">Featured Articles</h2>
              <p className="mt-2 text-amber-800">Latest insights from legal experts</p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-800 text-amber-50 hover:bg-amber-700 transition-colors font-medium shadow-md"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200 hover:shadow-lg transition-all"
              >
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={post.imageUrl || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-amber-700 mb-2">
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    {post.isVerified && (
                      <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Verified Author
                      </span>
                    )}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-amber-900 mb-2 hover:text-amber-700">{post.title}</h3>
                  </Link>
                  <p className="text-amber-800 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-amber-100">
                    <div className="flex items-center text-sm text-amber-700">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-amber-800 hover:text-amber-600 font-medium text-sm"
                    >
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-amber-950">Top Legal Contributors</h2>
              <p className="mt-2 text-amber-800">Meet our verified legal professionals</p>
            </div>
            <Link
              to="/contributors"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-800 text-amber-50 hover:bg-amber-700 transition-colors font-medium shadow-md"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topContributors.map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section with improved cards */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-950">Browse by Category</h2>
            <p className="mt-4 text-lg text-amber-800">Explore legal insights in your area of interest</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg hover:border-amber-400 transition-all text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-full mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{category.name}</h3>
                  <p className="text-amber-800 text-sm mb-3">{category.description}</p>
                  <div className="text-amber-700 text-sm font-medium">{category.count} articles</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-950">What Our Users Say</h2>
            <p className="mt-4 text-lg text-amber-800">Testimonials from our community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-amber-200 relative shadow-md">
              <div className="absolute -top-4 left-8 text-amber-500 text-6xl opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-amber-800 italic mb-6">
                  "NyaySetu has been invaluable for my practice. Being able to share insights without crossing ethical
                  boundaries has helped me connect with those seeking legal knowledge. The platform's verification
                  process gives users confidence in the information they receive."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold text-xl">
                    RS
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-amber-900">Adv. Raghav Sharma</p>
                    <p className="text-amber-700 text-sm">Constitutional Law Expert</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-amber-200 relative shadow-md">
              <div className="absolute -top-4 left-8 text-amber-500 text-6xl opacity-30">"</div>
              <div className="relative z-10">
                <p className="text-amber-800 italic mb-6">
                  "As a law student, I've found the Q&A section to be extremely helpful. Getting insights from verified
                  lawyers has deepened my understanding of complex legal topics. The content is educational without
                  crossing into specific legal advice."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold text-xl">
                    MP
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-amber-900">Meera Patel</p>
                    <p className="text-amber-700 text-sm">Law Student, NLU Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Legal Updates Section - New */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-950">Latest Legal Updates</h2>
            <p className="mt-4 text-lg text-amber-800">Stay informed about recent legal developments</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-amber-100">
              {legalUpdates.map((update, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {update.category}
                    </div>
                    <span className="mx-2 text-amber-300">•</span>
                    <span className="text-amber-700 text-sm">{update.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">{update.title}</h3>
                  <p className="text-amber-800 text-sm mb-4 line-clamp-2">{update.description}</p>
                  <a
                    href={update.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-800 hover:text-amber-600 font-medium text-sm"
                  >
                    Read Source <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More engaging and modern */}
      <section className="bg-gradient-to-br from-amber-950 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-amber-100">Ready to Join Our Legal Community?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-amber-200">
            Register today to start sharing your legal knowledge or to learn from India's verified legal professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-medium rounded-lg text-amber-950 bg-amber-100 hover:bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Create Your Account
            </Link>
            <Link
              to="/verification"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-200 text-lg font-medium rounded-lg text-amber-100 bg-transparent hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Verify as a Legal Professional
            </Link>
          </div>
          <div className="mt-12 text-center">
            <p className="text-amber-300">Already have an account?</p>
            <Link to="/login" className="text-amber-100 font-medium hover:underline inline-flex items-center mt-2">
              Sign In <ArrowRight className="ml-1 h-4 w-4" />
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
    icon: <Users className="h-6 w-6" />,
    description: "Marriage, divorce, custody, and inheritance matters",
    count: 29,
  },
  {
    id: 4,
    name: "Corporate Law",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Business regulations, compliance, and corporate governance",
    count: 35,
  },
]

const mockContributors = [
  {
    id: 1,
    name: "Adv. Ramesh Joshi",
    avatar: "/placeholder.svg?height=50&width=50",
    expertise: "Constitutional Law",
    isVerified: true,
    rating: 4.9,
    articles: 28,
    answers: 143,
  },
  {
    id: 2,
    name: "Adv. Sunita Patel",
    avatar: "/placeholder.svg?height=50&width=50",
    expertise: "Family Law",
    isVerified: true,
    rating: 4.8,
    articles: 19,
    answers: 92,
  },
  {
    id: 3,
    name: "Adv. Amitabh Singh",
    avatar: "/placeholder.svg?height=50&width=50",
    expertise: "Criminal Law",
    isVerified: true,
    rating: 4.7,
    articles: 15,
    answers: 126,
  },
  {
    id: 4,
    name: "Adv. Priya Mehta",
    avatar: "/placeholder.svg?height=50&width=50",
    expertise: "Corporate Law",
    isVerified: true,
    rating: 4.9,
    articles: 32,
    answers: 187,
  },
]

const legalUpdates = [
  {
    title: "Supreme Court Issues New Guidelines on Bail Applications",
    description:
      "The Supreme Court has issued comprehensive guidelines to streamline the process of bail applications across all courts in India, emphasizing the principle of 'bail, not jail' as the norm.",
    date: "April 5, 2025",
    category: "Criminal Law",
    source: "#",
  },
  {
    title: "Parliament Passes Amendment to Arbitration Act",
    description:
      "The Parliament has passed significant amendments to the Arbitration and Conciliation Act, aiming to make India a hub for international commercial arbitration.",
    date: "March 30, 2025",
    category: "Commercial Law",
    source: "#",
  },
  {
    title: "New Digital Competition Bill Introduced",
    description:
      "The government has introduced a new Digital Competition Bill to regulate big tech companies and ensure fair competition in digital markets.",
    date: "March 25, 2025",
    category: "Technology Law",
    source: "#",
  },
]

export default HomePage

