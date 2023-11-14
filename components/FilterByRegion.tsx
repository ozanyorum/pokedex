"use client";

export function FilterByRegion({ onRegionChange }: any) {
  const handleRegionClick = (selectedRegion: string) => {
    onRegionChange(selectedRegion);
  };

  return (
    <>
      <h2 className="text-xl text-center mt-8 mb-2">Filter by Region</h2>
      <div className="flex text-l text-center mx-auto mb-8 p-4 justify-center gap-10 border border-gray-500">
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Kanto");
          }}
        >
          Kanto
        </h2>
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Johto");
          }}
        >
          Johto
        </h2>
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Hoenn");
          }}
        >
          Hoenn
        </h2>
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Sinnoh");
          }}
        >
          Sinnoh
        </h2>
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Unova");
          }}
        >
          Unova
        </h2>
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Kalos");
          }}
        >
          Kalos
        </h2>
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Alola");
          }}
        >
          Alola
        </h2>
        <h2
          className="custom-button"
          onClick={() => {
            handleRegionClick("Galar");
          }}
        >
          Galar
        </h2>
      </div>
    </>
  );
}
