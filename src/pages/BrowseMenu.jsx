import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BrowseMenu() {
  const location = useLocation();

  // 🧠 This engine layout helper tells React Router to automatically scroll the page 
  // down to our custom section ID if a user arrives via a hash link!
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(decodeURIComponent(location.hash.substring(1)));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      
      <h1 className="text-4xl font-black tracking-tight mb-12">Our Delicious Menu</h1>

      {/* SECTION 1: Main Courses */}
      <section id="Main Courses" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold border-b border-zinc-200 pb-3 mb-6 text-zinc-800">
          Main Courses
        </h2>
        {/* We will drop your simple item cards inside here next! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-zinc-800">
            <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salads and Chicken
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
      

        <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>

       <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
   
   <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
            </div>
      </section>

      {/* SECTION 2: Grills & Wraps */}
      <section id="Grills & Wraps" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold border-b border-zinc-200 pb-3 mb-6 text-zinc-800">
          Grills & Wraps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-zinc-800">
          <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
      

        <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>

       <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
   
   <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: Drinks & Deserts */}
      <section id="Drinks & Deserts" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl font-bold border-b border-zinc-200 pb-3 mb-6 text-zinc-800">
          Drinks & Deserts
        </h2>
        <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
          <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
      

        <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>

       <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
   
   <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-zinc-400">
              <div>
               <div className="h-48 w-full overflow-hidden bg-zinc-100">
                  <img
                  src="..."
                  alt="Fried Rice & Salad"
                  className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-4">
                  <h3 className="font-bold text-lg text-zinc-900 tracking-tight">
                     Fried Rice & Salad
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                     Tasty fried rice with fresh salad
                  </p>
               </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center border-t border-zinc-50 mt-4">
               <span className="text-xl font-black text-zinc-900">N7,500</span>
               <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer shadow-sm">
                  Add to Cart
               </button>
              </div>
            </div>
        </div>
      </section>

    </div>
  );
}

export default BrowseMenu;
