import { Navigate } from "react-router-dom"

// This is a simplified version without actual auth implementation
const ProtectedRoute = ({ children }) => {
  // For now, we'll just assume the user is always logged in
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute

