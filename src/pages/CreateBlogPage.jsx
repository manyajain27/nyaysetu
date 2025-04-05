"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    category: "",
    tags: "",
    coverImage: null,
    isDraft: false,
  })

  const [previewImage, setPreviewImage] = useState(null)

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
    "Legal Education",
    "Case Analysis",
    "Legal News",
    "Other",
  ]

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file" && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0],
      })

      // Create a preview URL for the image
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(files[0])
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would normally submit the blog post to an API
    console.log("Blog post submitted:", formData)
    alert(formData.isDraft ? "Your draft has been saved!" : "Your blog post has been published!")
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Create a Blog Post</h1>
          <p className="mt-3 text-lg text-gray-500">Share your legal expertise and insights with the community</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Blog Title*
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a compelling title for your blog post"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                Summary*
              </label>
              <textarea
                id="summary"
                name="summary"
                rows={2}
                required
                value={formData.summary}
                onChange={handleChange}
                placeholder="Write a brief summary of your blog post (150-200 characters)"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category*
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
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Blog Content*
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <textarea
                  id="content"
                  name="content"
                  rows={15}
                  required
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your blog post here. You can use Markdown for formatting."
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Markdown formatting is supported. Use # for headings, ** for bold, * for italic, etc.
              </p>
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
                placeholder="E.g., supreme court, judgment, analysis"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Cover Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {previewImage ? (
                    <div>
                      <img
                        src={previewImage || "/placeholder.svg"}
                        alt="Cover preview"
                        className="mx-auto h-40 w-auto object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null)
                          setFormData({ ...formData, coverImage: null })
                        }}
                        className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
                      >
                        Remove image
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="coverImage"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="coverImage"
                            name="coverImage"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="isDraft"
                name="isDraft"
                type="checkbox"
                checked={formData.isDraft}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="isDraft" className="ml-2 block text-sm text-gray-700">
                Save as draft (will not be published until you're ready)
              </label>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Link
                to="/dashboard"
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {formData.isDraft ? "Save Draft" : "Publish Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBlogPage

