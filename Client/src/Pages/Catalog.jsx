import React, { useState } from "react";
import { 
  Funnel, 
  MagnifyingGlass, 
  SquaresFour, 
  ListDashes, 
  SortAscending, 
  CheckSquare, 
  ShoppingCart,
  Star
} from "phosphor-react";

// --- MOCK DATA (Move to a DB file later) ---
const PRODUCTS = [
  { id: "SKU-901", name: "Bosch GSB 18V-50 Cordless Drill", brand: "Bosch", price: 12500, rating: 4.8, stock: 45, image: "https://m.media-amazon.com/images/I/71wM1tC-7PL._SX679_.jpg", category: "Power Tools", badge: "Best Seller" },
  { id: "SKU-902", name: "Makita Angle Grinder 9557HN", brand: "Makita", price: 4200, rating: 4.5, stock: 120, image: "https://m.media-amazon.com/images/I/61S+C9y7iRL._SX679_.jpg", category: "Power Tools", badge: "Sale" },
  { id: "SKU-903", name: "Industrial Safety Helmet (Yellow)", brand: "3M Safety", price: 450, rating: 4.2, stock: 500, image: "https://m.media-amazon.com/images/I/51p4-1tqXcL._SX679_.jpg", category: "Safety Gear", badge: null },
  { id: "SKU-904", name: "DeWalt 20V MAX Impact Driver", brand: "DeWalt", price: 15999, rating: 4.9, stock: 12, image: "https://m.media-amazon.com/images/I/61b3E1tGj8L._SX679_.jpg", category: "Power Tools", badge: "Low Stock" },
  { id: "SKU-905", name: "Stanley 12-Piece Spanner Set", brand: "Stanley", price: 1800, rating: 4.6, stock: 85, image: "https://m.media-amazon.com/images/I/81x+8f7m4TL._SX679_.jpg", category: "Hand Tools", badge: null },
  { id: "SKU-906", name: "Fluke 101 Digital Multimeter", brand: "Fluke", price: 3200, rating: 4.7, stock: 30, image: "https://m.media-amazon.com/images/I/61k+k4k3bJL._SX679_.jpg", category: "Electrical", badge: "Pro Choice" },
];

const Catalog = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [priceRange, setPriceRange] = useState(20000);
  
  // -- Components for Filter Sections --
  const FilterSection = ({ title, options }) => (
    <div className="mb-6 border-b border-slate-100 pb-6">
      <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">{title}</h3>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-orange-500">
              {/* Fake Check logic for UI demo */}
              <input type="checkbox" className="hidden peer" />
              <div className="w-2.5 h-2.5 bg-orange-600 rounded-sm opacity-0 peer-checked:opacity-100"></div>
            </div>
            <span className="text-sm text-slate-600 group-hover:text-slate-900">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Master Catalog</h1>
            <p className="text-slate-500 mt-1">Showing {PRODUCTS.length} products with real-time availability.</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
             <button 
               onClick={() => setViewMode("grid")}
               className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-slate-100 text-orange-600 shadow-inner' : 'text-slate-400 hover:text-slate-600'}`}
             >
               <SquaresFour size={20} weight="fill"/>
             </button>
             <button 
               onClick={() => setViewMode("list")}
               className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-100 text-orange-600 shadow-inner' : 'text-slate-400 hover:text-slate-600'}`}
             >
               <ListDashes size={20} weight="bold"/>
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* === SIDEBAR FILTERS (Left) === */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-orange-600 font-bold">
                <Funnel size={20} /> Filters
              </div>
              
              {/* Search in Sidebar */}
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search SKU..." 
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none"
                />
                <MagnifyingGlass className="absolute left-3 top-2.5 text-slate-400" size={16} />
              </div>

              <FilterSection title="Department" options={["Power Tools", "Hand Tools", "Safety Gear", "Abrasives", "Electrical"]} />
              <FilterSection title="Brands" options={["Bosch", "Makita", "DeWalt", "Stanley", "3M"]} />
              <FilterSection title="Availability" options={["In Stock", "Next Day Dispatch", "On Order"]} />

              {/* Price Slider */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Max Price: ₹{priceRange}</h3>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>₹500</span>
                  <span>₹50,000+</span>
                </div>
              </div>

            </div>
          </aside>

          {/* === MAIN GRID (Right) === */}
          <main className="flex-1">
            
            {/* Sort Bar */}
            <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-200 mb-6 shadow-sm">
               <div className="flex items-center gap-2 text-sm text-slate-500 px-2">
                 <CheckSquare size={18} className="text-green-500" />
                 <span><span className="font-bold text-slate-900">42</span> Items ready to ship</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="text-sm text-slate-500 hidden sm:inline">Sort by:</span>
                 <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-1.5 outline-none focus:border-orange-500 cursor-pointer">
                   <option>Relevance</option>
                   <option>Price: Low to High</option>
                   <option>Price: High to Low</option>
                 </select>
               </div>
            </div>

            {/* PRODUCT LAYOUT SWITCHER */}
            <div className={`
              ${viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "flex flex-col gap-4"
              }
            `}>
              {PRODUCTS.map((product) => (
                <div 
                  key={product.id} 
                  className={`
                    group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-orange-300 transition-all duration-300
                    ${viewMode === 'list' ? 'flex items-center p-4 gap-6' : 'flex flex-col'}
                  `}
                >
                  
                  {/* Image Area */}
                  <div className={`
                    relative bg-slate-50 flex items-center justify-center p-4
                    ${viewMode === 'list' ? 'w-24 h-24 rounded-lg' : 'h-48 w-full border-b border-slate-100'}
                  `}>
                    <img src={product.image} alt={product.name} className="h-full w-full object-contain mix-blend-multiply" />
                    
                    {product.badge && viewMode === 'grid' && (
                      <span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className={`flex-1 ${viewMode === 'grid' ? 'p-5' : ''}`}>
                    
                    <div className="flex justify-between items-start">
                      <p className="text-xs text-slate-400 font-mono mb-1">{product.category}</p>
                      {viewMode === 'grid' && (
                         <div className="flex text-orange-400 text-xs gap-0.5">
                           <Star weight="fill" /> <span className="text-slate-600 font-semibold">{product.rating}</span>
                         </div>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* List View Extra Details */}
                    {viewMode === 'list' && (
                      <div className="text-xs text-slate-500 mt-1 flex gap-4">
                         <span>Brand: <span className="font-semibold text-slate-700">{product.brand}</span></span>
                         <span className="flex items-center gap-1"><CheckSquare size={12} className="text-green-500"/> Stock: {product.stock}</span>
                      </div>
                    )}

                    <div className={`mt-4 flex items-center justify-between ${viewMode === 'list' ? 'gap-8' : ''}`}>
                      <div>
                        <p className="text-xs text-slate-400">Wholesale Price</p>
                        <p className="text-xl font-bold text-slate-900">₹{product.price.toLocaleString()}</p>
                      </div>
                      
                      <button className="bg-orange-600 text-white p-2.5 rounded-lg hover:bg-slate-900 transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2 text-sm font-bold">
                        <ShoppingCart size={18} weight="bold" />
                        {viewMode === 'list' && "Add to Cart"}
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Mock */}
            <div className="mt-12 flex justify-center gap-2">
               {[1, 2, 3, "...", 12].map((page, i) => (
                 <button key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${i === 0 ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-500'}`}>
                    {page}
                 </button>
               ))}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;