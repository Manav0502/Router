import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div class="min-h-screen bg-gray-100 pb-20">
      <Navbar title="Home" />
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-1 space-y-6">
            <div class="bg-white p-5 rounded shadow-sm border border-gray-200">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80" alt="Avatar" class="w-full h-48 object-cover rounded mb-4" />
              <h3 class="font-bold text-gray-800 text-lg">My Name</h3>
              <p class="text-xs text-gray-600 mt-2 leading-relaxed">
                Just me, myself and I, exploring the universe of uknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.
              </p>
            </div>

            <div class="bg-white p-5 rounded shadow-sm border border-gray-200">
              <h3 class="font-bold text-gray-800 text-base border-b pb-2 mb-4">Popular Posts</h3>
              <ul class="space-y-4">
                <li class="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=80" class="w-12 h-12 object-cover rounded" alt="Post thumbnail" />
                  <div>
                    <p class="text-xs font-bold text-gray-800">Lorem</p>
                    <p class="text-xs text-gray-500">Sed matis nunc</p>
                  </div>
                </li>
                <li class="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&q=80" class="w-12 h-12 object-cover rounded" alt="Post thumbnail" />
                  <div>
                    <p class="text-xs font-bold text-gray-800">Ipsum</p>
                    <p class="text-xs text-gray-500">Praes tinci sed</p>
                  </div>
                </li>
                <li class="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=100&q=80" class="w-12 h-12 object-cover rounded" alt="Post thumbnail" />
                  <div>
                    <p class="text-xs font-bold text-gray-800">Dorum</p>
                    <p class="text-xs text-gray-500">Ultricies congue</p>
                  </div>
                </li>
                <li class="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=100&q=80" class="w-12 h-12 object-cover rounded" alt="Post thumbnail" />
                  <div>
                    <p class="text-xs font-bold text-gray-800">Mingsum</p>
                    <p class="text-xs text-gray-500">Lorem ipsum dipsum</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-white p-5 rounded shadow-sm border border-gray-200">
              <h3 class="font-bold text-gray-800 text-base border-b pb-2 mb-4">Tags</h3>
              <div class="flex flex-wrap gap-1.5 text-xs">
                <span class="bg-black text-white px-2 py-0.5">Travel</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">New York</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">London</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">IKEA</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">DIY</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">Ideas</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">Baby</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">Family</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">News</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">Clothing</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">Shopping</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">Sports</span>
                <span class="bg-gray-200 text-gray-700 px-2 py-0.5">Games</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 space-y-8">
            <article class="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=1200&q=80" alt="Skateboard Post" class="w-full h-80 object-cover" />
              <div class="p-6">
                <h2 class="text-xl font-bold text-gray-900 tracking-wide uppercase">TITLE HEADING</h2>
                <p class="text-xs text-gray-500 mt-1 mb-4">Title description, <span class="text-gray-700">April 7, 2014</span></p>
                <p class="text-gray-600 text-xs leading-relaxed mb-6">
                  Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed nod modus nunc dui egestas eleifend eleifend maximus. Vivamus hendrerit magna felis, ac scelerisque tortor rhoncus et. Phasellus sed ultrices nisl mi non congue ultrices aliquam.
                </p>
                <div class="flex items-center justify-between border-t border-gray-100 pt-4">
                  <button class="border border-gray-300 px-4 py-2 text-xs font-semibold uppercase hover:bg-gray-50 transition">READ MORE &raquo;</button>
                  <span class="text-xs font-semibold bg-gray-100 px-3 py-1 rounded">Comments <span class="bg-black text-white px-1.5 py-0.5 rounded ml-1">1</span></span>
                </div>
              </div>
            </article>

            <article class="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80" alt="Forest Post" class="w-full h-80 object-cover" />
              <div class="p-6">
                <h2 class="text-xl font-bold text-gray-900 tracking-wide uppercase">TITLE HEADING</h2>
                <p class="text-xs text-gray-500 mt-1 mb-4">Title description, <span class="text-gray-700">April 2, 2014</span></p>
                <p class="text-gray-600 text-xs leading-relaxed mb-6">
                  Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed nod modus nunc dui egestas eleifend eleifend maximus. Vivamus hendrerit magna felis, ac scelerisque tortor rhoncus et.
                </p>
                <div class="flex items-center justify-between border-t border-gray-100 pt-4">
                  <button class="border border-gray-300 px-4 py-2 text-xs font-semibold uppercase hover:bg-gray-50 transition">READ MORE &raquo;</button>
                  <span class="text-xs font-semibold bg-gray-100 px-3 py-1 rounded">Comments <span class="bg-black text-white px-1.5 py-0.5 rounded ml-1">0</span></span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}