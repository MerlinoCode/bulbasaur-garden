import { getPokemonDetails } from '@/src/api/pokeApi';
import { getTypeColor } from '@/src/utils/pokemonColors';
import Link from 'next/link';

type Props = {
  name: string;
};

export default async function PokemonDetailsPage({ name }: Props) {
  const pokemon = await getPokemonDetails(name);

  // Use the primary type for the main thematic color
  const primaryType = pokemon.types[0]?.type.name || 'normal';
  const themeColor = getTypeColor(primaryType);

  return (
    <div
      className="min-h-screen py-12 px-4 transition-colors duration-500"
      style={{ backgroundColor: `${themeColor}22` }} // Light tint of the theme color
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex justify-between items-center px-4 sm:px-8">
          <div>
            <Link
              href="/Pokedex"
              className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-zinc-400 hover:text-white transition-colors mb-2"
            >
              &larr; Back to Pokedex
            </Link>
            <h1 className="text-4xl md:text-5xl capitalize font-extrabold tracking-tight text-white drop-shadow-lg">
              {pokemon.name}
            </h1>
          </div>
          <span className="text-white/60 font-black text-2xl tracking-widest">
            #{pokemon.id.toString().padStart(3, '0')}
          </span>
        </div>

        <div className="relative">
          {/* Dynamic Background Circle behind the Pokemon */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl opacity-40 -z-10"
            style={{ backgroundColor: themeColor }}
          />

          <div className="flex justify-center -mt-8 mb-8 relative z-10">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="w-56 h-56 md:w-80 md:h-80 object-contain hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] cursor-pointer"
            />
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative z-20">
            <div className="flex justify-center gap-4 mb-10">
              {pokemon.types.map(t => {
                const typeColor = getTypeColor(t.type.name);
                return (
                  <span
                    key={t.type.name}
                    className="px-8 py-2.5 rounded-full uppercase text-sm font-bold tracking-widest text-white shadow-lg transition-transform hover:-translate-y-1"
                    style={{ backgroundColor: typeColor }}
                  >
                    {t.type.name}
                  </span>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-black/40 rounded-3xl p-6 border border-white/5">
                <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }}></span>
                  Measurements
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-zinc-800/50 pb-3">
                    <span className="text-zinc-400 font-medium">Height</span>
                    <span className="font-bold text-white text-lg">{pokemon.height / 10} <span className="text-zinc-500 text-sm">m</span></span>
                  </div>
                  <div className="flex justify-between items-end border-b border-zinc-800/50 pb-3">
                    <span className="text-zinc-400 font-medium">Weight</span>
                    <span className="font-bold text-white text-lg">{pokemon.weight / 10} <span className="text-zinc-500 text-sm">kg</span></span>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-3xl p-6 border border-white/5">
                <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }}></span>
                  Base Stats
                </h3>
                <div className="space-y-4">
                  {pokemon.stats.map(s => (
                    <div key={s.stat.name} className="flex justify-between items-center group">
                      <span className="text-zinc-400 capitalize font-medium text-sm group-hover:text-white transition-colors">
                        {s.stat.name.replace("-", " ")}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-white w-8 text-right">{s.base_stat}</span>
                        {/* Custom stat bar */}
                        <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full opacity-80"
                            style={{
                              width: `${Math.min(100, (s.base_stat / 255) * 100)}%`,
                              backgroundColor: themeColor
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
