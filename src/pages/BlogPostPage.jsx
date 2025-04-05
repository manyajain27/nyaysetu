"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Calendar, User, Tag, ThumbsUp, MessageSquare, Share2, Bookmark, ArrowLeft } from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"

const BlogPostPage = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      const foundPost = mockPosts.find((p) => p.id === Number.parseInt(id))
      setPost(foundPost)

      // Get related posts from the same category
      if (foundPost) {
        const related = mockPosts.filter((p) => p.category === foundPost.category && p.id !== foundPost.id).slice(0, 3)
        setRelatedPosts(related)
      }

      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return <LoadingScreen />
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/blog" className="hover:text-indigo-600">
                Blog
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to={`/blog/category/${post.category}`} className="hover:text-indigo-600">
                {post.category}
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700 font-medium truncate">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={post.imageUrl || "/placeholder.svg?height=400&width=800"}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex flex-wrap items-center mb-4 text-sm text-gray-500">
              <div className="flex items-center mr-4 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
                {post.isVerified && (
                  <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="flex items-center mr-4 mb-2">
                <Tag className="h-4 w-4 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags &&
                post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog/tag/${tag}`}
                    className="inline-flex items-center text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded hover:bg-gray-200"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Link>
                ))}
            </div>

            <div className="flex justify-between items-center py-4 border-t border-b border-gray-100">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>{post.comments}</span>
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <Bookmark className="h-5 w-5 mr-1" />
                  <span className="sr-only md:not-sr-only">Save</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-indigo-600">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span className="sr-only md:not-sr-only">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="prose max-w-none">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4">Key Points to Consider</h2>
            <p className="mb-4">
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
              libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
              Praesent elementum hendrerit tortor.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Sed adipiscing ornare risus.</li>
              <li className="mb-2">
                Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus
                leo.
              </li>
              <li className="mb-2">
                Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam.
              </li>
            </ul>
            <p className="mb-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
              pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            </p>
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-6">
              "The law is not a light for you or any man to see by; the law is not an instrument of any kind. The law is
              a causeway upon which, so long as he keeps to it, a citizen may walk safely."
            </blockquote>
            <p className="mb-4">
              Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4">Legal Implications</h2>
            <p className="mb-4">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
              sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
              tincidunt tempus.
            </p>
            <p className="mb-4">
              Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo
              eget bibendum sodales, augue velit cursus nunc.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
                  <User className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {post.author}
                  {post.isVerified && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      ✓ Verified Lawyer
                    </span>
                  )}
                </h3>
                <p className="text-gray-500">Senior Advocate specializing in {post.category}</p>
                <Link
                  to={`/profile/${post.author.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong className="font-medium">Disclaimer:</strong> This article is for informational purposes only and
                does not constitute legal advice. Please consult with a qualified legal professional for advice specific
                to your situation.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/blog/${relatedPost.id}`}>
                    <img
                      src={relatedPost.imageUrl || "/placeholder.svg?height=150&width=300"}
                      alt={relatedPost.title}
                      className="w-full h-32 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/blog/${relatedPost.id}`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">{relatedPost.author}</p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
    imageUrl: "/placeholder.svg?height=400&width=800",
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
    imageUrl: "/placeholder.svg?height=400&width=800",
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
    imageUrl: "/placeholder.svg?height=400&width=800",
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
    imageUrl: "/placeholder.svg?height=400&width=800",
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
    imageUrl: "/placeholder.svg?height=400&width=800",
    isVerified: false,
    likes: 112,
    comments: 38,
  },
]

export default BlogPostPage

