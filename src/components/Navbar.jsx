"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Search, User, BookOpen, MessageCircle, Scale } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <div className="mr-2">
                <Scale className="h-10 w-10 text-amber-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-amber-50">न्यायसेतु</span>
                  <span className="text-xs text-amber-100 -mt-1">NyaySetu</span>
                </div>
              </div>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-amber-300 text-sm font-medium text-amber-50"
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-amber-200 hover:text-amber-50 hover:border-amber-200"
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Blogs
              </Link>
              <Link
                to="/qa"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-amber-200 hover:text-amber-50 hover:border-amber-200"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Q&A
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-amber-200 hover:text-amber-50 hover:border-amber-200"
              >
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-amber-300" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-amber-700 bg-amber-800 rounded-md leading-5 placeholder-amber-300 text-amber-100 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
            <div className="flex space-x-1">
              <Link
                to="/login"
                className="inline-flex items-center px-3 py-2 border border-amber-600 text-sm font-medium rounded-md text-amber-100 bg-amber-800 hover:bg-amber-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-amber-900 bg-amber-300 hover:bg-amber-200"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-300 hover:text-amber-50 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-amber-800">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-amber-400 text-base font-medium text-amber-100 bg-amber-700"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-amber-200 hover:text-amber-100 hover:bg-amber-700 hover:border-amber-300"
            >
              Blogs
            </Link>
            <Link
              to="/qa"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-amber-200 hover:text-amber-100 hover:bg-amber-700 hover:border-amber-300"
            >
              Q&A
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-amber-200 hover:text-amber-100 hover:bg-amber-700 hover:border-amber-300"
            >
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-amber-700">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-amber-600 flex items-center justify-center">
                  <User className="h-6 w-6 text-amber-100" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-amber-100">Guest User</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/login"
                className="block px-4 py-2 text-base font-medium text-amber-200 hover:text-amber-100 hover:bg-amber-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-base font-medium text-amber-200 hover:text-amber-100 hover:bg-amber-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

