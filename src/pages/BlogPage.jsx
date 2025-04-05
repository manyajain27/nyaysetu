"use client"

import { useState, useEffect } from "react"
import { Search, Filter, ChevronDown } from "lucide-react"
import BlogCard from "../components/BlogCard"
import LoadingScreen from "../components/LoadingScreen"

const BlogPage = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setPosts(mockPosts)
      setFilteredPosts(mockPosts)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Filter posts based on search term and category
    let results = posts

    if (searchTerm) {
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      results = results.filter((post) => post.category === selectedCategory)
    }

    setFilteredPosts(results)
  }, [searchTerm, selectedCategory, posts])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const categories = [...new Set(posts.map((post) => post.category))]

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Legal Insights & Articles</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore articles and insights from verified legal professionals across various domains of law
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search articles, topics, or authors..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            <div className={`md:flex items-center gap-4 ${showFilters ? "block" : "hidden"} mt-4 md:mt-0`}>
              <div className="flex items-center">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mr-2">
                  Category:
                </label>
                <select
                  id="category"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            Showing {filteredPosts.length} of {posts.length} articles
          </p>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Mock data for blog posts
const mockPosts = [
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
  {
    id: 4,
    title: "Intellectual Property Rights in the Digital Age",
    excerpt: "How to protect your intellectual property in an increasingly digital world with evolving challenges.",
    author: "Adv. Neha Patel",
    date: "March 20, 2025",
    category: "Intellectual Property",
    tags: ["IP Rights", "Digital", "Copyright"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    isVerified: true,
    likes: 87,
    comments: 19,
  },
  {
    id: 5,
    title: "Labor Law Amendments: Impact on Employers and Employees",
    excerpt: "A detailed analysis of recent amendments to labor laws and how they affect workplace dynamics.",
    author: "Adv. Suresh Iyer",
    date: "March 15, 2025",
    category: "Labor Law",
    tags: ["Employment", "Labor Rights", "Workplace"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    isVerified: false,
    likes: 112,
    comments: 38,
  },
  {
    id: 6,
    title: "Consumer Protection in E-commerce: New Guidelines",
    excerpt: "Understanding the new consumer protection guidelines specifically targeting e-commerce platforms.",
    author: "Adv. Anita Desai",
    date: "March 10, 2025",
    category: "Consumer Law",
    tags: ["E-commerce", "Consumer Rights", "Regulations"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    isVerified: true,
    likes: 76,
    comments: 23,
  },
]

export default BlogPage

