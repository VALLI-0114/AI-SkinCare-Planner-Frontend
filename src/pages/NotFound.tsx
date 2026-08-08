import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#efe8de] flex flex-col items-center justify-center p-6 text-[#001534]">
      <h1 className="text-6xl font-serif mb-4">404</h1>
      <p className="text-xl font-medium mb-6">Page Not Found</p>
      <Link
        to="/"
        className="bg-[#9f7c46] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#856535] transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}
