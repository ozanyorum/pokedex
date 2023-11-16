import { Button } from "@/components/ui/button";
import { getPokemon } from "@/lib/PokemonAPI";
import Image from "next/image";
import Link from "next/link";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function PokemonTypes({ types }: { types: PokemonType[] }) {
  return (
    <div className="m-4 text-2xl text-bold flex gap-8">
      {types.map(({ type: { name } }) => (
        <div key={name}>{name.toUpperCase()}</div>
      ))}
    </div>
  );
}

function PokemonStats({ stats }: { stats: PokemonStat[] }) {
  return (
    <div className="flex-col text-center m-4">
      {stats.map(({ stat: { name }, base_stat }) => (
        <div style={{ width: "400px" }} key={name}>
          <h3>
            {name.toUpperCase()}: {base_stat}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject: PokemonObject = await getPokemon(pokemonName);
  const capitalizedPokemonName = capitalizeFirstLetter(pokemonObject.name);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center gap-4">
        <Link href={(pokemonObject.id - 1).toString()}>
          {pokemonObject.id > 1 && <Button>Previous</Button>}
        </Link>
        <h1 className="text-3xl font-bold m-4">
          {capitalizedPokemonName} {" #" + pokemonObject.id}
        </h1>
        <Link href={(pokemonObject.id + 1).toString()}>
          {pokemonObject.id < 905 && <Button>Next</Button>}
        </Link>
      </div>
      <div className="flex m-4">
        <Image
          src={pokemonObject.sprites.other["official-artwork"].front_default}
          alt={`Official artwork for ${pokemonName}.`}
          width={200}
          height={200}
        />
        {/* <Image
          src={pokemonObject.sprites.other.home.front_default}
          alt={`Official artwork for ${pokemonName}.`}
          width={200}
          height={200}
        />
        <Image
          src={pokemonObject.sprites.other.dream_world.front_default}
          alt={`Official artwork for ${pokemonName}.`}
          width={200}
          height={200}
        /> */}
      </div>
      <PokemonTypes types={pokemonObject.types} />
      <PokemonStats stats={pokemonObject.stats} />
    </div>
  );
}
