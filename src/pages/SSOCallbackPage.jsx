"use client"

import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SSOCallbackPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we need to redirect to verification after OAuth login
    const checkRedirect = async () => {
      const userType = localStorage.getItem("pendingUserType")

      if (userType === "lawyer") {
        // Wait a bit for Clerk to complete authentication
        setTimeout(() => {
          navigate("/verification")
          localStorage.removeItem("pendingUserType")
        }, 1000)
      }
    }

    checkRedirect()
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-amber-900 mb-2">Processing your sign in...</h2>
        <p className="text-amber-700">Please wait while we complete your authentication.</p>
        <AuthenticateWithRedirectCallback />
      </div>
    </div>
  )
}

export default SSOCallbackPage

