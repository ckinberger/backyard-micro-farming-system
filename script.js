const pages = [
  "Raised Bed Farming",
  "Container Gardening",
  "Tomatoes",
  "Peppers",
  "Low Yield Issues",
  "Soil Nutrient Balancing"
];

function searchSite(query) {
  return pages.filter(p =>
    p.toLowerCase().includes(query.toLowerCase())
  );
}