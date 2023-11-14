"use client";

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

  function handleRegionClick(selectedRegion: string) {
    onRegionChange(selectedRegion);
  }

  return (
    <>
      <h2 className="text-xl text-center mt-8 mb-2">Filter by Region</h2>
      <div className="flex text-l text-center mx-auto mb-8 p-4 justify-center gap-10 border border-gray-500">
        {regions.map((region) => (
          <h2
            key={region}
            className="custom-button"
            onClick={() => handleRegionClick(region)}
          >
            {region === "All" ? "Show All" : region}
          </h2>
        ))}
      </div>
    </>
  );
}
