"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Search, Scale } from "lucide-react"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-amber-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <Scale className="h-8 w-8 text-amber-800 mr-2" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-amber-900 font-devanagari">न्यायसेतु</span>
                  <span className="text-xs text-amber-700 -mt-1">Legal Bridge</span>
                </div>
              </div>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-amber-700 text-sm font-medium text-amber-900"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-amber-700 hover:text-amber-900 hover:border-amber-300"
              >
                Blogs
              </Link>
              <Link
                to="/qa"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-amber-700 hover:text-amber-900 hover:border-amber-300"
              >
                Q&A
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-amber-700 hover:text-amber-900 hover:border-amber-300"
              >
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-amber-500" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-amber-300 rounded-md leading-5 bg-amber-50 placeholder-amber-400 focus:outline-none focus:placeholder-amber-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
            <div className="flex space-x-4">
              <SignedOut>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-amber-800 bg-amber-100 hover:bg-amber-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700"
                >
                  Register
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-10 w-10 border-2 border-amber-200",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-600 hover:text-amber-800 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
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
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-amber-700 text-base font-medium text-amber-800 bg-amber-100"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-amber-600 hover:text-amber-800 hover:bg-amber-50 hover:border-amber-300"
            >
              Blogs
            </Link>
            <Link
              to="/qa"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-amber-600 hover:text-amber-800 hover:bg-amber-50 hover:border-amber-300"
            >
              Q&A
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-amber-600 hover:text-amber-800 hover:bg-amber-50 hover:border-amber-300"
            >
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-amber-200">
            <SignedIn>
              <div className="flex items-center px-4">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-10 w-10 border-2 border-amber-200",
                    },
                  }}
                />
                <div className="ml-3">
                  <div className="text-base font-medium text-amber-800">My Account</div>
                </div>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="mt-3 space-y-1">
                <Link
                  to="/login"
                  className="block w-full text-left px-4 py-2 text-base font-medium text-amber-600 hover:text-amber-800 hover:bg-amber-100"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-left px-4 py-2 text-base font-medium text-amber-600 hover:text-amber-800 hover:bg-amber-100"
                >
                  Register
                </Link>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

