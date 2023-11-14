"use client";
import { FilterByRegion } from "@/components/FilterByRegion";
import { PokemonGrid } from "@/components/PokemonGrid";
import { getPokemonList } from "@/lib/PokemonAPI";
import { useEffect, useState } from "react";

enum Region {
  All = "All",
  Kanto = "Kanto",
  Johto = "Johto",
  Hoenn = "Hoenn",
  Sinnoh = "Sinnoh",
  Unova = "Unova",
  Kalos = "Kalos",
  Alola = "Alola",
  Galar = "Galar",
}

const regionRanges = {
  All: { start: 1, end: 905 },
  Kanto: { start: 1, end: 151 },
  Johto: { start: 152, end: 251 },
  Hoenn: { start: 252, end: 386 },
  Sinnoh: { start: 387, end: 493 },
  Unova: { start: 494, end: 649 },
  Kalos: { start: 650, end: 721 },
  Alola: { start: 722, end: 809 },
  Galar: { start: 810, end: 905 },
};

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [FilteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [AllPokemonList, setAllPokemonList] = useState<Pokemon[]>([]);

  function filterPokemonByPokedexNumber(
    pokemonList: Pokemon[],
    start: number,
    end: number
  ) {
    return pokemonList.filter((pokemon) => {
      const pokedexNumber = parseInt(
        pokemon.url.split("/").slice(-2, -1)[0],
        10
      );
      return pokedexNumber >= start && pokedexNumber <= end;
    });
  }

  async function fetchData() {
    const pokemonList = await getPokemonList(905, 0);
    setAllPokemonList(pokemonList);
    setFilteredPokemonList(pokemonList);
  }

  function handleRegionChange(selectedRegion: Region) {
    const { start, end } = regionRanges[selectedRegion];
    setFilteredPokemonList(
      filterPokemonByPokedexNumber(AllPokemonList, start, end)
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FilterByRegion onRegionChange={handleRegionChange} />
      <PokemonGrid pokemonList={FilteredPokemonList} />
    </>
  );
}
