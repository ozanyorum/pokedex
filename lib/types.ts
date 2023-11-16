type Pokemon = {
  name: string;
  url: string;
};

type PokemonContextType = {
  currentPokemonList: Pokemon[];
  setCurrentPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  allPokemonList: Pokemon[];
  setAllPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
};

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonObject {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
  stats: PokemonStat[];
}
