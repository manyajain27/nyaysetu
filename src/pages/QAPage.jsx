"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, Filter, ChevronDown, MessageCircle, ThumbsUp, User, Clock, Tag, ArrowRight } from "lucide-react"
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
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Legal Q&A Forum</h1>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Ask questions and get insights from verified legal professionals
          </p>
          <div className="mt-8">
            <Link
              to="/ask-question"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-amber-800 hover:bg-amber-700 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask a Question
            </Link>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-amber-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-amber-300 rounded-lg leading-5 bg-amber-50 placeholder-amber-400 focus:outline-none focus:placeholder-amber-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="Search questions or topics..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center px-4 py-2 border border-amber-300 rounded-md text-sm font-medium text-amber-700 bg-white hover:bg-amber-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            <div className={`md:flex items-center gap-4 ${showFilters ? "block" : "hidden"} mt-4 md:mt-0`}>
              <div className="flex items-center">
                <label htmlFor="category" className="block text-sm font-medium text-amber-700 mr-2">
                  Category:
                </label>
                <select
                  id="category"
                  className="block w-full pl-3 pr-10 py-2 text-base border-amber-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md bg-amber-50"
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
          <div className="flex justify-between items-center mb-6">
            <p className="text-amber-700">
              Showing {filteredQuestions.length} of {questions.length} questions
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm font-medium rounded-md bg-amber-100 text-amber-800 border border-amber-200">
                Recent
              </button>
              <button className="px-3 py-1 text-sm font-medium rounded-md bg-white text-amber-700 border border-amber-200 hover:bg-amber-50">
                Popular
              </button>
              <button className="px-3 py-1 text-sm font-medium rounded-md bg-white text-amber-700 border border-amber-200 hover:bg-amber-50">
                Unanswered
              </button>
            </div>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-md border border-amber-200">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-amber-700" />
              </div>
              <p className="text-xl text-amber-800 font-medium mb-2">No questions found matching your criteria.</p>
              <p className="text-amber-600 mb-8">
                Try adjusting your search or filters, or be the first to ask a question.
              </p>
              <Link
                to="/ask-question"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-800 hover:bg-amber-700"
              >
                Ask a Question
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredQuestions.map((question) => (
                <div
                  key={question.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-center mb-3 text-sm text-amber-600">
                      <div className="flex items-center mr-4 mb-2">
                        <Clock className="h-4 w-4 mr-1 text-amber-500" />
                        <span>{question.date}</span>
                      </div>
                      <div className="flex items-center mr-4 mb-2">
                        <User className="h-4 w-4 mr-1 text-amber-500" />
                        <span>{question.askedBy}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 mr-1 text-amber-500" />
                        <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                          {question.category}
                        </span>
                      </div>
                    </div>

                    <Link to={`/qa/${question.id}`}>
                      <h3 className="text-xl font-bold text-amber-900 mb-3 hover:text-amber-700 transition-colors">
                        {question.title}
                      </h3>
                    </Link>
                    <p className="text-amber-700 mb-4">{question.description}</p>

                    <div className="flex justify-between items-center pt-4 border-t border-amber-100">
                      <div className="flex space-x-4">
                        <div className="flex items-center text-amber-600 text-sm">
                          <MessageCircle className="h-4 w-4 mr-1 text-amber-500" />
                          <span>{question.answers} answers</span>
                        </div>
                        <div className="flex items-center text-amber-600 text-sm">
                          <ThumbsUp className="h-4 w-4 mr-1 text-amber-500" />
                          <span>{question.upvotes}</span>
                        </div>
                      </div>
                      <Link
                        to={`/qa/${question.id}`}
                        className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-900"
                      >
                        View Question
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Popular Topics Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Popular Legal Topics</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Property Law",
              "Family Law",
              "Criminal Law",
              "Corporate Law",
              "Intellectual Property",
              "Labor Law",
              "Tax Law",
              "Constitutional Law",
            ].map((topic) => (
              <Link
                key={topic}
                to={`/qa/topic/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-amber-100 text-amber-800 border border-amber-200 hover:bg-amber-200 transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-800 to-amber-700 rounded-lg shadow-lg p-8 text-white">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Have a legal question?</h2>
              <p className="text-amber-100">Get insights from verified legal professionals across India</p>
            </div>
            <Link
              to="/ask-question"
              className="inline-flex items-center px-6 py-3 border border-amber-200 text-base font-medium rounded-lg shadow-md text-amber-800 bg-white hover:bg-amber-50 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Your Question
            </Link>
          </div>
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

