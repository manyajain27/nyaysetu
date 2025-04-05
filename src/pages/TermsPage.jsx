import { Link } from "react-router-dom"

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-3xl mx-auto">Please read these terms carefully before using NyaySetu</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600">Last Updated: April 5, 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using NyaySetu, you agree to be bound by these Terms of Service and all applicable laws
              and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
              this site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-600">
              Permission is granted to temporarily access the materials on NyaySetu's website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>Modify or copy the materials;</li>
              <li>
                Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
              </li>
              <li>Attempt to decompile or reverse engineer any software contained on NyaySetu's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600">
              The materials on NyaySetu's website are provided on an 'as is' basis. NyaySetu makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-600 mt-4">
              Further, NyaySetu does not warrant or make any representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or otherwise relating to such materials or on any
              sites linked to this site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Legal Disclaimer</h2>
            <p className="text-gray-600">
              The information provided on NyaySetu is for general informational purposes only. It is not intended to be
              legal advice, and should not be taken as such. The content on NyaySetu does not create an attorney-client
              relationship between the user and any lawyer contributing to the platform.
            </p>
            <p className="text-gray-600 mt-4">
              Users should consult with a qualified legal professional for advice specific to their individual
              situation. NyaySetu and its contributors are not responsible for any actions taken based on the
              information provided on this platform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. User Accounts</h2>
            <p className="text-gray-600">
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account on our Service.
            </p>
            <p className="text-gray-600 mt-4">
              You are responsible for safeguarding the password that you use to access the Service and for any
              activities or actions under your password. You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
              account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. User Content</h2>
            <p className="text-gray-600">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text,
              graphics, videos, or other material. You are responsible for the content that you post on or through the
              Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="text-gray-600 mt-4">
              By posting content on or through the Service, you represent and warrant that: (i) the content is yours
              (you own it) or you have the right to use it and grant us the rights and license as provided in these
              Terms, and (ii) the posting of your content on or through the Service does not violate the privacy rights,
              publicity rights, copyrights, contract rights or any other rights of any person.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Lawyer Verification</h2>
            <p className="text-gray-600">
              NyaySetu verifies lawyers through their Bar Council registration numbers. However, we do not guarantee the
              qualifications, expertise, or abilities of any verified lawyer on our platform. Users should conduct their
              own due diligence before engaging with any legal professional.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Limitations</h2>
            <p className="text-gray-600">
              In no event shall NyaySetu or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on NyaySetu's website, even if NyaySetu or a NyaySetu authorized representative has
              been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its
              conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
              considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-600">If you have any questions about these Terms, please contact us:</p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>By email: terms@nyaysetu.com</li>
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

export default TermsPage

