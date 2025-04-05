"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, Filter, ChevronDown, MessageCircle, ThumbsUp, User, Clock } from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"

const QAPage = () => {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState([])
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setQuestions(mockQuestions)
      setFilteredQuestions(mockQuestions)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Filter questions based on search term and category
    let results = questions

    if (searchTerm) {
      results = results.filter(
        (question) =>
          question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          question.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      results = results.filter((question) => question.category === selectedCategory)
    }

    setFilteredQuestions(results)
  }, [searchTerm, selectedCategory, questions])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const categories = [...new Set(questions.map((question) => question.category))]

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Legal Q&A Forum</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ask questions and get insights from verified legal professionals
          </p>
          <div className="mt-6">
            <Link
              to="/ask-question"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask a Question
            </Link>
          </div>
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
                placeholder="Search questions or topics..."
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

        {/* Questions List */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            Showing {filteredQuestions.length} of {questions.length} questions
          </p>

          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-xl text-gray-600">No questions found matching your criteria.</p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters, or be the first to ask a question.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((question) => (
                <div key={question.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{question.date}</span>
                      </div>
                      <div className="mx-2 text-gray-300">|</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>{question.askedBy}</span>
                      </div>
                      <div className="mx-2 text-gray-300">|</div>
                      <div className="text-sm text-gray-500">
                        <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                          {question.category}
                        </span>
                      </div>
                    </div>

                    <Link to={`/qa/${question.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600">{question.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{question.description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <div className="flex items-center text-gray-500 text-sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{question.answers} answers</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{question.upvotes}</span>
                        </div>
                      </div>
                      <Link
                        to={`/qa/${question.id}`}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                      >
                        View Question
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

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
    upvotes: 12,
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
    upvotes: 8,
  },
  {
    id: 3,
    title: "What legal documents are required to start a partnership firm in India?",
    description:
      "I'm planning to start a partnership business with two friends. What legal documents do we need to prepare and file? Are there any specific compliance requirements we should be aware of?",
    askedBy: "Vikram Singh",
    date: "March 30, 2025",
    category: "Corporate Law",
    answers: 5,
    upvotes: 15,
  },
  {
    id: 4,
    title: "Can a tenant refuse to vacate after the lease period ends?",
    description:
      "I rented out my property with a 11-month lease agreement which has now expired. The tenant is refusing to vacate despite multiple notices. What legal recourse do I have?",
    askedBy: "Anjali Desai",
    date: "March 28, 2025",
    category: "Property Law",
    answers: 6,
    upvotes: 18,
  },
  {
    id: 5,
    title: "What are the legal requirements for registering a trademark in India?",
    description:
      "I've created a brand name and logo for my new business. What's the process for trademark registration in India? How long does it typically take and what protection does it offer?",
    askedBy: "Rajesh Kumar",
    date: "March 25, 2025",
    category: "Intellectual Property",
    answers: 2,
    upvotes: 7,
  },
]

export default QAPage

