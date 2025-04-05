"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import {
  User,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Flag,
  ArrowLeft,
  MessageCircle,
  CheckCircle,
  Award,
  Share2,
  Bookmark,
  Tag,
  AlertTriangle,
} from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"

const QADetailPage = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [newAnswer, setNewAnswer] = useState("")
  const [sortBy, setSortBy] = useState("newest") // newest, votes

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      const foundQuestion = mockQuestions.find((q) => q.id === Number.parseInt(id))
      setQuestion(foundQuestion)

      if (foundQuestion) {
        setAnswers(mockAnswers.filter((a) => a.questionId === Number.parseInt(id)))
      }

      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [id])

  const handleAnswerSubmit = (e) => {
    e.preventDefault()

    if (!newAnswer.trim()) return

    // In a real app, this would be an API call
    const newAnswerObj = {
      id: answers.length + 1,
      questionId: Number.parseInt(id),
      content: newAnswer,
      answeredBy: "You",
      date: "Just now",
      isVerified: false,
      upvotes: 0,
      downvotes: 0,
    }

    setAnswers([...answers, newAnswerObj])
    setNewAnswer("")
  }

  const sortAnswers = () => {
    if (sortBy === "newest") {
      // Sort by date (newest first) - in a real app, you'd use actual date objects
      return [...answers].sort((a, b) => {
        if (a.date === "Just now") return -1
        if (b.date === "Just now") return 1
        return 0 // This is simplified, real implementation would compare dates
      })
    } else {
      // Sort by votes (highest first)
      return [...answers].sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes))
    }
  }

  const sortedAnswers = sortAnswers()

  if (loading) {
    return <LoadingScreen />
  }

  if (!question) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-md border border-amber-200 max-w-md">
          <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <MessageCircle className="h-8 w-8 text-amber-700" />
          </div>
          <h1 className="text-2xl font-bold text-amber-900 mb-4">Question Not Found</h1>
          <p className="text-amber-700 mb-6">The question you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/qa"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Q&A
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-amber-600">
            <li>
              <Link to="/" className="hover:text-amber-800">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/qa" className="hover:text-amber-800">
                Q&A
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-amber-800 font-medium truncate">{question.title}</li>
          </ol>
        </nav>

        {/* Question */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-amber-200">
          <div className="p-6">
            <div className="flex flex-wrap items-center mb-4 text-sm text-amber-600">
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

            <h1 className="text-2xl font-bold text-amber-900 mb-4">{question.title}</h1>
            <p className="text-amber-700 mb-6">{question.description}</p>

            <div className="flex flex-wrap justify-between items-center pt-4 border-t border-amber-100">
              <div className="flex space-x-4 mb-2 sm:mb-0">
                <button className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>{question.upvotes}</span>
                </button>
                <button className="flex items-center text-amber-600 hover:text-red-600 transition-colors">
                  <Flag className="h-5 w-5 mr-1" />
                  <span>Report</span>
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                  <Bookmark className="h-5 w-5 mr-1" />
                  <span className="sr-only md:not-sr-only text-sm">Save</span>
                </button>
                <button className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span className="sr-only md:not-sr-only text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Answers */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-amber-900">
              {answers.length} {answers.length === 1 ? "Answer" : "Answers"}
            </h2>
            <div className="flex items-center">
              <span className="text-sm text-amber-700 mr-2">Sort by:</span>
              <div className="flex border border-amber-200 rounded-md overflow-hidden">
                <button
                  onClick={() => setSortBy("newest")}
                  className={`px-3 py-1 text-sm ${
                    sortBy === "newest"
                      ? "bg-amber-100 text-amber-800 font-medium"
                      : "bg-white text-amber-600 hover:bg-amber-50"
                  }`}
                >
                  Newest
                </button>
                <button
                  onClick={() => setSortBy("votes")}
                  className={`px-3 py-1 text-sm ${
                    sortBy === "votes"
                      ? "bg-amber-100 text-amber-800 font-medium"
                      : "bg-white text-amber-600 hover:bg-amber-50"
                  }`}
                >
                  Votes
                </button>
              </div>
            </div>
          </div>

          {answers.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md border border-amber-200">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-amber-700" />
              </div>
              <p className="text-xl text-amber-800 font-medium mb-2">No answers yet.</p>
              <p className="text-amber-600 mb-6">Be the first to answer this question!</p>
              <a
                href="#answer-form"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700"
              >
                Write an Answer
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {sortedAnswers.map((answer) => (
                <div key={answer.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center text-sm text-amber-600">
                        <Clock className="h-4 w-4 mr-1 text-amber-500" />
                        <span>{answer.date}</span>
                      </div>
                      <div className="mx-2 text-amber-300">|</div>
                      <div className="flex items-center text-sm text-amber-600">
                        <User className="h-4 w-4 mr-1 text-amber-500" />
                        <span>{answer.answeredBy}</span>
                        {answer.isVerified && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified Lawyer
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="prose max-w-none mb-4 text-amber-700">
                      <p>{answer.content}</p>
                    </div>

                    {answer.isVerified && (
                      <div className="mb-4 flex items-start p-3 bg-amber-50 rounded-md border border-amber-200">
                        <Award className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-amber-700">
                          This answer is provided by a verified legal professional. However, it is for informational
                          purposes only and should not be considered as legal advice for your specific situation.
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-4 border-t border-amber-100">
                      <div className="flex space-x-4">
                        <button className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                          <ThumbsUp className="h-5 w-5 mr-1" />
                          <span>{answer.upvotes}</span>
                        </button>
                        <button className="flex items-center text-amber-600 hover:text-amber-800 transition-colors">
                          <ThumbsDown className="h-5 w-5 mr-1" />
                          <span>{answer.downvotes}</span>
                        </button>
                      </div>
                      <button className="flex items-center text-amber-600 hover:text-red-600 transition-colors">
                        <Flag className="h-5 w-5 mr-1" />
                        <span>Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Answer Form */}
        <div id="answer-form" className="bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-amber-200">
          <div className="p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Your Answer</h2>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong className="font-medium">Disclaimer:</strong> Answers provided here are for informational
                    purposes only and do not constitute legal advice. Please consult with a qualified legal professional
                    for advice specific to your situation.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleAnswerSubmit}>
              <div className="mb-4">
                <textarea
                  rows={6}
                  className="block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 bg-amber-50"
                  placeholder="Write your answer here..."
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Post Answer
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Related Questions */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-amber-200">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Related Questions</h2>
          <ul className="space-y-3">
            {mockQuestions
              .filter((q) => q.id !== question.id && q.category === question.category)
              .slice(0, 3)
              .map((q) => (
                <li key={q.id} className="border-b border-amber-100 pb-3 last:border-0 last:pb-0">
                  <Link to={`/qa/${q.id}`} className="hover:text-amber-700 text-amber-900 font-medium">
                    {q.title}
                  </Link>
                  <div className="flex items-center mt-1 text-sm text-amber-600">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    <span>{q.answers} answers</span>
                    <span className="mx-2">•</span>
                    <span>{q.upvotes} upvotes</span>
                  </div>
                </li>
              ))}
          </ul>
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
]

// Mock data for answers
const mockAnswers = [
  {
    id: 1,
    questionId: 1,
    content:
      "When you have employees working remotely across different states in India, you need to consider several legal aspects. First, you must comply with the labor laws of each state where your employees are located. This includes minimum wage requirements, working hours, leave policies, and other employment regulations that may vary by state. Second, for taxation, you need to register for professional tax in each state where you have employees if that state imposes such a tax. Additionally, you should ensure proper GST compliance if your services fall under its purview. Finally, consider setting up clear remote work policies that address data security, confidentiality, and work hours to avoid potential legal issues.",
    answeredBy: "Adv. Suresh Iyer",
    date: "April 3, 2025",
    isVerified: true,
    upvotes: 15,
    downvotes: 1,
  },
  {
    id: 2,
    questionId: 1,
    content:
      "In addition to what has been mentioned, you should also consider the implications of the Employees' Provident Fund (EPF) and Employees' State Insurance (ESI) regulations. These social security schemes have specific requirements regardless of where your employees are located. Also, ensure that your employment contracts clearly specify which state's jurisdiction applies in case of disputes. This can save you from potential legal complications in the future.",
    answeredBy: "Adv. Meera Reddy",
    date: "April 4, 2025",
    isVerified: true,
    upvotes: 80,
    downvotes: 0,
  },
  {
    id: 3,
    questionId: 2,
    content:
      "The Digital Personal Data Protection Act (DPDPA) has significant implications for small businesses. You need to implement proper consent mechanisms for collecting customer data, maintain transparency about how you use this data, and ensure you have adequate security measures in place. The law requires you to update your privacy policy to clearly state what data you collect, why you collect it, how long you retain it, and who you share it with. You must also provide customers with the right to access, correct, and delete their data. While there are some exemptions for small businesses, it's advisable to conduct a data audit and update your practices to ensure compliance.",
    answeredBy: "Adv. Priya Sharma",
    date: "April 2, 2025",
    isVerified: true,
    upvotes: 6,
    downvotes: 1,
  },
]

export default QADetailPage

