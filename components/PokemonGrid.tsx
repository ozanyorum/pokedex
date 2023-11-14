"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { PokemonCard } from "./PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonGridProps {
  pokemonList: Pokemon[];
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);
  return (
    <>
      <div>
        <h2 className="text-2xl text-center mx-auto m-4">Search</h2>
        <div className="max-w-xs mx-auto m-4">
          <Input
            className="text-center"
            type="text"
            value={searchText}
            id="pokemonName"
            placeholder="Enter Pokemon Name"
            autoComplete="off"
            onChange={(e) => setSearchText(e.target.value)}
          ></Input>
        </div>
      </div>
      <div className="m-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9">
        {filteredPokemonList.map((pokemon: Pokemon) => {
          return (
            <PokemonCard
              key={pokemon.name + "Card"}
              name={pokemon.name}
              id={pokemon.url.split("/").slice(-2, -1)[0]}
            />
          );
        })}
      </div>
    </>
  );
}
