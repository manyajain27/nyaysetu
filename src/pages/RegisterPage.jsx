"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Lock, User, Scale, CheckCircle, ChevronRight } from "lucide-react"
import { useSignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
  const navigate = useNavigate()
  const { isLoaded, signUp, setActive } = useSignUp()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "user",
    agreeTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [verifyEmail, setVerifyEmail] = useState(false)
  const [code, setCode] = useState("")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isLoaded) {
      return
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setIsSubmitting(true)
      setError("")

      // Store the user type in localStorage before starting the sign up process
      localStorage.setItem("pendingUserType", formData.userType)

      // Start the sign up process using Clerk - with only the required parameters
      const result = await signUp.create({
        firstName: formData.fullName.split(" ")[0],
        lastName: formData.fullName.split(" ").slice(1).join(" ") || " ", // Ensure lastName is not empty
        emailAddress: formData.email,
        password: formData.password,
      })

      // Send email verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      })

      // Show email verification UI
      setVerifyEmail(true)
      setIsSubmitting(false)
    } catch (err) {
      console.error("Error signing up:", err)
      // Improved error handling
      if (err.errors && err.errors.length > 0) {
        const errorMessage = err.errors[0].message || "An error occurred during sign up"
        const errorCode = err.errors[0].code || ""
        setError(`${errorMessage} (${errorCode})`)
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
      setIsSubmitting(false)
    }
  }

  const handleVerifyEmail = async (e) => {
    e.preventDefault()

    if (!isLoaded || !code) {
      return
    }

    try {
      setIsSubmitting(true)
      setError("")

      // Verify the email code
      const result = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (result.status === "complete") {
        // Set the active session
        await setActive({ session: result.createdSessionId })

        // Get the user type from localStorage
        const userType = localStorage.getItem("pendingUserType")

        // Clean up localStorage
        localStorage.removeItem("pendingUserType")

        // Redirect based on user type
        if (userType === "lawyer") {
          navigate("/verification")
        } else {
          navigate("/dashboard")
        }
      } else {
        console.log("Verification incomplete:", result)
        setError("Verification incomplete. Please try again.")
      }
    } catch (err) {
      console.error("Error verifying email:", err)
      setError(err.errors?.[0]?.message || "An error occurred during email verification")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoogleSignUp = async () => {
    if (!isLoaded) return

    try {
      // Store the user type in localStorage before starting the OAuth flow
      localStorage.setItem("pendingUserType", formData.userType)
      console.log("Storing user type for Google auth:", formData.userType)

      // Initiate OAuth with Google - keep it simple with only required parameters
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      })
    } catch (err) {
      console.error("Error with Google sign up:", err)
      setError(err.errors?.[0]?.message || "An error occurred with Google sign up")
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-amber-800/50 p-3 rounded-full border-2 border-amber-500/30">
            <Scale className="h-10 w-10 text-amber-200" />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-3xl font-bold text-amber-950">Create your account</h2>
          <p className="mt-2 text-sm text-amber-800">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-amber-700 hover:text-amber-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-amber-200">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {verifyEmail ? (
            <form onSubmit={handleVerifyEmail} className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-amber-900 mb-2">Verify your email</h3>
                <p className="text-sm text-amber-700 mb-4">
                  We've sent a verification code to {formData.email}. Please enter it below.
                </p>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Verification code"
                  className="appearance-none block w-full px-3 py-2 border border-amber-300 rounded-md shadow-sm placeholder-amber-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Verifying..." : "Verify Email"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-amber-900">
                  Full Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-amber-500" />
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-amber-300 rounded-md shadow-sm placeholder-amber-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-900">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-amber-300 rounded-md shadow-sm placeholder-amber-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-amber-900">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-amber-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-amber-300 rounded-md shadow-sm placeholder-amber-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                    placeholder="••••••••"
                  />
                </div>
                <p className="mt-1 text-xs text-amber-700">
                  Password must be at least 8 characters and include a number and a special character
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-amber-900">
                  Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-amber-500" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-amber-300 rounded-md shadow-sm placeholder-amber-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <label className="block text-sm font-medium text-amber-900 mb-3">I am a</label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="userType-user"
                      name="userType"
                      type="radio"
                      value="user"
                      checked={formData.userType === "user"}
                      onChange={handleChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300"
                    />
                    <label htmlFor="userType-user" className="ml-3 block text-sm text-amber-800">
                      Regular User (seeking legal information)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="userType-lawyer"
                      name="userType"
                      type="radio"
                      value="lawyer"
                      checked={formData.userType === "lawyer"}
                      onChange={handleChange}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300"
                    />
                    <label htmlFor="userType-lawyer" className="ml-3 block text-sm text-amber-800">
                      Legal Professional (lawyer, advocate, legal expert)
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
                />
                <label htmlFor="agreeTerms" className="ml-2 block text-sm text-amber-800">
                  I agree to the{" "}
                  <Link to="/terms" className="text-amber-700 hover:text-amber-600">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-amber-700 hover:text-amber-600">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </form>
          )}

          {!verifyEmail && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-amber-700">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <button
                  type="button"
                  onClick={handleGoogleSignUp}
                  className="w-full inline-flex justify-center py-2 px-4 border border-amber-300 rounded-md shadow-sm bg-white text-sm font-medium text-amber-700 hover:bg-amber-50 transition-colors"
                >
                  <svg className="h-5 w-5 text-amber-800 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"
                      fill="currentColor"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {formData.userType === "lawyer" && !verifyEmail && (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle className="h-5 w-5 text-amber-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-900">Verification Required for Legal Professionals</h3>
                <p className="mt-1 text-sm text-amber-700">
                  After registration, you'll need to complete our verification process to receive a verified badge and
                  full access to professional features.
                </p>
                <div className="mt-2">
                  <Link
                    to="/verification"
                    className="text-sm font-medium text-amber-700 hover:text-amber-600 inline-flex items-center"
                  >
                    Learn more about verification <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RegisterPage

