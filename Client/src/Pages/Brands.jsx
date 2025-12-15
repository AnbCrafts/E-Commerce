import React, { useState } from 'react';
import { brandsData } from '../TempDB/BrandsDB';
import FilterPanel from '../Components/FilterPanel';
import { brandFilters } from '../TempDB/BrandsFilterDB';
import { MagnifyingGlass, Funnel, ArrowRight, Globe } from "phosphor-react";

const Brands = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (id, value) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };

  // Basic search filtering logic (You can expand this)
  const filteredBrands = brandsData.filter(brand => 
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ==================== 1. HEADER SECTION ==================== */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Authorized Partners</h1>
          <p className="text-slate-500 mt-2">
            We source directly from {brandsData.length}+ global manufacturers to ensure 100% authenticity.
          </p>
        </div>

        {/* ==================== 2. TOOLBAR (Search + Filter) ==================== */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <MagnifyingGlass size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search manufacturers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm text-slate-700 placeholder-slate-400"
            />
          </div>

          {/* Filter Panel Injection */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mr-2">
              <Funnel size={18} />
              <span className="hidden sm:inline">Filters:</span>
            </div>
            {/* Assuming FilterPanel handles its own dropdown/layout internally */}
            <div className="flex-1 md:flex-none">
              <FilterPanel
                filters={brandFilters}
                selectedFilters={selectedFilters}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </div>

        {/* ==================== 3. BRANDS GRID ==================== */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {filteredBrands.map((brand, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                
                {/* Official Partner Badge */}
                <div className="absolute top-3 right-3 z-10">
                   <div className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-green-100">
                     {/* <SealCheck size={12} weight="fill" /> Authorized */}
                   </div>
                </div>

                {/* Logo Area */}
                <div className="h-40 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-6 group-hover:bg-white transition-colors">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-20 max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {brand.name}
                    </h3>
                    {brand.originCountry && (
                      <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                        <Globe size={12} /> {brand.originCountry}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {brand.metadata || "Premium industrial components and tools for heavy-duty applications."}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      {brand.speciality || "General Tools"}
                    </span>
                    <button className="text-sm font-semibold text-slate-700 flex items-center gap-1 group-hover:text-orange-600 transition-colors">
                      View Catalog <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ==================== 4. EMPTY STATE ==================== */
          <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-white rounded-xl border border-dashed border-slate-300">
            <div className="bg-slate-50 p-4 rounded-full mb-4">
              <MagnifyingGlass size={32} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">No brands found</h3>
            <p className="text-slate-500 max-w-xs mt-1">
              We couldn't find any brands matching "{searchQuery}". Try adjusting your filters.
            </p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedFilters({});}}
              className="mt-6 text-orange-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Brands;