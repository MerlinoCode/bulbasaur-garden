// app/pokemon/PokedexPage.tsx

import PokemonList from './components/PokemonList';
import PaginationControls from './components/PaginationControls';
import SearchBar from './components/SearchBar';
import BackToTopButton from './components/BackToTopButton';

import { getDetailedPokemonList } from '@/src/api/pokeApi';

type Props = {
  searchParams?: Promise<{
    page?: string;
    search?: string;
  }>;
};

export default async function PokedexPage(props: Props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page ?? 1);
  const search = searchParams?.search ?? '';

  const data = await getDetailedPokemonList(page, 50, search);

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 mb-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-full mb-6">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              <div className="w-6 h-6 bg-white rounded-full border-4 border-zinc-900"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 tracking-tight mb-4">
            Pokédex
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Explora el vasto mundo de Pokémon. Descubre sus tipos, estadísticas y características únicas.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Controls Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800/50 backdrop-blur-sm">
          <SearchBar />

          <PaginationControls
            page={page}
            hasNext={Boolean(data.next)}
            hasPrev={Boolean(data.previous)}
          />
        </div>

        {/* Result Area */}
        {data.results.length > 0 ? (
          <>
            <PokemonList pokemon={data.results} />
            <BackToTopButton />
          </>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-16 text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-zinc-800 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-zinc-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No Pokémon found</h2>
            <p className="text-zinc-400 max-w-sm mx-auto">We couldn't find any Pokémon matching "{search}". Try searching for a different name or ID.</p>
          </div>
        )}

      </div>
    </div>
  );
}
