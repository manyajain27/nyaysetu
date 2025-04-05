import { Link } from "react-router-dom"
import { AlertTriangle } from "lucide-react"

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Legal Disclaimer</h1>
          <p className="text-xl max-w-3xl mx-auto">Important information about the content on NyaySetu</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-yellow-100 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12 text-yellow-600" />
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-center font-medium text-lg mb-8">
              Please read this disclaimer carefully before using NyaySetu.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Not Legal Advice</h2>
            <p className="text-gray-600">
              The information provided on NyaySetu, including all articles, blog posts, Q&A responses, and other
              content, is for general informational purposes only. It is not intended to be legal advice, and should not
              be taken as such. The content on NyaySetu does not create an attorney-client relationship between the user
              and any lawyer contributing to the platform.
            </p>
            <p className="text-gray-600 mt-4">
              Legal issues are complex and fact-specific, and the information provided on NyaySetu may not apply to your
              particular situation. You should consult with a qualified legal professional for advice specific to your
              individual circumstances.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Guarantee of Accuracy</h2>
            <p className="text-gray-600">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties
              of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or
              availability of the information contained on NyaySetu. Any reliance you place on such information is
              strictly at your own risk.
            </p>
            <p className="text-gray-600 mt-4">
              Laws, regulations, and legal interpretations change frequently, and the information on NyaySetu may not
              reflect the most current legal developments. We are not responsible for any errors or omissions, or for
              the results obtained from the use of this information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Verified Lawyers</h2>
            <p className="text-gray-600">
              NyaySetu verifies lawyers through their Bar Council registration numbers. However, this verification only
              confirms their status as registered legal professionals and does not constitute an endorsement of their
              skills, expertise, or abilities. We do not guarantee the quality of any legal professional's work or the
              outcome of any legal matter.
            </p>
            <p className="text-gray-600 mt-4">
              Users should conduct their own due diligence before engaging with any legal professional they discover
              through NyaySetu.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. No Solicitation</h2>
            <p className="text-gray-600">
              NyaySetu is not a platform for lawyers to solicit clients. Lawyers who contribute to NyaySetu are
              prohibited from using the platform to directly or indirectly advertise their services or solicit business.
              Any contact between users and lawyers must be initiated by the user.
            </p>
            <p className="text-gray-600 mt-4">
              If you believe a lawyer is using NyaySetu to solicit business in violation of our terms and the Bar
              Council of India rules, please report this behavior to us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. External Links</h2>
            <p className="text-gray-600">
              NyaySetu may contain links to external websites that are not provided or maintained by or in any way
              affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or
              completeness of any information on these external websites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall NyaySetu, its owners, directors, employees, partners, agents, suppliers, or affiliates
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Indemnification</h2>
            <p className="text-gray-600">
              You agree to defend, indemnify, and hold harmless NyaySetu, its owners, directors, employees, partners,
              agents, suppliers, or affiliates from and against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the Service.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong className="font-medium">Important:</strong> By using NyaySetu, you acknowledge that you have
                    read and understood this disclaimer and agree to be bound by its terms.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-8">If you have any questions about this disclaimer, please contact us:</p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>By email: legal@nyaysetu.com</li>
              <li>
                By visiting the contact page on our website:{" "}
                <Link to="/contact" className="text-indigo-600 hover:text-indigo-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerPage

