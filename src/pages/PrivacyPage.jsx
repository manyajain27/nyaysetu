import { Link } from "react-router-dom"

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">How we collect, use, and protect your information</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600">Last Updated: April 5, 2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to NyaySetu. We respect your privacy and are committed to protecting your personal data. This
              privacy policy will inform you about how we look after your personal data when you visit our website and
              tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Data We Collect</h2>
            <p className="text-gray-600">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped
              together as follows:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>
                <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                and version, time zone setting and location, browser plug-in types and versions, operating system and
                platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Profile Data</strong> includes your username and password, your interests, preferences, feedback
                and survey responses.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website, products and services.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="text-gray-600">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                fundamental rights do not override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600">
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and other third parties who have a business need to
              know. They will only process your personal data on our instructions and they are subject to a duty of
              confidentiality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
            <p className="text-gray-600">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
              collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
              reporting requirements. We may retain your personal data for a longer period in the event of a complaint
              or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Legal Rights</h2>
            <p className="text-gray-600">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain
              information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              Cookies are sent to your browser from a website and stored on your device.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-5 text-gray-600 mt-4 mb-4">
              <li>By email: privacy@nyaysetu.com</li>
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

export default PrivacyPage

