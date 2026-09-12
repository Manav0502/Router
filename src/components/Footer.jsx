import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer class="bg-black text-white py-3.5 px-6 fixed bottom-0 left-0 right-0 flex justify-between items-center text-xs z-50">
      <p>&copy; 2026 UpFlix Media. All rights reserved.</p>
      <Link to="/signup" class="bg-gray-800 hover:bg-gray-700 text-white px-3.5 py-1.5 rounded border border-gray-700 transition">
        Register for free
      </Link>
    </footer>
  );
}