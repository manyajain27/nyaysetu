"use client"

import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { Search, BookOpen, MessageSquare, User } from "lucide-react"
import BlogCard from "../components/BlogCard"
import LoadingScreen from "../components/LoadingScreen"

const SearchResultsPage = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get("q") || ""

  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState({
    articles: [],
    questions: [],
    profiles: [],
  })
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState(query)

  useEffect(() => {
    // Simulate search API call
    const fetchResults = async () => {
      setLoading(true)

      // In a real app, this would be an API call with the query
      setTimeout(() => {
        // Filter mock data based on query
        const filteredArticles = mockArticles.filter(
          (article) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(query.toLowerCase()),
        )

        const filteredQuestions = mockQuestions.filter(
          (question) =>
            question.title.toLowerCase().includes(query.toLowerCase()) ||
            question.description.toLowerCase().includes(query.toLowerCase()),
        )

        const filteredProfiles = mockProfiles.filter(
          (profile) =>
            profile.name.toLowerCase().includes(query.toLowerCase()) ||
            profile.title.toLowerCase().includes(query.toLowerCase()) ||
            (profile.specializations &&
              profile.specializations.some((spec) => spec.toLowerCase().includes(query.toLowerCase()))),
        )

        setResults({
          articles: filteredArticles,
          questions: filteredQuestions,
          profiles: filteredProfiles,
        })

        setLoading(false)
      }, 1000)
    }

    if (query) {
      fetchResults()
    } else {
      setLoading(false)
    }
  }, [query])

  const handleSearch = (e) => {
    e.preventDefault()
    // Update URL with new search query
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`)
    // Trigger the search effect
    const newSearchParams = new URLSearchParams(location.search)
    newSearchParams.set("q", searchQuery)
    window.dispatchEvent(new Event("popstate"))
  }

  const totalResults = results.articles.length + results.questions.length + results.profiles.length

  const getFilteredResults = () => {
    switch (activeTab) {
      case "articles":
        return { articles: results.articles, questions: [], profiles: [] }
      case "questions":
        return { articles: [], questions: results.questions, profiles: [] }
      case "profiles":
        return { articles: [], questions: [], profiles: results.profiles }
      default:
        return results
    }
  }

  const filteredResults = getFilteredResults()

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search for articles, questions, or lawyers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Search Results */}
        {query ? (
          <>
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === "all"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    All Results ({totalResults})
                  </button>
                  <button
                    onClick={() => setActiveTab("articles")}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === "articles"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <BookOpen className="h-5 w-5 inline mr-2" />
                    Articles ({results.articles.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("questions")}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === "questions"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <MessageSquare className="h-5 w-5 inline mr-2" />
                    Questions ({results.questions.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("profiles")}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === "profiles"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <User className="h-5 w-5 inline mr-2" />
                    Lawyers ({results.profiles.length})
                  </button>
                </nav>
              </div>
            </div>

            {totalResults === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">No results found</h2>
                <p className="text-gray-600 mb-4">
                  We couldn't find any matches for "{query}". Please try another search.
                </p>
                <div className="mt-4 text-gray-600">
                  <p>Suggestions:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Check your spelling</li>
                    <li>Try more general keywords</li>
                    <li>Try different keywords</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Articles Section */}
                {filteredResults.articles.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResults.articles.map((article) => (
                        <BlogCard key={article.id} post={article} />
                      ))}
                    </div>
                    {activeTab === "all" && results.articles.length > 3 && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => setActiveTab("articles")}
                          className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          View all {results.articles.length} articles
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Questions Section */}
                {filteredResults.questions.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Questions</h2>
                    <div className="space-y-4">
                      {filteredResults.questions.map((question) => (
                        <div key={question.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="p-6">
                            <Link to={`/qa/${question.id}`}>
                              <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-indigo-600">
                                {question.title}
                              </h3>
                            </Link>
                            <p className="text-gray-600 mb-4">{question.description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                <span>{question.askedBy}</span>
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                <span>{question.answers} answers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {activeTab === "all" && results.questions.length > 3 && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => setActiveTab("questions")}
                          className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          View all {results.questions.length} questions
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Profiles Section */}
                {filteredResults.profiles.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Lawyers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResults.profiles.map((profile) => (
                        <div key={profile.username} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="p-6">
                            <div className="flex items-center mb-4">
                              {profile.avatar ? (
                                <img
                                  src={profile.avatar || "/placeholder.svg"}
                                  alt={profile.name}
                                  className="h-12 w-12 rounded-full mr-4"
                                />
                              ) : (
                                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                                  <User className="h-6 w-6 text-indigo-600" />
                                </div>
                              )}
                              <div>
                                <Link to={`/profile/${profile.username}`}>
                                  <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600">
                                    {profile.name}
                                  </h3>
                                </Link>
                                <p className="text-sm text-gray-600">{profile.title}</p>
                              </div>
                            </div>
                            {profile.specializations && (
                              <div className="mt-2 mb-4">
                                <div className="flex flex-wrap gap-2">
                                  {profile.specializations.slice(0, 3).map((spec, index) => (
                                    <span
                                      key={index}
                                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                    >
                                      {spec}
                                    </span>
                                  ))}
                                  {profile.specializations.length > 3 && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                      +{profile.specializations.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                            <Link
                              to={`/profile/${profile.username}`}
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    {activeTab === "all" && results.profiles.length > 3 && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => setActiveTab("profiles")}
                          className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          View all {results.profiles.length} lawyers
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Enter a search term</h2>
            <p className="text-gray-600">Search for articles, questions, or lawyers on NyaySetu.</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Mock data for articles
const mockArticles = [
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
]

// Mock data for questions
const mockQuestions = [
  {
    id: 1,
    title: "What are the legal implications of remote work for companies with employees in multiple states?",
    description:
      "Our company has employees working remotely across different states in India. What are the legal considerations we need to be aware of regarding taxation, labor laws, and compliance?",
    askedBy: "Rahul Sharma",
    date: "April 3, 2025",
    category: "Labor Law",
    answers: 4,
  },
  {
    id: 2,
    title: "How does the new Digital Personal Data Protection Act affect small businesses?",
    description:
      "I run a small e-commerce business. What are my obligations under the new data protection law? Do I need to make significant changes to my privacy policy and data handling practices?",
    askedBy: "Priya Patel",
    date: "April 1, 2025",
    category: "Data Privacy",
    answers: 3,
  },
]

// Mock data for profiles
const mockProfiles = [
  {
    username: "priya-sharma",
    name: "Adv. Priya Sharma",
    title: "Senior Partner, Tech Law Associates",
    specializations: ["Data Privacy", "Technology Law", "Intellectual Property"],
  },
  {
    username: "rajesh-kumar",
    name: "Adv. Rajesh Kumar",
    title: "Environmental Law Specialist",
    specializations: ["Environmental Law", "Public Interest Litigation", "Constitutional Law"],
  },
]

export default SearchResultsPage

