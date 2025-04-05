const LoadingScreen = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
          <p className="text-gray-500">Please wait while we prepare your content</p>
        </div>
      </div>
    )
  }
  
  export default LoadingScreen
  
  