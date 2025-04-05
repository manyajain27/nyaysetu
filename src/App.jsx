import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SignedIn, SignedOut, RedirectToSignIn, ClerkProvider } from "@clerk/clerk-react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ChatWindow from "./components/ChatWindow"
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import BlogPostPage from "./pages/BlogPostPage"
import QAPage from "./pages/QAPage"
import QADetailPage from "./pages/QADetailPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FAQPage from "./pages/FAQPage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"
import DisclaimerPage from "./pages/DisclaimerPage"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"
import SearchResultsPage from "./pages/SearchResultsPage"
// Import new pages
import AskQuestionPage from "./pages/AskQuestionPage"
import CreateBlogPage from "./pages/CreateBlogPage"
import DashboardPage from "./pages/DashboardPage"
import EditProfilePage from "./pages/EditProfilePage"
import VerificationPage from "./pages/VerificationPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import SSOCallbackPage from "./pages/SSOCallbackPage"

// Create a protected route component
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

function App() {
  
  return (
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route
              path="/blog/create"
              element={
                <ProtectedRoute>
                  <CreateBlogPage />
                </ProtectedRoute>
              }
            />
            <Route path="/qa" element={<QAPage />} />
            <Route path="/qa/:id" element={<QADetailPage />} />
            <Route
              path="/qa/ask"
              element={
                <ProtectedRoute>
                  <AskQuestionPage />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route
              path="/profile/edit"
              element={
                <ProtectedRoute>
                  <EditProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/verification"
              element={
                <ProtectedRoute>
                  <VerificationPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/sso-callback" element={<SSOCallbackPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <ChatWindow  />
      </Router>
  )
}

export default App

