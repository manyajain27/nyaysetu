"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Lock, Scale } from "lucide-react"
import { useSignIn, useClerk, useAuth, useSession } from "@clerk/clerk-react"

const LoginPage = () => {
  const navigate = useNavigate()
  const { isLoaded, signIn, setActive } = useSignIn()
  const { session } = useSession()
  const { userId } = useAuth()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    userType: "user", // Default user type for login
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isLoaded) return
  
    try {
      setIsSubmitting(true)
      setError("")
  
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      })
  
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
  
        // Clerk is now aware of the session, so wait a bit and then access values
        setTimeout(() => {
          const sessionId = result.createdSessionId
          const storedUserId = signIn.userData?.id // Fallback if available
          const localUserId = localStorage.getItem("__clerk_user_id")
  
          console.log("✅ Session ID:", sessionId)
          console.log("✅ Stored Clerk User ID (if present):", storedUserId || localUserId)
        }, 1000)
  
        localStorage.setItem("clerkSessionId", result.createdSessionId)
  
        navigate("/dashboard")
      } else {
        console.warn("⚠️ Incomplete auth flow:", result)
      }
    } catch (err) {
      console.error("❌ Sign-in Error:", err)
      if (err.errors?.length > 0) {
        const message = err.errors[0].message || "Unknown error"
        const code = err.errors[0].code || ""
        setError(`${message} (${code})`)
      } else {
        setError("Something went wrong. Try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }
  

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return

    try {
      localStorage.setItem("pendingUserType", "user")
      console.log("🌐 Redirecting to Google sign-in...")

      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      })
    } catch (err) {
      console.error("❌ Google Sign-in Error:", err)
      setError(err.errors?.[0]?.message || "Google sign-in failed.")
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
          <h2 className="text-3xl font-bold text-amber-950">Sign in to न्यायसेतु</h2>
          <p className="mt-2 text-sm text-amber-800">
            Or{" "}
            <Link to="/register" className="font-medium text-amber-700 hover:text-amber-600">
              create a new account
            </Link>
          </p>
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
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

              {/* Password */}
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
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-amber-300 rounded-md shadow-sm placeholder-amber-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Remember Me + Forgot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-amber-800">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-amber-700 hover:text-amber-600">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            {/* Divider + Google */}
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
                  onClick={handleGoogleSignIn}
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-amber-700">
          By signing in, you agree to our{" "}
          <Link to="/terms" className="font-medium text-amber-700 hover:text-amber-600">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="font-medium text-amber-700 hover:text-amber-600">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
