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
      className="text-center rounded-lg border m-2 p-2 transition-colors border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-200 hover:dark:bg-neutral-800/50"
      key={name + "Card"}
    >
      <h2 className="text-l">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
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
