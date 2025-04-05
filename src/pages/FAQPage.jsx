"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, ArrowRight, HelpCircle, AlertTriangle } from "lucide-react"
import { Link } from "react-router-dom"

const FAQPage = () => {
  const [openFaqs, setOpenFaqs] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      faqs: [
        {
          id: "what-is-nyaysetu",
          question: "What is NyaySetu?",
          answer:
            "NyaySetu is a platform that connects legal professionals with those seeking legal knowledge and insights. It allows verified lawyers to share their expertise through articles and Q&A while respecting the regulatory boundaries set by the Bar Council of India.",
        },
        {
          id: "is-nyaysetu-free",
          question: "Is NyaySetu free to use?",
          answer:
            "Yes, NyaySetu is free for all users. You can browse articles, read Q&A, and access legal information without any charges. We may introduce premium features in the future, but the core platform will remain free.",
        },
        {
          id: "how-is-nyaysetu-different",
          question: "How is NyaySetu different from other legal platforms?",
          answer:
            "NyaySetu is specifically designed to respect the regulatory boundaries set by the Bar Council of India. We focus on knowledge sharing rather than direct legal services, and we have strict verification processes for lawyers to ensure the quality and authenticity of the content.",
        },
      ],
    },
    {
      id: "for-users",
      title: "For Users",
      faqs: [
        {
          id: "how-to-ask-question",
          question: "How do I ask a question on NyaySetu?",
          answer:
            'To ask a question, you need to create an account and log in. Then, navigate to the Q&A section and click on the "Ask a Question" button. Fill in the required details, select the relevant category, and submit your question.',
        },
        {
          id: "is-advice-legal",
          question: "Is the advice on NyaySetu considered legal advice?",
          answer:
            "No, the information shared on NyaySetu is for educational and informational purposes only. It should not be considered as legal advice. For specific legal issues, we recommend consulting with a lawyer directly.",
        },
        {
          id: "how-to-find-lawyer",
          question: "Can I find a lawyer through NyaySetu?",
          answer:
            "NyaySetu is not a lawyer directory or referral service. However, you can view the profiles of verified lawyers who contribute to the platform. If you wish to contact them, you can do so through the contact information they have chosen to share on their profiles.",
        },
      ],
    },
    {
      id: "for-lawyers",
      title: "For Lawyers",
      faqs: [
        {
          id: "how-to-get-verified",
          question: "How do I get verified as a lawyer on NyaySetu?",
          answer:
            "To get verified, you need to create an account, complete your profile, and then go through our verification process. This involves submitting your Bar Council registration number and a valid ID. Our team will verify your credentials and grant you the verified badge once approved.",
        },
        {
          id: "what-can-lawyers-share",
          question: "What kind of content can lawyers share on NyaySetu?",
          answer:
            "Lawyers can share educational articles, legal insights, commentary on laws and judgments, and answer questions posted by users. All content must be informational in nature and should not constitute direct solicitation or advertisement of legal services.",
        },
        {
          id: "is-it-compliant",
          question: "Is participating on NyaySetu compliant with Bar Council regulations?",
          answer:
            "Yes, NyaySetu is designed to be compliant with Bar Council of India regulations. We have strict guidelines to ensure that lawyers can share their knowledge without violating advertising restrictions. However, we recommend that lawyers familiarize themselves with our terms of service and the applicable regulations.",
        },
      ],
    },
    {
      id: "technical",
      title: "Technical Questions",
      faqs: [
        {
          id: "account-issues",
          question: "I'm having issues with my account. What should I do?",
          answer:
            "If you're experiencing issues with your account, please try clearing your browser cache and cookies, or try using a different browser. If the problem persists, please contact our support team at support@nyaysetu.com with details of the issue.",
        },
        {
          id: "report-content",
          question: "How do I report inappropriate content?",
          answer:
            'You can report inappropriate content by clicking on the "Report" button available on all articles and answers. Please provide a detailed reason for your report to help our moderation team take appropriate action.',
        },
        {
          id: "delete-account",
          question: "How can I delete my account?",
          answer:
            'To delete your account, go to your profile settings and select the "Delete Account" option. Please note that this action is irreversible, and all your data will be permanently removed from our platform.',
        },
      ],
    },
  ]

  // Filter FAQs based on search term
  const filteredFaqs = faqCategories
    .map((category) => {
      return {
        ...category,
        faqs: category.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      }
    })
    .filter((category) => activeCategory === "all" || category.id === activeCategory)

  // Count total FAQs that match the search
  const totalFilteredFaqs = filteredFaqs.reduce((total, category) => total + category.faqs.length, 0)

  return (
    <div className="min-h-screen bg-amber-50 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">Find answers to common questions about NyaySetu</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-amber-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-amber-300 rounded-lg leading-5 bg-white placeholder-amber-400 focus:outline-none focus:placeholder-amber-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === "all"
                  ? "bg-amber-800 text-white"
                  : "bg-white text-amber-800 border border-amber-200 hover:bg-amber-50"
              } transition-colors`}
            >
              All Categories
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? "bg-amber-800 text-white"
                    : "bg-white text-amber-800 border border-amber-200 hover:bg-amber-50"
                } transition-colors`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Count */}
        {searchTerm && (
          <div className="mb-6 text-amber-700">
            Found {totalFilteredFaqs} results for "{searchTerm}"
          </div>
        )}

        {/* FAQ Categories */}
        {totalFilteredFaqs === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-md border border-amber-200">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-amber-700" />
            </div>
            <p className="text-xl text-amber-800 font-medium mb-2">No questions found matching your search.</p>
            <p className="text-amber-600 mb-8">Try using different keywords or browse through our categories.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-800 hover:bg-amber-700"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredFaqs.map(
              (category) =>
                category.faqs.length > 0 && (
                  <div key={category.id}>
                    <h2 className="text-2xl font-bold text-amber-900 mb-6">{category.title}</h2>
                    <div className="space-y-4">
                      {category.faqs.map((faq) => (
                        <div
                          key={faq.id}
                          className="bg-white shadow-md rounded-lg overflow-hidden border border-amber-200"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full flex justify-between items-center p-5 focus:outline-none hover:bg-amber-50 transition-colors"
                          >
                            <span className="text-lg font-medium text-amber-900">{faq.question}</span>
                            {openFaqs[faq.id] ? (
                              <ChevronUp className="h-5 w-5 text-amber-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-amber-600" />
                            )}
                          </button>
                          {openFaqs[faq.id] && (
                            <div className="p-5 bg-amber-50 border-t border-amber-200">
                              <p className="text-amber-700">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        )}

        {/* Still Have Questions */}
        <div className="mt-16 bg-white rounded-lg p-8 text-center border border-amber-200 shadow-md">
          <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-amber-700" />
          </div>
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Still Have Questions?</h2>
          <p className="text-amber-700 mb-6">
            If you couldn't find the answer to your question, feel free to contact our support team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-800 hover:bg-amber-700 transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQPage

