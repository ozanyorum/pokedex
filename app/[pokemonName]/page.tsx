import { getPokemon } from "@/lib/PokemonAPI";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  interface PokemonType {
    type: {
      name: string;
    };
  }

  interface Stat {
    base_stat: number;
    stat: {
      name: string;
    };
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold m-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div className="m-4">
        <Image
          src={pokemonObject.sprites.other["official-artwork"].front_default}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="m-4 text-2xl text-bold flex gap-8">
        {pokemonObject.types.map((typesObject: PokemonType) => {
          const type = typesObject.type.name;
          return <div key={type}>{type.toUpperCase()}</div>;
        })}
      </div>
      <div className="flex-col m-4">
        {pokemonObject.stats.map((statObject: Stat) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div
              className="flex items-stretch"
              style={{ width: "400px" }}
              key={statName}
            >
              <h3 className="p-3 w-2/4">
                {statName.toUpperCase()}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
