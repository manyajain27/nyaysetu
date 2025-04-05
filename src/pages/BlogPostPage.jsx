"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import {
  Calendar,
  User,
  Tag,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"

const BlogPostPage = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLike = () => {
    setLiked(!liked)
    // In a real app, you would update the like count on the server
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
    // In a real app, you would save this to the user's bookmarks
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-md border border-amber-200 max-w-md">
          <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-amber-700" />
          </div>
          <h1 className="text-2xl font-bold text-amber-900 mb-4">Article Not Found</h1>
          <p className="text-amber-700 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
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
              <Link to="/blog" className="hover:text-amber-800">
                Blog
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link
                to={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-amber-800"
              >
                {post.category}
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-amber-800 font-medium truncate">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-amber-200">
          <img
            src={post.imageUrl || "/placeholder.svg?height=400&width=800"}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex flex-wrap items-center mb-4 text-sm text-amber-600">
              <div className="flex items-center mr-4 mb-2">
                <Calendar className="h-4 w-4 mr-1 text-amber-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <User className="h-4 w-4 mr-1 text-amber-500" />
                <span>{post.author}</span>
                {post.isVerified && (
                  <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </span>
                )}
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 mr-1 text-amber-500" />
                <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  {post.category}
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-amber-900 mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags &&
                post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-xs bg-amber-50 text-amber-800 px-2 py-1 rounded-md hover:bg-amber-100 transition-colors border border-amber-200"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Link>
                ))}
            </div>

            <div className="flex justify-between items-center py-4 border-t border-amber-100">
              <div className="flex space-x-4">
                <button
                  className={`flex items-center ${liked ? "text-amber-600" : "text-amber-500 hover:text-amber-600"} transition-colors`}
                  onClick={handleLike}
                >
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>{liked ? post.likes + 1 : post.likes}</span>
                </button>
                <Link
                  to="#comments"
                  className="flex items-center text-amber-500 hover:text-amber-600 transition-colors"
                >
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>{post.comments}</span>
                </Link>
              </div>
              <div className="flex space-x-4">
                <button
                  className={`flex items-center ${bookmarked ? "text-amber-600" : "text-amber-500 hover:text-amber-600"} transition-colors`}
                  onClick={handleBookmark}
                >
                  <Bookmark className="h-5 w-5 mr-1" />
                  <span className="sr-only md:not-sr-only text-sm">{bookmarked ? "Saved" : "Save"}</span>
                </button>
                <div className="relative">
                  <button className="flex items-center text-amber-500 hover:text-amber-600 transition-colors">
                    <Share2 className="h-5 w-5 mr-1" />
                    <span className="sr-only md:not-sr-only text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Sharing Sidebar - Desktop */}
        <div className="hidden lg:block fixed left-8 top-1/3 bg-white p-3 rounded-lg shadow-md border border-amber-200 space-y-4">
          <button className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
            <Facebook className="h-5 w-5" />
          </button>
          <button className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors">
            <Twitter className="h-5 w-5" />
          </button>
          <button className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
            <Linkedin className="h-5 w-5" />
          </button>
          <button
            className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
            onClick={handleCopyLink}
          >
            {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
          </button>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
          <div className="prose max-w-none text-amber-900">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
              Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-900">Key Points to Consider</h2>
            <p className="mb-4">
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
              libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
              Praesent elementum hendrerit tortor.
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Sed adipiscing ornare risus.</li>
              <li>
                Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus
                leo.
              </li>
              <li>
                Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam.
              </li>
            </ul>
            <p className="mb-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
              pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-4 italic my-6 text-amber-800">
              "The law is not a light for you or any man to see by; the law is not an instrument of any kind. The law is
              a causeway upon which, so long as he keeps to it, a citizen may walk safely."
            </blockquote>
            <p className="mb-4">
              Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-900">Legal Implications</h2>
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
          <div className="mt-8 pt-8 border-t border-amber-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <User className="h-7 w-7" />
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-amber-900">{post.author}</h3>
                  {post.isVerified && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified Lawyer
                    </span>
                  )}
                </div>
                <p className="text-amber-700 mb-2">Senior Advocate specializing in {post.category}</p>
                <p className="text-amber-600 text-sm mb-3">
                  Expert in {post.category} with over 10 years of experience. Regular contributor to legal journals and
                  speaker at industry conferences.
                </p>
                <Link
                  to={`/profile/${post.author.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-amber-700 hover:text-amber-900 text-sm font-medium inline-flex items-center"
                >
                  View Profile <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Sharing - Mobile */}
        <div className="lg:hidden bg-white rounded-lg shadow-md p-4 mb-8 border border-amber-200">
          <h3 className="text-sm font-medium text-amber-900 mb-3">Share this article</h3>
          <div className="flex justify-between">
            <button className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
            <button
              className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
              onClick={handleCopyLink}
            >
              {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-700">
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
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200 hover:shadow-lg transition-all"
                >
                  <Link to={`/blog/${relatedPost.id}`}>
                    <img
                      src={relatedPost.imageUrl || "/placeholder.svg?height=150&width=300"}
                      alt={relatedPost.title}
                      className="w-full h-32 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <div className="flex items-center text-xs text-amber-600 mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{relatedPost.date}</span>
                    </div>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <h3 className="text-lg font-bold text-amber-900 mb-2 hover:text-amber-700 transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-amber-700 mb-2 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-sm font-medium text-amber-700 hover:text-amber-900 inline-flex items-center"
                    >
                      Read More <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div id="comments" className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Comments ({post.comments})</h2>

          {/* Comment Form */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-amber-900 mb-3">Leave a comment</h3>
            <form>
              <div className="mb-4">
                <textarea
                  rows={4}
                  className="block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 bg-amber-50"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>

          {/* Sample Comments */}
          <div className="space-y-6">
            <div className="border-b border-amber-100 pb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <User className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <h4 className="text-sm font-medium text-amber-900">Rajiv Mehta</h4>
                    <span className="ml-2 text-xs text-amber-500">2 days ago</span>
                  </div>
                  <p className="mt-1 text-sm text-amber-700">
                    This is a very insightful article. I particularly appreciated the analysis of recent case law on
                    this topic.
                  </p>
                  <div className="mt-2 flex items-center space-x-4">
                    <button className="text-xs text-amber-600 hover:text-amber-800">Reply</button>
                    <button className="text-xs text-amber-600 hover:text-amber-800">Like</button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <User className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <h4 className="text-sm font-medium text-amber-900">Priya Sharma</h4>
                    <span className="ml-2 text-xs text-amber-500">5 days ago</span>
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified Lawyer
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-amber-700">
                    I would like to add that there have been some recent developments in this area that practitioners
                    should be aware of. The Supreme Court's ruling last month has clarified several aspects discussed in
                    this article.
                  </p>
                  <div className="mt-2 flex items-center space-x-4">
                    <button className="text-xs text-amber-600 hover:text-amber-800">Reply</button>
                    <button className="text-xs text-amber-600 hover:text-amber-800">Like</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

