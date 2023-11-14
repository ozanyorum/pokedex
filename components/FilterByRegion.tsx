"use client";

import { useState } from "react";

interface FilterByRegionProps {
  onRegionChange: (selectedRegion: Region) => void;
}
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
] as const;

export type Region = (typeof regions)[number];

export function FilterByRegion({ onRegionChange }: FilterByRegionProps) {
  const [selectedRegion, setSelectedRegion] = useState("All");

  function handleRegionClick(selectedRegion: Region) {
    onRegionChange(selectedRegion);
    setSelectedRegion(selectedRegion);
  }

  return (
    <>
      <h2 className="text-xl text-center mt-8 mb-2">Filter by Region</h2>
      <div className="flex flex-wrap text-l text-center mx-auto mb-8 p-4 justify-center gap-4 border border-y-1 border-muted">
        {regions.map((region) => (
          <button
            key={region}
            className={`custom-button ${
              selectedRegion === region ? "bg-muted" : ""
            }`}
            onClick={() => handleRegionClick(region as Region)}
          >
            {region === "All" ? "Show All" : region}
          </button>
        ))}
      </div>
    </>
  );
}
