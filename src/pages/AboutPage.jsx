import { Link } from "react-router-dom"
import { Shield, Users, BookOpen, Check } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About NyaySetu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bridging the gap between legal professionals and those seeking knowledge
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <div className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              <p className="mb-4">
                NyaySetu was founded with a clear mission: to create a platform where legal professionals can share
                their knowledge and insights while respecting the regulatory boundaries set by the Bar Council of India.
              </p>
              <p>
                We aim to democratize access to legal information and create a community where users can gain valuable
                insights from verified legal experts without crossing ethical lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards and ensure all content on our platform respects legal
                professional ethics.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge</h3>
              <p className="text-gray-600">
                We believe in the power of information and strive to make legal knowledge accessible to everyone.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We foster a respectful community where legal professionals and users can engage in meaningful
                discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How NyaySetu Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Legal Professionals</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full">
                      <Check className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Verification</h4>
                    <p className="mt-1 text-gray-600">
                      Get verified with your Bar Council registration number to receive a verified badge on your
                      profile.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full">
                      <Check className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Share Knowledge</h4>
                    <p className="mt-1 text-gray-600">
                      Write articles, answer questions, and share insights on legal topics without solicitation.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full">
                      <Check className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Build Reputation</h4>
                    <p className="mt-1 text-gray-600">
                      Gain recognition for your expertise and build your professional reputation within the community.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Users</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full">
                      <Check className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Access Quality Content</h4>
                    <p className="mt-1 text-gray-600">
                      Read articles and insights from verified legal professionals across various domains.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full">
                      <Check className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Ask Questions</h4>
                    <p className="mt-1 text-gray-600">
                      Post legal questions and receive insights from verified lawyers in our Q&A section.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full">
                      <Check className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Make Informed Decisions</h4>
                    <p className="mt-1 text-gray-600">
                      Gain legal knowledge to help you make better-informed decisions in your personal and professional
                      life.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">Meet the passionate individuals behind NyaySetu</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="h-40 w-40 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-4xl font-bold mx-auto">
                  AS
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Aditya Sharma</h3>
              <p className="text-indigo-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                Former advocate with a passion for making legal knowledge accessible to all.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="h-40 w-40 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-4xl font-bold mx-auto">
                  RP
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Riya Patel</h3>
              <p className="text-indigo-600 mb-2">Chief Legal Officer</p>
              <p className="text-gray-600">
                Experienced corporate lawyer ensuring our platform maintains the highest ethical standards.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="h-40 w-40 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-4xl font-bold mx-auto">
                  VK
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vikram Kumar</h3>
              <p className="text-indigo-600 mb-2">CTO</p>
              <p className="text-gray-600">
                Tech enthusiast with a background in law, bridging the gap between legal and technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a legal professional looking to share your knowledge or someone seeking legal insights,
            NyaySetu is the platform for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100"
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

