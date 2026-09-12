import { Link } from 'react-router-dom';

export default function Navbar({ title }) {
  return (
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" class="flex items-center space-x-2 text-xl font-bold text-gray-800">
          <span class="bg-black text-white px-2.5 py-1 rounded text-xs tracking-wider">BLOG</span>
          <span>MyBlog</span>
        </Link>
        <h1 class="text-2xl font-semibold text-gray-800">{title}</h1>
        <div class="flex items-center space-x-3">
          <Link to="/login" class="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded transition">
            Login
          </Link>
          <Link to="/signup" class="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold px-4 py-2 rounded transition">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
}