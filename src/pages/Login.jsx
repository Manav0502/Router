import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar title="Login" />
      <div class="flex-grow flex items-center justify-center px-4 py-12">
        <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleSubmit} class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Email:</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ritikvats22@gmail.com" 
                class="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Password:</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                class="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded text-xs transition uppercase tracking-wider">
              LOGIN
            </button>
          </form>
          <p class="text-xs text-center text-gray-500 mt-4">
            Don't have an account? <Link to="/signup" class="text-green-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}