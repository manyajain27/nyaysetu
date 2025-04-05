"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const VerificationPage = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    barCouncilNumber: "",
    barCouncilState: "",
    enrollmentDate: "",
    practiceAreas: [],
    courtsPracticing: [],
    idProof: null,
    barCouncilCertificate: null,
    professionalPhoto: null,
    termsAgreed: false,
  })

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ]

  const practiceAreas = [
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

  const courts = [
    "Supreme Court of India",
    "High Courts",
    "District Courts",
    "Consumer Courts",
    "Family Courts",
    "Tribunals",
    "Other Specialized Courts",
  ]

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "checkbox") {
      if (name === "termsAgreed") {
        setFormData({
          ...formData,
          [name]: checked,
        })
      } else if (name.startsWith("practiceAreas-")) {
        const area = name.replace("practiceAreas-", "")
        const updatedAreas = checked
          ? [...formData.practiceAreas, area]
          : formData.practiceAreas.filter((a) => a !== area)

        setFormData({
          ...formData,
          practiceAreas: updatedAreas,
        })
      } else if (name.startsWith("courts-")) {
        const court = name.replace("courts-", "")
        const updatedCourts = checked
          ? [...formData.courtsPracticing, court]
          : formData.courtsPracticing.filter((c) => c !== court)

        setFormData({
          ...formData,
          courtsPracticing: updatedCourts,
        })
      }
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would normally submit the verification data to an API
    console.log("Verification data submitted:", formData)
    nextStep()
  }

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <div className={`h-1 w-12 ${step >= 2 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
            <div className={`h-1 w-12 ${step >= 3 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 3 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              3
            </div>
            <div className={`h-1 w-12 ${step >= 4 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
          </div>
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 4 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              4
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <div className="w-10 text-center">Personal</div>
          <div className="w-10 text-center">Professional</div>
          <div className="w-10 text-center">Documents</div>
          <div className="w-10 text-center">Complete</div>
        </div>
      </div>
    )
  }

  const renderStep1 = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-500">Please provide your personal details for verification.</p>
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
              Phone Number*
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="pt-5 flex justify-end">
          <button
            type="button"
            onClick={nextStep}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next Step
          </button>
        </div>
      </div>
    )
  }

  const renderStep2 = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Professional Information</h3>
          <p className="mt-1 text-sm text-gray-500">Please provide your legal professional details.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="barCouncilNumber" className="block text-sm font-medium text-gray-700">
              Bar Council Registration Number*
            </label>
            <input
              type="text"
              name="barCouncilNumber"
              id="barCouncilNumber"
              required
              value={formData.barCouncilNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="barCouncilState" className="block text-sm font-medium text-gray-700">
              Bar Council State*
            </label>
            <select
              id="barCouncilState"
              name="barCouncilState"
              required
              value={formData.barCouncilState}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="enrollmentDate" className="block text-sm font-medium text-gray-700">
              Enrollment Date*
            </label>
            <input
              type="date"
              name="enrollmentDate"
              id="enrollmentDate"
              required
              value={formData.enrollmentDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="sm:col-span-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Practice*</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2">
              {practiceAreas.map((area) => (
                <div key={area} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={`practiceAreas-${area}`}
                      name={`practiceAreas-${area}`}
                      type="checkbox"
                      checked={formData.practiceAreas.includes(area)}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={`practiceAreas-${area}`} className="text-gray-700">
                      {area}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:col-span-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Courts Practicing In*</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2">
              {courts.map((court) => (
                <div key={court} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={`courts-${court}`}
                      name={`courts-${court}`}
                      type="checkbox"
                      checked={formData.courtsPracticing.includes(court)}
                      onChange={handleChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={`courts-${court}`} className="text-gray-700">
                      {court}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next Step
          </button>
        </div>
      </div>
    )
  }

  const renderStep3 = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Document Verification</h3>
          <p className="mt-1 text-sm text-gray-500">Please upload the required documents for verification.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ID Proof (Aadhaar Card/PAN Card/Voter ID)*
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {formData.idProof ? (
                  <div>
                    <p className="text-sm text-gray-600">{formData.idProof.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, idProof: null })}
                      className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="idProof"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="idProof"
                          name="idProof"
                          type="file"
                          required
                          onChange={handleChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG up to 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bar Council Certificate*</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {formData.barCouncilCertificate ? (
                  <div>
                    <p className="text-sm text-gray-600">{formData.barCouncilCertificate.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, barCouncilCertificate: null })}
                      className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="barCouncilCertificate"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="barCouncilCertificate"
                          name="barCouncilCertificate"
                          type="file"
                          required
                          onChange={handleChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG up to 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Professional Photo*</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {formData.professionalPhoto ? (
                  <div>
                    <p className="text-sm text-gray-600">{formData.professionalPhoto.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, professionalPhoto: null })}
                      className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="professionalPhoto"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="professionalPhoto"
                          name="professionalPhoto"
                          type="file"
                          accept="image/*"
                          required
                          onChange={handleChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="termsAgreed"
                name="termsAgreed"
                type="checkbox"
                required
                checked={formData.termsAgreed}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="termsAgreed" className="text-gray-700">
                I certify that all the information provided is accurate and authentic. I understand that any false
                information may result in rejection of verification and possible legal consequences.
              </label>
            </div>
          </div>
        </div>

        <div className="pt-5 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Previous
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Application
          </button>
        </div>
      </div>
    )
  }

  const renderStep4 = () => {
    return (
      <div className="text-center py-8">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-medium text-gray-900">Application Submitted!</h3>
        <p className="mt-2 text-sm text-gray-500">
          Your verification application has been submitted successfully. Our team will review your application and
          documents within 3-5 business days.
        </p>
        <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
          <h4 className="text-sm font-medium text-gray-900">What happens next?</h4>
          <ul className="mt-2 text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>Our team will verify your documents and credentials</li>
            <li>You may be contacted for additional information if needed</li>
            <li>Once verified, you'll receive a "Verified Lawyer" badge on your profile</li>
            <li>You'll gain access to exclusive features for legal professionals</li>
          </ul>
        </div>
        <div className="mt-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Lawyer Verification</h1>
          <p className="mt-3 text-lg text-gray-500">
            Get verified as a legal professional to enhance your credibility and unlock exclusive features
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {renderStepIndicator()}

          <div className="px-6 py-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {step === 4 && renderStep4()}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationPage

