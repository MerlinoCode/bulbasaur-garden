'use client';

import { useState } from 'react';
import PokemonSearch from './PokemonSearch';

type Pokemon = {
  name: string;
  url: string;
};

type Props = {
  initialPokemon: Pokemon[];
};

export default function PokemonList({ initialPokemon }: Props) {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>(initialPokemon);
  const [loading, setLoading] = useState(false);

  async function loadMorePokemon() {
    setLoading(true);

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=30&offset=30`
    );
    const data = await res.json();

    setPokemon(data.results);
    setAllPokemon(data.results);
    setLoading(false);
  }

  function handleSearch(value: string) {
    const filtered = allPokemon.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setPokemon(filtered);
  }

  return (
    <>
      <PokemonSearch onSearch={handleSearch} />

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
        {pokemon.map(p => (
          <li
            key={p.name}
            className="bg-zinc-800 p-3 rounded-md text-center capitalize"
          >
            {p.name}
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-6">
        <button
          onClick={loadMorePokemon}
          disabled={loading}
          className="px-6 py-2 bg-amber-400 text-black rounded-md
                     hover:bg-amber-300 transition disabled:opacity-50"
        >
          {loading ? 'Cargando...' : 'Ver más Pokémon'}
        </button>
      </div>
    </>
  );
}