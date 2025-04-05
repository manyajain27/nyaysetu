import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
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

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/blog/create" element={<CreateBlogPage />} />
          <Route path="/qa" element={<QAPage />} />
          <Route path="/qa/:id" element={<QADetailPage />} />
          <Route path="/qa/ask" element={<AskQuestionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </Router>
  )
}

export default App

