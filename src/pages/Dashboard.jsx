import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div class="min-h-screen bg-gray-100 pb-20">
      <Navbar title="Dashboard" />
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white p-8 rounded shadow-sm border border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">User Dashboard</h2>
          <p class="text-xs text-gray-600 mb-6">Manage your blog content, overview metrics, and user preferences.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-blue-50 border border-blue-200 p-5 rounded">
              <h3 class="font-bold text-blue-900 text-sm">Total Posts</h3>
              <p class="text-2xl font-bold text-blue-600 mt-2">12</p>
            </div>
            <div class="bg-green-50 border border-green-200 p-5 rounded">
              <h3 class="font-bold text-green-900 text-sm">Active Comments</h3>
              <p class="text-2xl font-bold text-green-600 mt-2">48</p>
            </div>
            <div class="bg-purple-50 border border-purple-200 p-5 rounded">
              <h3 class="font-bold text-purple-900 text-sm">Subscribers</h3>
              <p class="text-2xl font-bold text-purple-600 mt-2">1,240</p>
            </div>
          </div>
          <div class="mt-8">
            <Link to="/" class="inline-block bg-gray-800 text-white px-5 py-2.5 rounded text-xs font-semibold hover:bg-gray-700 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}