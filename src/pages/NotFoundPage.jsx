import { Link } from "react-router-dom"
import { Home } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="text-indigo-600 text-9xl font-bold">404</div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

