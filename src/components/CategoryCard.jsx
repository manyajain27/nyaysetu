import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  const { id, name, icon, description, count } = category

  return (
    <Link to={`/blog/category/${id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:border-indigo-500 border-2 border-transparent">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-center text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 text-center mb-3">{description}</p>
        <div className="text-center text-indigo-600 font-medium">
          {count} {count === 1 ? "Article" : "Articles"}
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard

