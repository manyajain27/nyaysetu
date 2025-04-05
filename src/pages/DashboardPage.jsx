"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for demonstration
  const mockStats = {
    posts: 12,
    questions: 8,
    answers: 24,
    views: 3450,
    followers: 78,
  }

  const mockPosts = [
    {
      id: 1,
      title: "Understanding the New Data Protection Bill",
      date: "2023-11-15",
      status: "published",
      views: 1245,
      comments: 18,
    },
    {
      id: 2,
      title: "Analysis of Recent Supreme Court Judgment on Property Rights",
      date: "2023-10-28",
      status: "published",
      views: 876,
      comments: 12,
    },
    {
      id: 3,
      title: "Legal Implications of AI in Judicial Decision Making",
      date: "2023-10-05",
      status: "draft",
      views: 0,
      comments: 0,
    },
    {
      id: 4,
      title: "Comparative Study: Environmental Laws in India and EU",
      date: "2023-09-20",
      status: "published",
      views: 542,
      comments: 7,
    },
  ]

  const mockQuestions = [
    {
      id: 1,
      title: "What are the legal requirements for starting a fintech company?",
      date: "2023-11-10",
      status: "answered",
      answers: 3,
      views: 245,
    },
    {
      id: 2,
      title: "Can a tenant claim ownership after 12 years of possession?",
      date: "2023-10-22",
      status: "pending",
      answers: 0,
      views: 112,
    },
    {
      id: 3,
      title: "What are the implications of the new labor codes on gig workers?",
      date: "2023-09-15",
      status: "answered",
      answers: 2,
      views: 189,
    },
  ]

  const mockAnswers = [
    {
      id: 1,
      questionTitle: "What are the legal requirements for starting a fintech company?",
      date: "2023-11-12",
      upvotes: 15,
    },
    {
      id: 2,
      questionTitle: "How does the new arbitration amendment affect international disputes?",
      date: "2023-10-30",
      upvotes: 8,
    },
    {
      id: 3,
      questionTitle: "What are the implications of the new labor codes on gig workers?",
      date: "2023-09-18",
      upvotes: 12,
    },
  ]

  const mockNotifications = [
    {
      id: 1,
      type: "comment",
      content: 'Rajesh Kumar commented on your post "Understanding the New Data Protection Bill"',
      date: "2023-11-18",
      isRead: false,
    },
    {
      id: 2,
      type: "answer",
      content:
        'Your answer was selected as the best answer for "What are the legal requirements for starting a fintech company?"',
      date: "2023-11-15",
      isRead: true,
    },
    {
      id: 3,
      type: "follow",
      content: "Priya Sharma started following you",
      date: "2023-11-10",
      isRead: true,
    },
    {
      id: 4,
      type: "mention",
      content: "You were mentioned in a comment by Amit Patel",
      date: "2023-11-05",
      isRead: true,
    },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Content Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Blog Posts</p>
                    <p className="text-2xl font-bold text-indigo-600">{mockStats.posts}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Questions</p>
                    <p className="text-2xl font-bold text-indigo-600">{mockStats.questions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Answers</p>
                    <p className="text-2xl font-bold text-indigo-600">{mockStats.answers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Views</p>
                    <p className="text-2xl font-bold text-indigo-600">{mockStats.views}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Status</h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-indigo-700">Profile Completion</span>
                    <span className="text-sm font-medium text-indigo-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Complete your profile to increase visibility and credibility.
                </p>
                <Link to="/profile/edit" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Complete Profile →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/blog/create"
                    className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Write a Blog Post
                  </Link>
                  <Link
                    to="/qa/ask"
                    className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Ask a Question
                  </Link>
                  <Link
                    to="/verification"
                    className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Verify as Legal Expert
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {mockNotifications.map((notification) => (
                  <div key={notification.id} className={`px-6 py-4 ${!notification.isRead ? "bg-indigo-50" : ""}`}>
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 h-2 w-2 rounded-full mt-1.5 ${
                          !notification.isRead ? "bg-indigo-600" : "bg-transparent"
                        }`}
                      ></div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-800">{notification.content}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 bg-gray-50 text-right">
                <Link to="/notifications" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View All Notifications
                </Link>
              </div>
            </div>
          </div>
        )

      case "posts":
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">My Blog Posts</h3>
              <Link
                to="/blog/create"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                New Post
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Views
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Comments
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockPosts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Link to={`/blog/post/${post.id}`} className="hover:text-indigo-600">
                          {post.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            post.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {post.status === "published" ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.views}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.comments}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-3 justify-end">
                          <Link to={`/blog/edit/${post.id}`} className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </Link>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case "questions":
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">My Questions</h3>
              <Link
                to="/qa/ask"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ask Question
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Question
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Answers
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Views
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockQuestions.map((question) => (
                    <tr key={question.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <Link to={`/qa/question/${question.id}`} className="hover:text-indigo-600">
                          {question.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{question.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            question.status === "answered"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {question.status === "answered" ? "Answered" : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{question.answers}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{question.views}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to={`/qa/question/${question.id}`} className="text-indigo-600 hover:text-indigo-900">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case "answers":
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">My Answers</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {mockAnswers.map((answer) => (
                <div key={answer.id} className="px-6 py-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        <Link to={`/qa/question/${answer.id}`} className="hover:text-indigo-600">
                          {answer.questionTitle}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">Answered on {answer.date}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">{answer.upvotes} upvotes</span>
                      <Link to={`/qa/question/${answer.id}`} className="text-sm text-indigo-600 hover:text-indigo-900">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your content, track your activity, and engage with the community
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Link
              to="/profile"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Profile
            </Link>
            <Link
              to="/profile/edit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-1/4 py-4 px-1 text-center border-b-2 text-sm font-medium ${
                  activeTab === "overview"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("posts")}
                className={`w-1/4 py-4 px-1 text-center border-b-2 text-sm font-medium ${
                  activeTab === "posts"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab("questions")}
                className={`w-1/4 py-4 px-1 text-center border-b-2 text-sm font-medium ${
                  activeTab === "questions"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Questions
              </button>
              <button
                onClick={() => setActiveTab("answers")}
                className={`w-1/4 py-4 px-1 text-center border-b-2 text-sm font-medium ${
                  activeTab === "answers"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Answers
              </button>
            </nav>
          </div>
        </div>

        {renderTabContent()}
      </div>
    </div>
  )
}

export default DashboardPage

