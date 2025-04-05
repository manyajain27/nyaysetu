"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: "Aditya Sharma",
    email: "aditya.sharma@example.com",
    phone: "+91 9876543210",
    bio: "Constitutional law expert with 10+ years of experience. Former legal advisor to the Ministry of Law and Justice. Passionate about making legal knowledge accessible to all.",
    designation: "Senior Advocate",
    organization: "Delhi High Court",
    experience: "10",
    specializations: ["Constitutional Law", "Human Rights", "Public Interest Litigation"],
    education: [
      {
        degree: "LL.M.",
        institution: "National Law School of India University, Bangalore",
        year: "2010",
      },
      {
        degree: "LL.B.",
        institution: "Faculty of Law, Delhi University",
        year: "2008",
      },
    ],
    barCouncilNumber: "D/1234/2010",
    website: "https://adityasharma.com",
    twitter: "adityalawyer",
    linkedin: "adityasharma-advocate",
    profileImage: null,
  })

  const [previewImage, setPreviewImage] = useState("/placeholder.svg?height=150&width=150")
  const [newSpecialization, setNewSpecialization] = useState("")
  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    year: "",
  })

  const specializations = [
    "Constitutional Law",
    "Criminal Law",
    "Civil Law",
    "Family Law",
    "Corporate Law",
    "Intellectual Property",
    "Tax Law",
    "Labor Law",
    "Environmental Law",
    "Human Rights",
    "International Law",
    "Arbitration",
    "Banking and Finance",
    "Cyber Law",
    "Media Law",
    "Public Interest Litigation",
  ]

  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    if (type === "file" && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0],
      })

      // Create a preview URL for the image
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(files[0])
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleEducationChange = (e) => {
    const { name, value } = e.target
    setNewEducation({
      ...newEducation,
      [name]: value,
    })
  }

  const addSpecialization = () => {
    if (newSpecialization && !formData.specializations.includes(newSpecialization)) {
      setFormData({
        ...formData,
        specializations: [...formData.specializations, newSpecialization],
      })
      setNewSpecialization("")
    }
  }

  const removeSpecialization = (index) => {
    const updatedSpecializations = [...formData.specializations]
    updatedSpecializations.splice(index, 1)
    setFormData({
      ...formData,
      specializations: updatedSpecializations,
    })
  }

  const addEducation = () => {
    if (newEducation.degree && newEducation.institution && newEducation.year) {
      setFormData({
        ...formData,
        education: [...formData.education, newEducation],
      })
      setNewEducation({
        degree: "",
        institution: "",
        year: "",
      })
    }
  }

  const removeEducation = (index) => {
    const updatedEducation = [...formData.education]
    updatedEducation.splice(index, 1)
    setFormData({
      ...formData,
      education: updatedEducation,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would normally submit the profile data to an API
    console.log("Profile data submitted:", formData)
    alert("Profile updated successfully!")
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Edit Your Profile</h1>
          <p className="mt-3 text-lg text-gray-500">Update your information to enhance your presence on NyaySetu</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
            {/* Profile Image Section */}
            <div className="px-6 py-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="mb-4 sm:mb-0 sm:mr-8">
                  <div className="relative">
                    <img
                      src={previewImage || "/placeholder.svg"}
                      alt="Profile"
                      className="h-32 w-32 rounded-full object-cover border-4 border-white shadow"
                    />
                    <label
                      htmlFor="profileImage"
                      className="absolute bottom-0 right-0 bg-indigo-600 rounded-full p-2 text-white cursor-pointer shadow-md hover:bg-indigo-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-bold text-gray-900">{formData.fullName}</h2>
                  <p className="text-sm text-gray-500">{formData.designation}</p>
                  <p className="text-sm text-gray-500 mt-1">{formData.organization}</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Profile photos help personalize your account and build trust with the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="px-6 py-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-500">Update your basic profile information.</p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio*
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    required
                    value={formData.bio}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tell us about yourself, your expertise, and your interests"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="px-6 py-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Professional Information</h3>
                <p className="mt-1 text-sm text-gray-500">Share your professional background and expertise.</p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                    Designation*
                  </label>
                  <input
                    type="text"
                    name="designation"
                    id="designation"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="E.g., Advocate, Legal Advisor, Professor"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                    Organization/Court
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="E.g., Delhi High Court, ABC Law Firm"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Years of Experience*
                  </label>
                  <input
                    type="number"
                    name="experience"
                    id="experience"
                    required
                    min="0"
                    max="70"
                    value={formData.experience}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="barCouncilNumber" className="block text-sm font-medium text-gray-700">
                    Bar Council Registration Number
                  </label>
                  <input
                    type="text"
                    name="barCouncilNumber"
                    id="barCouncilNumber"
                    value={formData.barCouncilNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Required for lawyer verification. This will not be publicly displayed.
                  </p>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Specialization*</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.specializations.map((spec, index) => (
                      <div
                        key={index}
                        className="bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm flex items-center"
                      >
                        {spec}
                        <button
                          type="button"
                          onClick={() => removeSpecialization(index)}
                          className="ml-1.5 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex">
                    <select
                      value={newSpecialization}
                      onChange={(e) => setNewSpecialization(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Select a specialization</option>
                      {specializations
                        .filter((spec) => !formData.specializations.includes(spec))
                        .map((spec) => (
                          <option key={spec} value={spec}>
                            {spec}
                          </option>
                        ))}
                    </select>
                    <button
                      type="button"
                      onClick={addSpecialization}
                      className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                  <div className="space-y-3 mb-4">
                    {formData.education.map((edu, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-gray-50 p-3 rounded-md border border-gray-200"
                      >
                        <div>
                          <p className="font-medium text-gray-800">{edu.degree}</p>
                          <p className="text-sm text-gray-600">
                            {edu.institution}, {edu.year}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeEducation(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-3">
                    <div>
                      <input
                        type="text"
                        name="degree"
                        value={newEducation.degree}
                        onChange={handleEducationChange}
                        placeholder="Degree (e.g., LL.B., LL.M.)"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="institution"
                        value={newEducation.institution}
                        onChange={handleEducationChange}
                        placeholder="Institution"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        name="year"
                        value={newEducation.year}
                        onChange={handleEducationChange}
                        placeholder="Year"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={addEducation}
                        className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="px-6 py-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Social Links</h3>
                <p className="mt-1 text-sm text-gray-500">Connect your social profiles to enhance your visibility.</p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      value={formData.website.replace("https://", "")}
                      onChange={handleChange}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                    Twitter
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      @
                    </span>
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                    LinkedIn
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      linkedin.com/in/
                    </span>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="username"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="px-6 py-6 sm:p-8 flex justify-end space-x-3">
              <Link
                to="/profile"
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage

