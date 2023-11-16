import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
  id: string;
}

export function PokemonCard({ name, id }: PokemonCardProps) {
  return (
    <Link href={id} className="custom-button m-2" key={name + "Card"}>
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
