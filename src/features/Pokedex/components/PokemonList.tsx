'use client';

import Link from 'next/link';

import { PokemonDetails } from '@/src/api/pokeApi';
import { getTypeColor } from '@/src/utils/pokemonColors';

type Props = {
  pokemon: PokemonDetails[];
};

export default function PokemonList({ pokemon }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-white">
      {pokemon.map(p => {
        const spriteUrl = p.sprites.other["official-artwork"].front_default || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
        const primaryType = p.types[0]?.type.name || 'normal';
        const cardColor = getTypeColor(primaryType);

        return (
          <li key={p.name}>
            <Link
              href={`/Pokedex/${p.name}`}
              className="group block rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 relative border border-white/10"
              style={{
                background: `linear-gradient(145deg, ${cardColor}44 0%, #18181b 100%)`
              }}
            >
              <div className="absolute top-4 right-5 font-black text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                #{p.id.toString().padStart(3, '0')}
              </div>

              <div className="p-8 pb-0 flex justify-center relative">
                {/* Decorative background circle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ backgroundColor: cardColor }}
                />

                <img
                  src={spriteUrl}
                  alt={p.name}
                  className="w-36 h-36 object-contain filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 relative z-10"
                  loading="lazy"
                />
              </div>

              <div className="p-6 text-center mt-2 bg-zinc-950/40 backdrop-blur-sm border-t border-white/5">
                <h2 className="capitalize font-extrabold text-2xl tracking-wide mb-3 drop-shadow-md text-white/90 group-hover:text-white transition-colors">{p.name}</h2>
                <div className="flex justify-center gap-2">
                  {p.types.map(t => (
                    <span
                      key={t.type.name}
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm"
                      style={{ backgroundColor: getTypeColor(t.type.name) }}
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
