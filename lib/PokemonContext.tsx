"use client";
import { createContext, useContext, useState } from "react";

const defaultContextValue: PokemonContextType = {
  currentPokemonList: [],
  setCurrentPokemonList: () => {},
  allPokemonList: [],
  setAllPokemonList: () => {},
  selectedRegion: "",
  setSelectedRegion: () => {},
};

const PokemonContext = createContext<PokemonContextType>(defaultContextValue);

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [currentPokemonList, setCurrentPokemonList] = useState<Pokemon[]>([]);
  const [allPokemonList, setAllPokemonList] = useState<Pokemon[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("Kanto");

  return (
    <PokemonContext.Provider
      value={{
        currentPokemonList,
        setCurrentPokemonList,
        allPokemonList,
        setAllPokemonList,
        selectedRegion,
        setSelectedRegion,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
