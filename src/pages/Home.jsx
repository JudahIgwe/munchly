import { Link } from 'react-router-dom';
function Home() {
 return(
   /* The background container*/
   <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      <div className=" bg-zinc-900 text-white p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
        <div className="space-y-4 z-10">
         <p className="text-orange-500 font-semibold tracking-wide text-sm">
            An experience like no other
         </p>
         <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Order Now
         </h1>
         <h2 className="text-zinc-400 text-base max-w-sm">
            Fresh meals at your doorstep.
         </h2>

         {/* The search bar faeture*/}
         <div className="flex bg-white p-2 rounded-2xl shadow-md max-w-md w-full items-center">
            <input
            type="text"
            placeholder="search your dish"
            className="w-full pl-4 pr-2 py-2 text-zinc-800 placeholder-zinc-400 font-medium bg-transparent focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-all cursor-pointer shadow-sm text-sm whitespace-nowrap">
               Search
            </button>
         </div>
          
        </div>


        {/* The hero image section*/}
        <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
         <img
         src="https://i.pinimg.com/736x/b3/f8/a8/b3f8a8dbcdad21c8add0a31a6466a4b9.jpg"
         alt="Delicious Pizza"
         className="w-full h=full object-cover transitiion-transform duration-500 hover:scale-105"
         />
        </div>
      </div>
      {/* Deals Section*/}
      <section className="mt-12 mb-6 flex justify-between items-end">
         <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
               Up to -20% discount on your first order 
            </h3>
         </div>
         <button className="text-orange-500 font-bold hover:text-orange-600 transition-colors text-sm whitespace-nowrap">
            Check Deals
         </button>
      </section>

      {/* 3. The Home Grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  
            {/* The individual Card code */}
          <Link to="/browse-menu#Main Courses" className="relative rounded-2xl overflow-hidden bg-zinc-900 h-64">
             <img 
                src="https://i.pinimg.com/736x/6c/94/48/6c9448a620cddb1d38216f33952b7355.jpg" 
                alt=" Main Courses" 
                className="w-full h-full object-cover"
             />
             <div className="absolute bottom-4 right-4 bg-black px-4 py-2 rounded-xl text-white font-bold text-sm shadow-md">
             Main Courses
             </div>
            </Link>

        <Link to="browse-menu#Grills & Wraps" className="relative rounded-2xl overflow-hidden bg-zinc-900 h-64">
             <img 
                src="https://i.pinimg.com/736x/77/0e/59/770e599faf315c39fe70ad2682c32779.jpg" 
                alt=" Grills & Wraps" 
                className="w-full h-full object-cover"
             />
             <div className="absolute bottom-4 right-4 bg-black px-4 py-2 rounded-xl text-white font-bold text-sm shadow-md">
              Grills & Wraps
             </div>
            </Link>
  
         <Link to="browse-menu#Drinks & Deserts" className="relative rounded-2xl overflow-hidden bg-zinc-900 h-64">
             <img 
                src="https://i.pinimg.com/736x/00/2d/b5/002db5f600bc5df08d871dc897cd0862.jpg" 
                alt="Drinks & Deserts" 
                className="w-full h-full object-cover"
             />
             <div className="absolute bottom-4 right-4 bg-black px-4 py-2 rounded-xl text-white font-bold text-sm shadow-md">
              Drinks & Deserts
             </div>
            </Link>

      </div>

   </div>

  );
}


export default Home;