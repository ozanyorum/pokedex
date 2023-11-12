import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
  id: string;
}

export function PokemonCard({ name, id }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="text-center group rounded-lg border border-transparent m-4 p-4 transition-colors border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <h2 className="text-xl">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
      <Image
        className="inline-block"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        width={100}
        height={100}
      />
    </Link>
  );
}
