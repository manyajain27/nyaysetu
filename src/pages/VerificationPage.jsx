"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle, Upload, FileText, User, Scale, AlertTriangle } from "lucide-react"

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
      <div className="">
        <div className="relative">
          {/* Progress bar background */}
          <div className="absolute top-[57%] left-0 right-0 h-1 -translate-y-1/2 bg-amber-100"></div>

          {/* Active progress bar */}
          <div
            className="absolute top-[57%] left-0 h-1 -translate-y-1/2 bg-amber-700 transition-all duration-300"
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>

          {/* Step indicators */}
          <div className="relative flex justify-between p-3">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  step >= 1 ? "bg-amber-700 border-amber-800 text-white" : "bg-white border-amber-300 text-amber-400"
                } shadow-md transition-all duration-300 z-10`}
              >
                {step > 1 ? <CheckCircle className="h-6 w-6" /> : <User className="h-6 w-6" />}
              </div>
              <div className="mt-2 text-center">
                <p className={`text-sm font-medium ${step >= 1 ? "text-amber-900" : "text-amber-500"}`}>Personal</p>
                <p className="text-xs text-amber-600">Information</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  step >= 2 ? "bg-amber-700 border-amber-800 text-white" : "bg-white border-amber-300 text-amber-400"
                } shadow-md transition-all duration-300 z-10`}
              >
                {step > 2 ? <CheckCircle className="h-6 w-6" /> : <Scale className="h-6 w-6" />}
              </div>
              <div className="mt-2 text-center">
                <p className={`text-sm font-medium ${step >= 2 ? "text-amber-900" : "text-amber-500"}`}>Professional</p>
                <p className="text-xs text-amber-600">Details</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  step >= 3 ? "bg-amber-700 border-amber-800 text-white" : "bg-white border-amber-300 text-amber-400"
                } shadow-md transition-all duration-300 z-10`}
              >
                {step > 3 ? <CheckCircle className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
              </div>
              <div className="mt-2 text-center">
                <p className={`text-sm font-medium ${step >= 3 ? "text-amber-900" : "text-amber-500"}`}>Documents</p>
                <p className="text-xs text-amber-600">Verification</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  step >= 4 ? "bg-amber-700 border-amber-800 text-white" : "bg-white border-amber-300 text-amber-400"
                } shadow-md transition-all duration-300 z-10`}
              >
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="mt-2 text-center">
                <p className={`text-sm font-medium ${step >= 4 ? "text-amber-900" : "text-amber-500"}`}>Complete</p>
                <p className="text-xs text-amber-600">Submission</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderStep1 = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-amber-900">Personal Information</h3>
          <p className="mt-1 text-sm text-amber-700">Please provide your personal details for verification.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="fullName" className="block text-sm font-medium text-amber-900">
              Full Name*
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-amber-500" />
              </div>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="pl-10 block w-full border border-amber-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                placeholder="As per your official documents"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-amber-900">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-amber-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
              placeholder="your@email.com"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="phone" className="block text-sm font-medium text-amber-900">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-amber-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
              placeholder="+91 9876543210"
            />
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-900">Important Note</h3>
              <p className="mt-1 text-sm text-amber-700">
                Please ensure all information provided matches your official Bar Council records. Discrepancies may
                result in verification delays or rejection.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-5 flex justify-end">
          <button
            type="button"
            onClick={nextStep}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
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
          <h3 className="text-lg font-medium text-amber-900">Professional Information</h3>
          <p className="mt-1 text-sm text-amber-700">Please provide your legal professional details.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="barCouncilNumber" className="block text-sm font-medium text-amber-900">
              Bar Council Registration Number*
            </label>
            <input
              type="text"
              name="barCouncilNumber"
              id="barCouncilNumber"
              required
              value={formData.barCouncilNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-amber-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
              placeholder="e.g., MAH/12345/2015"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="barCouncilState" className="block text-sm font-medium text-amber-900">
              Bar Council State*
            </label>
            <select
              id="barCouncilState"
              name="barCouncilState"
              required
              value={formData.barCouncilState}
              onChange={handleChange}
              className="mt-1 block w-full border border-amber-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
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
            <label htmlFor="enrollmentDate" className="block text-sm font-medium text-amber-900">
              Enrollment Date*
            </label>
            <input
              type="date"
              name="enrollmentDate"
              id="enrollmentDate"
              required
              value={formData.enrollmentDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-amber-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-amber-900"
            />
          </div>

          <div className="sm:col-span-6">
            <label className="block text-sm font-medium text-amber-900 mb-2">Areas of Practice*</label>
            <div className="bg-white p-4 rounded-lg border border-amber-200 max-h-60 overflow-y-auto">
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
                        className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-amber-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={`practiceAreas-${area}`} className="text-amber-800">
                        {area}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:col-span-6">
            <label className="block text-sm font-medium text-amber-900 mb-2">Courts Practicing In*</label>
            <div className="bg-white p-4 rounded-lg border border-amber-200">
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
                        className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-amber-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={`courts-${court}`} className="text-amber-800">
                        {court}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-white py-2 px-4 border border-amber-300 rounded-md shadow-sm text-sm font-medium text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
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
          <h3 className="text-lg font-medium text-amber-900">Document Verification</h3>
          <p className="mt-1 text-sm text-amber-700">Please upload the required documents for verification.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-2">
              ID Proof (Aadhaar Card/PAN Card/Voter ID)*
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-amber-300 border-dashed rounded-md bg-amber-50">
              <div className="space-y-1 text-center">
                {formData.idProof ? (
                  <div>
                    <p className="text-sm text-amber-700">{formData.idProof.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, idProof: null })}
                      className="mt-2 text-sm text-amber-700 hover:text-amber-600 font-medium"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto h-12 w-12 text-amber-500" />
                    <div className="flex text-sm text-amber-700">
                      <label
                        htmlFor="idProof"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-amber-700 hover:text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500"
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
                    <p className="text-xs text-amber-600">PDF, JPG, PNG up to 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900 mb-2">Bar Council Certificate*</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-amber-300 border-dashed rounded-md bg-amber-50">
              <div className="space-y-1 text-center">
                {formData.barCouncilCertificate ? (
                  <div>
                    <p className="text-sm text-amber-700">{formData.barCouncilCertificate.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, barCouncilCertificate: null })}
                      className="mt-2 text-sm text-amber-700 hover:text-amber-600 font-medium"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <FileText className="mx-auto h-12 w-12 text-amber-500" />
                    <div className="flex text-sm text-amber-700">
                      <label
                        htmlFor="barCouncilCertificate"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-amber-700 hover:text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500"
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
                    <p className="text-xs text-amber-600">PDF, JPG, PNG up to 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900 mb-2">Professional Photo*</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-amber-300 border-dashed rounded-md bg-amber-50">
              <div className="space-y-1 text-center">
                {formData.professionalPhoto ? (
                  <div>
                    <p className="text-sm text-amber-700">{formData.professionalPhoto.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, professionalPhoto: null })}
                      className="mt-2 text-sm text-amber-700 hover:text-amber-600 font-medium"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <User className="mx-auto h-12 w-12 text-amber-500" />
                    <div className="flex text-sm text-amber-700">
                      <label
                        htmlFor="professionalPhoto"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-amber-700 hover:text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500"
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
                    <p className="text-xs text-amber-600">JPG, PNG up to 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termsAgreed"
                  name="termsAgreed"
                  type="checkbox"
                  required
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-amber-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termsAgreed" className="text-amber-800">
                  I certify that all the information provided is accurate and authentic. I understand that any false
                  information may result in rejection of verification and possible legal consequences.
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-white py-2 px-4 border border-amber-300 rounded-md shadow-sm text-sm font-medium text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Previous
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
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
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-amber-900 mb-4">Application Submitted!</h3>
        <p className="text-amber-800 mb-6 max-w-md mx-auto">
          Your verification application has been submitted successfully. Our team will review your application and
          documents within 3-5 business days.
        </p>

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 max-w-md mx-auto mb-8">
          <h4 className="text-lg font-medium text-amber-900 mb-3">What happens next?</h4>
          <ul className="text-left text-amber-800 space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-xs font-bold">
                  1
                </div>
              </div>
              <p className="ml-2">Our team will verify your documents and credentials</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-xs font-bold">
                  2
                </div>
              </div>
              <p className="ml-2">You may be contacted for additional information if needed</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-xs font-bold">
                  3
                </div>
              </div>
              <p className="ml-2">Once verified, you'll receive a "Verified Lawyer" badge on your profile</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 text-xs font-bold">
                  4
                </div>
              </div>
              <p className="ml-2">You'll gain access to exclusive features for legal professionals</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-amber-300 rounded-md shadow-sm text-sm font-medium text-amber-800 bg-white hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-amber-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-amber-800/50 p-3 rounded-full border-2 border-amber-500/30">
              <Scale className="h-10 w-10 text-amber-200" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-amber-950 sm:text-4xl">Lawyer Verification</h1>
          <p className="mt-3 text-lg text-amber-800">
            Get verified as a legal professional to enhance your credibility and unlock exclusive features
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-amber-200">
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

