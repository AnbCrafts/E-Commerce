export const offerFilters = [
  {
    id: "status",
    label: "Offer Status",
    options: [
      { value: "valid", label: "Valid Offers" },
      { value: "expired", label: "Expired Offers" },
    ],
  },
  {
    id: "discount",
    label: "Sort by Discount",
    options: [
      { value: "highToLow", label: "Highest Discount" },
      { value: "lowToHigh", label: "Lowest Discount" },
    ],
  },
  {
    id: "expiry",
    label: "Sort by Expiry",
    options: [
      { value: "endingSoon", label: "Ending Soon" },
      { value: "newlyAdded", label: "Newly Added" },
    ],
  },
];
