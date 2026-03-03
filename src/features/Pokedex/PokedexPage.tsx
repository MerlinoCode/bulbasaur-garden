// app/pokemon/PokedexPage.tsx

import PokemonList from './components/PokemonList';
import PaginationControls from './components/PaginationControls';

type pokemon = {
  name: string;
  url: string;
};

const LIMIT = 50;

async function getPokemon(page: number) {
  const offset = (page - 1) * LIMIT;

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error('Error al cargar Pokémon');
  }

  return res.json();
}

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function PokedexPage({ searchParams }: Props) {
  const page = Number(searchParams?.page ?? 1);
  const data = await getPokemon(page);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl text-white mb-6">Pokédex</h1>

      <PokemonList pokemon={data.results} />

      <PaginationControls
        page={page}
        hasNext={Boolean(data.next)}
        hasPrev={Boolean(data.previous)}
      />
    </div>
  );
}
