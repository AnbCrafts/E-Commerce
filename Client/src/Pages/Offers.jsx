import React, { useState } from "react";
import OfferCard from "../Components/OfferCard";
import { bestOffers } from "../TempDB/OffersDB";
import FilterPanel from "../Components/FilterPanel";
import { offerFilters } from "../TempDB/OfferFiltersDB";

export default function Offers() {

  const [selectedFilters, setSelectedFilters] = useState({});
  
    const handleFilterChange = (id, value) => {
      setSelectedFilters((prev) => ({ ...prev, [id]: value }));
    };
  return (
    <div className="py-4">
      <FilterPanel
        filters={offerFilters}
        selectedFilters={selectedFilters}
        onChange={handleFilterChange}
      />
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🔥 Best Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestOffers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}
