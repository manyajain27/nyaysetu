"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const AskQuestionPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    tags: "",
    isAnonymous: false,
  })

  const categories = [
    "Constitutional Law",
    "Criminal Law",
    "Civil Law",
    "Family Law",
    "Corporate Law",
    "Intellectual Property",
    "Tax Law",
    "Labor Law",
    "Environmental Law",
    "Other",
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would normally submit the question to an API
    console.log("Question submitted:", formData)
    alert("Your question has been submitted successfully!")
    // Reset form
    setFormData({
      title: "",
      category: "",
      description: "",
      tags: "",
      isAnonymous: false,
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ask a Legal Question</h1>
          <p className="mt-3 text-lg text-gray-500">Get answers from verified legal experts</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <div className="mb-6 p-4 bg-indigo-50 rounded-md border border-indigo-100">
            <h2 className="text-lg font-medium text-indigo-800 mb-2">Guidelines for asking questions</h2>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Be specific and provide relevant details</li>
              <li>• Avoid sharing personally identifiable information</li>
              <li>• Check if your question has already been answered</li>
              <li>• Be respectful and clear in your communication</li>
              <li>• Understand that responses are general legal information, not legal advice</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Question Title*
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="E.g., What are my rights as a tenant in a rental dispute?"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Legal Category*
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Question Details*
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide all relevant details about your legal question. The more specific you are, the better answers you'll receive."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                id="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="E.g., property, rental, eviction"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Adding relevant tags helps your question reach the right experts
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="isAnonymous"
                name="isAnonymous"
                type="checkbox"
                checked={formData.isAnonymous}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="isAnonymous" className="ml-2 block text-sm text-gray-700">
                Post anonymously (your username will not be displayed)
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Question
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this question, you agree to our{" "}
              <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Want to browse existing questions?{" "}
            <Link to="/qa" className="text-indigo-600 font-medium hover:text-indigo-500">
              Go to Q&A Forum
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AskQuestionPage

