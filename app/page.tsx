"use client";
import { FilterByRegion } from "@/components/FilterByRegion";
import { PokemonGrid } from "@/components/PokemonGrid";
import { getPokemonList } from "@/lib/PokemonAPI";
import { useEffect, useState } from "react";

export default function Home() {
  const [FilteredPokemonList, setFilteredPokemonList] = useState([]);
  const [AllPokemonList, setAllPokemonList] = useState([]);

  const filterPokemonByPokedexNumber = (
    pokemonList: any,
    start: number,
    end: number
  ) => {
    return pokemonList.filter((pokemon: any) => {
      const pokedexNumber = parseInt(
        pokemon.url.split("/").slice(-2, -1)[0],
        10
      );
      return pokedexNumber >= start && pokedexNumber <= end;
    });
  };

  const loadPokemonList = async () => {
    const pokemonList = await getPokemonList(1000, 0);
    setAllPokemonList(pokemonList);
    setFilteredPokemonList(pokemonList);
  };

  const handleRegionChange = (selectedRegion: string) => {
    if (selectedRegion == "Kanto")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 1, 151)
      );
    if (selectedRegion == "Johto")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 152, 251)
      );
    if (selectedRegion == "Hoenn")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 252, 386)
      );
    if (selectedRegion == "Sinnoh")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 387, 493)
      );
    if (selectedRegion == "Unova")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 494, 649)
      );
    if (selectedRegion == "Kalos")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 650, 721)
      );
    if (selectedRegion == "Alola")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 722, 809)
      );
    if (selectedRegion == "Galar")
      setFilteredPokemonList(
        filterPokemonByPokedexNumber(AllPokemonList, 810, 905)
      );
  };

  useEffect(() => {
    loadPokemonList();
  }, []);

  return (
    <>
      <FilterByRegion onRegionChange={handleRegionChange} />
      <PokemonGrid pokemonList={FilteredPokemonList} />
    </>
  );
}
