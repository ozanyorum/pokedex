"use client";

import { usePokemonContext } from "@/lib/PokemonContext";
import { useEffect } from "react";

const regions = {
  All: { start: 1, end: 905 },
  Kanto: { start: 1, end: 151 },
  Johto: { start: 152, end: 251 },
  Hoenn: { start: 252, end: 386 },
  Sinnoh: { start: 387, end: 493 },
  Unova: { start: 494, end: 649 },
  Kalos: { start: 650, end: 721 },
  Alola: { start: 722, end: 809 },
  Galar: { start: 810, end: 905 },
} as const;

function filterPokemonByPokedexNumber(
  pokemonList: Pokemon[],
  start: number,
  end: number
) {
  return pokemonList.filter((pokemon) => {
    const pokedexNumber = parseInt(pokemon.url.split("/").slice(-2, -1)[0], 10);
    return pokedexNumber >= start && pokedexNumber <= end;
  });
}

type Region = keyof typeof regions;

type RegionButtonProps = {
  region: Region;
  selectedRegion: Region;
  setSelectedRegion: (region: Region) => void;
};

function RegionButton({
  region,
  selectedRegion,
  setSelectedRegion,
}: RegionButtonProps) {
  return (
    <button
      key={region}
      className={`custom-button ${
        selectedRegion === region ? "custom-button-selected" : ""
      }`}
      onClick={() => setSelectedRegion(region)}
    >
      {region === "All" ? "Show All" : region}
    </button>
  );
}

export function FilterByRegion() {
  const {
    selectedRegion,
    setSelectedRegion,
    allPokemonList,
    setCurrentPokemonList,
  } = usePokemonContext();

  useEffect(() => {
    const regionRange = regions[selectedRegion as Region];
    if (regionRange) {
      setCurrentPokemonList(
        filterPokemonByPokedexNumber(
          allPokemonList,
          regionRange.start,
          regionRange.end
        )
      );
    }
  }, [allPokemonList, selectedRegion, setCurrentPokemonList]);

  return (
    <>
      <h2 className="text-xl text-center mt-8 mb-2">Filter by Region</h2>
      <div className="flex flex-wrap text-l text-center mx-auto mb-8 p-4 justify-center gap-4 border border-y-2 border-primary-foreground shadow">
        {Object.keys(regions).map((region) => (
          <RegionButton
            key={region}
            region={region as Region}
            selectedRegion={selectedRegion as Region}
            setSelectedRegion={setSelectedRegion}
          />
        ))}
      </div>
    </>
  );
}
