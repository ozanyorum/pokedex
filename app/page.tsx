import { FilterByRegion } from "@/components/FilterByRegion";
import { PokemonGrid } from "@/components/PokemonGrid";
import { getPokemonList } from "@/lib/PokemonAPI";

export default async function Home() {
  const initialPokemonList = await getPokemonList(905, 0);

  return (
    <>
      <FilterByRegion />
      <PokemonGrid initialPokemonList={initialPokemonList} />
    </>
  );
}
