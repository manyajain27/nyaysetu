"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit, ThumbsUp, MessageSquare } from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"
import BlogCard from "../components/BlogCard"

const ProfilePage = () => {
  const { username } = useParams()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  const [userPosts, setUserPosts] = useState([])
  const [activeTab, setActiveTab] = useState("articles")

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      // Find profile by username
      const foundProfile = mockProfiles.find((p) => p.username === username)
      setProfile(foundProfile)

      if (foundProfile) {
        // Get posts by this user
        const posts = mockPosts.filter((post) => post.author === foundProfile.name)
        setUserPosts(posts)
      }

      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [username])

  if (loading) {
    return <LoadingScreen />
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
          <p className="text-gray-600 mb-6">The profile you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-800 to-indigo-600 h-32"></div>
          <div className="px-6 py-4 md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 -mt-16">
                {profile.avatar ? (
                  <img
                    src={profile.avatar || "/placeholder.svg"}
                    alt={profile.name}
                    className="h-24 w-24 rounded-full border-4 border-white bg-white"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full border-4 border-white bg-indigo-100 flex items-center justify-center">
                    <User className="h-12 w-12 text-indigo-600" />
                  </div>
                )}
              </div>
              <div className="ml-4 mt-2 md:mt-0">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                  {profile.isVerified && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓ Verified Lawyer
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{profile.title}</p>
              </div>
            </div>

            {profile.isCurrentUser && (
              <div className="mt-4 md:mt-0">
                <Link
                  to="/edit-profile"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 mb-6">{profile.bio}</p>

              <div className="space-y-4">
                {profile.email && (
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{profile.email}</span>
                  </div>
                )}
                {profile.phone && (
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{profile.phone}</span>
                  </div>
                )}
                {profile.location && (
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                    <span>{profile.location}</span>
                  </div>
                )}
                {profile.joinDate && (
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    <span>Joined {profile.joinDate}</span>
                  </div>
                )}
              </div>
            </div>

            {profile.isLawyer && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Professional Information</h2>

                {profile.education && profile.education.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-md font-medium text-gray-900 mb-2">Education</h3>
                    <ul className="space-y-2">
                      {profile.education.map((edu, index) => (
                        <li key={index} className="text-gray-600">
                          <div className="font-medium">{edu.degree}</div>
                          <div>{edu.institution}</div>
                          <div className="text-sm text-gray-500">{edu.year}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {profile.experience && profile.experience.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-md font-medium text-gray-900 mb-2">Experience</h3>
                    <ul className="space-y-4">
                      {profile.experience.map((exp, index) => (
                        <li key={index} className="text-gray-600">
                          <div className="font-medium">{exp.position}</div>
                          <div>{exp.organization}</div>
                          <div className="text-sm text-gray-500">{exp.duration}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {profile.specializations && profile.specializations.length > 0 && (
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab("articles")}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === "articles"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <BookOpen className="h-5 w-5 inline mr-2" />
                    Articles
                  </button>
                  <button
                    onClick={() => setActiveTab("answers")}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === "answers"
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <MessageSquare className="h-5 w-5 inline mr-2" />
                    Answers
                  </button>
                  {profile.isLawyer && (
                    <button
                      onClick={() => setActiveTab("achievements")}
                      className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                        activeTab === "achievements"
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <Award className="h-5 w-5 inline mr-2" />
                      Achievements
                    </button>
                  )}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "articles" && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Articles by {profile.name}</h2>

                {userPosts.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-600 mb-4">No articles yet.</p>
                    {profile.isCurrentUser && (
                      <Link
                        to="/create-blog"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Write Your First Article
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {userPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "answers" && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Answers by {profile.name}</h2>

                {profile.answers && profile.answers.length > 0 ? (
                  <div className="space-y-6">
                    {profile.answers.map((answer, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                          <Link to={`/qa/${answer.questionId}`}>
                            <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-indigo-600">
                              {answer.questionTitle}
                            </h3>
                          </Link>
                          <p className="text-gray-600 mb-4">{answer.content}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{answer.date}</span>
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>{answer.upvotes} upvotes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-600">No answers yet.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "achievements" && profile.isLawyer && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>

                {profile.achievements && profile.achievements.length > 0 ? (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                      {profile.achievements.map((achievement, index) => (
                        <li key={index} className="p-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <Award className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">{achievement.title}</h3>
                              <p className="text-gray-600">{achievement.description}</p>
                              {achievement.date && <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-600">No achievements yet.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock data for profiles
const mockProfiles = [
  {
    username: "priya-sharma",
    name: "Adv. Priya Sharma",
    title: "Senior Partner, Tech Law Associates",
    bio: "Experienced lawyer specializing in data privacy and technology law with over 10 years of practice. Passionate about making legal knowledge accessible to all.",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43210",
    location: "New Delhi, India",
    joinDate: "January 2023",
    isVerified: true,
    isLawyer: true,
    isCurrentUser: false,
    education: [
      {
        degree: "LL.B.",
        institution: "Faculty of Law, Delhi University",
        year: "2010-2013",
      },
      {
        degree: "LL.M. in Technology Law",
        institution: "National Law School of India University, Bangalore",
        year: "2013-2014",
      },
    ],
    experience: [
      {
        position: "Senior Partner",
        organization: "Tech Law Associates",
        duration: "2020-Present",
      },
      {
        position: "Associate",
        organization: "Legal Nexus LLP",
        duration: "2014-2020",
      },
    ],
    specializations: ["Data Privacy", "Technology Law", "Intellectual Property", "Corporate Compliance"],
    answers: [
      {
        questionId: 2,
        questionTitle: "How does the new Digital Personal Data Protection Act affect small businesses?",
        content:
          "The Digital Personal Data Protection Act (DPDPA) has significant implications for small businesses. You need to implement proper consent mechanisms for collecting customer data, maintain transparency about how you use this data, and ensure you have adequate security measures in place.",
        date: "April 2, 2025",
        upvotes: 6,
      },
    ],
    achievements: [
      {
        title: "Top Contributor Award",
        description:
          "Recognized for exceptional contributions to the legal community through insightful articles and helpful answers.",
        date: "March 2025",
      },
      {
        title: "Featured in Legal Today Magazine",
        description: "Interviewed as an expert on data privacy regulations in India.",
        date: "February 2025",
      },
    ],
  },
]

// Mock data for posts
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
    id: 4,
    title: "Intellectual Property Rights in the Digital Age",
    excerpt: "How to protect your intellectual property in an increasingly digital world with evolving challenges.",
    author: "Adv. Priya Sharma",
    date: "March 20, 2025",
    category: "Intellectual Property",
    tags: ["IP Rights", "Digital", "Copyright"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    isVerified: true,
    likes: 87,
    comments: 19,
  },
]

export default ProfilePage

