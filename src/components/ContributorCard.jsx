import { Star } from "lucide-react"
import { Link } from "react-router-dom"

const ContributorCard = ({ contributor }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200 hover:shadow-lg transition-all">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold text-xl">
          {contributor.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="ml-3">
          <h3 className="font-bold text-amber-900">{contributor.name}</h3>
          <p className="text-sm text-amber-700">{contributor.expertise}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-amber-700 mb-3">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-amber-500 mr-1" />
          <span>{contributor.rating}</span>
        </div>
        {contributor.isVerified && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Verified</span>
        )}
      </div>
      <div className="flex justify-between text-xs text-amber-700">
        <span>{contributor.articles} articles</span>
        <span>{contributor.answers} answers</span>
      </div>
      <div className="mt-4 pt-4 border-t border-amber-100">
        <Link
          to={`/profile/${contributor.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-amber-800 hover:text-amber-600 text-sm font-medium"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default ContributorCard

