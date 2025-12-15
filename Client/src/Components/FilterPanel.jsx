import React from "react";
import { CaretDown, X } from "phosphor-react";

const FilterPanel = ({ filters, selectedFilters, onChange }) => {
  
  // Helper to check if any filter is active
  const hasActiveFilters = Object.values(selectedFilters).some(val => val !== "");

  return (
    <div className="flex flex-wrap items-center gap-2">
      
      {filters.map((filter) => (
        <div key={filter.id} className="relative group">
          {/* Custom Dropdown Arrow */}
          <CaretDown 
            size={14} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" 
          />
          
          <select
            className={`
              appearance-none cursor-pointer
              pl-4 pr-10 py-2.5 
              text-sm font-medium 
              border rounded-lg 
              transition-all duration-200 outline-none
              ${selectedFilters[filter.id] 
                ? "bg-orange-50 border-orange-200 text-orange-700" // Active State
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300" // Default State
              }
              focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
            `}
            value={selectedFilters[filter.id] || ""}
            onChange={(e) => onChange(filter.id, e.target.value)}
          >
            <option value="" className="text-slate-400">
              {filter.label}
            </option>
            {filter.options.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-slate-900">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}

      {/* Clear Filters Button (Only shows when filters are active) */}
      {hasActiveFilters && (
        <button
          onClick={() => {
            // Create an object with empty values for all keys
            const cleared = Object.keys(selectedFilters).reduce((acc, key) => ({...acc, [key]: ""}), {});
            // You might need to adjust this depending on how your parent handles "clear all"
            // For now, we trigger individual changes or you can pass a clear function prop
            filters.forEach(f => onChange(f.id, "")); 
          }}
          className="ml-2 flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors px-2 py-2"
        >
          <X size={14} /> Clear
        </button>
      )}
    </div>
  );
};

export default FilterPanel;