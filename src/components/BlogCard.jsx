import { Link } from "react-router-dom"
import { Calendar, User, Tag, ThumbsUp, MessageSquare } from "lucide-react"

const BlogCard = ({ post }) => {
  const { id, title, excerpt, author, date, category, tags, imageUrl, isVerified, likes, comments } = post

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 border border-amber-100">
      <div className="relative">
        <img
          src={imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {category && (
          <div className="absolute top-4 right-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1 text-amber-700" />
            <span>{date}</span>
          </div>
          <div className="mx-2 text-gray-300">|</div>
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-1 text-amber-700" />
            <span>{author}</span>
            {isVerified && (
              <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                ✓ Verified
              </span>
            )}
          </div>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold text-amber-900 mb-2 hover:text-amber-700">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center text-xs bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-200"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-amber-100">
          <div className="flex space-x-4">
            <div className="flex items-center text-gray-500 text-sm">
              <ThumbsUp className="h-4 w-4 mr-1 text-amber-700" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <MessageSquare className="h-4 w-4 mr-1 text-amber-700" />
              <span>{comments}</span>
            </div>
          </div>
          <Link to={`/blog/${id}`} className="text-sm font-medium text-amber-700 hover:text-amber-900">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

