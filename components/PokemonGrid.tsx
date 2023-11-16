"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { PokemonCard } from "./PokemonCard";
import { usePokemonContext } from "@/lib/PokemonContext";

interface PokemonGridProps {
  initialPokemonList: Pokemon[];
}

function useSearchFilter(searchText: string, list: Pokemon[]) {
  return useMemo(() => {
    return list.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, list]);
}

export function PokemonGrid({ initialPokemonList }: PokemonGridProps) {
  const { currentPokemonList, setCurrentPokemonList, setAllPokemonList } =
    usePokemonContext();
  const [searchText, setSearchText] = useState("");
  const filteredPokemonList = useSearchFilter(searchText, currentPokemonList);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  useEffect(() => {
    setCurrentPokemonList(initialPokemonList);
    setAllPokemonList(initialPokemonList);
  }, [initialPokemonList, setAllPokemonList, setCurrentPokemonList]);

  return (
    <>
      <div>
        <h2 className="text-2xl text-center mx-auto m-4">Search</h2>
        <div className="max-w-xs mx-auto shadow">
          <Input
            className="text-center"
            type="text"
            value={searchText}
            id="pokemonName"
            placeholder="Enter Pokemon Name"
            autoComplete="off"
            onChange={handleSearchChange}
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
