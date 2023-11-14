"use client";

import { useState } from "react";

export function FilterByRegion({ onRegionChange }: any) {
  const regions = [
    "All",
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
  ];

  const [selectedRegion, setSelectedRegion] = useState("All");

  function handleRegionClick(selectedRegion: string) {
    onRegionChange(selectedRegion);
    setSelectedRegion(selectedRegion);
  }

  return (
    <>
      <h2 className="text-xl text-center mt-8 mb-2">Filter by Region</h2>
      <div className="flex flex-wrap text-l text-center mx-auto mb-8 p-4 justify-center gap-4 border border-gray-500">
        {regions.map((region) => (
          <h2
            key={region}
            className={`custom-button ${
              selectedRegion === region ? "bg-muted" : ""
            }`}
            onClick={() => handleRegionClick(region)}
          >
            {region === "All" ? "Show All" : region}
          </h2>
        ))}
      </div>
    </>
  );
}
