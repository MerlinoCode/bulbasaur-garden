import Title from "@/src/components/Title";
import PokemonList from './components/PokemonList';

type Pokemon = {
  name: string;
  url: string;
};

async function getPokemon(limit = 50) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
    {
      next: { revalidate: 3600 }, // cache 1 hora
    }
  );

  if (!res.ok) {
    throw new Error('Error al cargar Pokémon');
  }

  return res.json();
}

export default async function PokedexPage() {
    const data = await getPokemon(50);

    return (
        <div className="flex items-center justify-center">
            <main className="flex w-full max-w-3xl flex-col justify-between sm:items-start mt-6 px-8">
                <Title text="Pokedex" type='xLarge' border={true} />
                <PokemonList initialPokemon={data.results} />
            </main>
        </div>
    );
}