import { getPokemonDetails, getPokemonSpecies, getEvolutionChain, getFlavorText } from '@/src/api/pokeApi';
import { getTypeColor } from '@/src/utils/pokemonColors';
import Link from 'next/link';

const statTranslations: Record<string, string> = {
  hp: "Salud",
  attack: "Ataque",
  defense: "Defensa",
  "special-attack": "Ataque Esp.",
  "special-defense": "Defensa Esp.",
  speed: "Velocidad",
};

type Props = {
  name: string;
};

export default async function PokemonDetailsPage({ name }: Props) {
  const pokemon = await getPokemonDetails(name);

  // Fetch Evolution Data
  const species = await getPokemonSpecies(pokemon.name);
  const evoChainData = await getEvolutionChain(species.evolution_chain.url);

  // Helper to flatten evolution chain
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getEvoStages = (chain: any) => {
    const stages: { name: string; id: number }[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = chain;

    while (current) {
      const id = parseInt(current.species.url.split('/').filter(Boolean).pop()!);
      stages.push({ name: current.species.name, id });
      current = current.evolves_to[0]; // Simplified linear path for now
    }
    return stages;
  };

  const evoStages = getEvoStages(evoChainData.chain);

  // Fetch basic data for each evo stage (to get images)
  const evoDetails = await Promise.all(
    evoStages.map(async (stage) => {
      // We can construct the image URL directly since we have the ID
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${stage.id}.png`;
      return { ...stage, image };
    })
  );

  // Fetch initial moves and their descriptions
  const initialMoves = pokemon.moves
    .filter(m => m.version_group_details.some(v => v.level_learned_at <= 1))
    .slice(0, 15);

  const moveDetails = await Promise.all(
    initialMoves.map(async (m) => ({
      ...m,
      description: await getFlavorText(m.move.url)
    }))
  );

  // Fetch abilities and their descriptions
  const abilityDetails = await Promise.all(
    pokemon.abilities.map(async (a) => ({
      ...a,
      description: await getFlavorText(a.ability.url)
    }))
  );

  // Use the primary type for the main thematic color
  const primaryType = pokemon.types[0]?.type.name || 'normal';
  const themeColor = getTypeColor(primaryType);

  return (
    <div
      className="min-h-screen py-12 px-4 transition-colors duration-500"
      style={{ backgroundColor: `${themeColor}15` }} // Even subtler tint
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center px-4 sm:px-8">
          <div>
            <Link
              href="/Pokedex"
              className="inline-flex items-center text-sm font-black tracking-widest uppercase text-zinc-500 hover:text-white transition-colors mb-2"
            >
              &larr; Volver a la Pokedex
            </Link>
            <h1 className="text-5xl md:text-7xl capitalize font-black tracking-tighter text-white drop-shadow-2xl">
              {pokemon.name}
            </h1>
          </div>
          <span className="text-white/20 font-black text-6xl md:text-8xl tracking-tighter absolute right-4 top-20 select-none pointer-events-none">
            #{pokemon.id.toString().padStart(3, '0')}
          </span>
        </div>

        <div className="relative">
          {/* Dynamic Background Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full blur-[120px] opacity-30 -z-10"
            style={{ backgroundColor: themeColor }}
          />

          <div className="flex justify-center -mt-8 mb-8 relative z-10">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="w-64 h-64 md:w-96 md:h-96 object-contain hover:scale-110 transition-transform duration-700 filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)] cursor-pointer"
            />
          </div>

          <div className="space-y-8">
            {/* Type Tags */}
            <div className="flex justify-center gap-4 relative z-20">
              {pokemon.types.map(t => {
                const typeColor = getTypeColor(t.type.name);
                return (
                  <span
                    key={t.type.name}
                    className="px-10 py-3 rounded-2xl uppercase text-sm font-black tracking-[0.2em] text-white shadow-2xl transition-all hover:-translate-y-2 border border-white/10"
                    style={{
                      backgroundColor: typeColor,
                      boxShadow: `0 10px 30px ${typeColor}44`
                    }}
                  >
                    {t.type.name}
                  </span>
                )
              })}
            </div>

            {/* Stats & Info Card */}
            <div className="bg-zinc-900/60 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-black/30 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8 font-black flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: themeColor }}></span>
                    Dimensiones
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                      <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Altura</span>
                      <span className="font-black text-white text-3xl">{pokemon.height / 10} <span className="text-zinc-600 text-sm">m</span></span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                      <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Peso</span>
                      <span className="font-black text-white text-3xl">{pokemon.weight / 10} <span className="text-zinc-600 text-sm">kg</span></span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8 font-black flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: themeColor }}></span>
                    Estadísticas Base
                  </h3>
                  <div className="space-y-4">
                    {pokemon.stats.map(s => (
                      <div key={s.stat.name} className="flex justify-between items-center group">
                        <span className="text-zinc-500 uppercase font-black text-[10px] tracking-widest group-hover:text-white transition-colors">
                          {statTranslations[s.stat.name] || s.stat.name.replace("-", " ")}
                        </span>
                        <div className="flex items-center gap-4">
                          <span className="font-black text-white w-10 text-right text-lg">{s.base_stat}</span>
                          <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${Math.min(100, (s.base_stat / 255) * 100)}%`,
                                backgroundColor: themeColor,
                                boxShadow: `0 0 10px ${themeColor}`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Abilities Section - Refined with Hover Descriptions */}
              <div className="mt-12 pt-12 border-t border-white/5">
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8 font-black flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ backgroundColor: themeColor, color: themeColor }}></span>
                  Habilidades Especiales
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {abilityDetails.map(a => (
                    <div
                      key={a.ability.name}
                      className={`group relative p-6 bg-white/5 backdrop-blur-md border rounded-2xl transition-all duration-300 ${a.is_hidden ? 'border-amber-500/20 bg-amber-500/5' : 'border-white/5 hover:border-white/20 hover:bg-white/10'}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Hover Description Overlay */}
                      <div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-center z-50 rounded-2xl">
                        <p className="text-xs text-zinc-300 leading-relaxed font-bold italic">
                          &quot;{a.description}&quot;
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="min-w-0">
                          <p className="text-white font-black capitalize text-lg tracking-tight truncate">
                            {a.ability.name.replace("-", " ")}
                          </p>
                          {a.is_hidden && (
                            <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Habilidad Oculta</span>
                          )}
                        </div>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xl shrink-0 ${a.is_hidden ? 'text-amber-500 bg-amber-500/10' : 'text-white/40 bg-white/5'}`}>
                          {a.is_hidden ? '✨' : '⭐'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moves Section - Refined with Hover Descriptions */}
              <div className="mt-12 pt-12 border-t border-white/5">
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-10 font-black flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ backgroundColor: themeColor, color: themeColor }}></span>
                  Ataques Iniciales
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {moveDetails.map(m => (
                    <div
                      key={m.move.name}
                      className="group relative p-4 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-help"
                    >
                      <div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-center z-50 rounded-2xl">
                        <p className="text-[10px] text-zinc-300 leading-tight font-bold italic">
                          {m.description}
                        </p>
                      </div>

                      <div className="relative z-10">
                        <p className="text-white font-bold capitalize text-sm tracking-tight truncate">
                          {m.move.name.replace("-", " ")}
                        </p>
                        <div className="mt-1 w-4 h-1 rounded-full opacity-30 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: themeColor }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-center text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                  Pasa el cursor sobre una habilidad o ataque para ver su descripción.
                </p>
              </div>
            </div>

            {/* Evolution Chain Section */}
            <div className="relative z-20">
              <h2 className="text-2xl font-black text-white px-8 mb-8 uppercase tracking-[0.3em] flex items-center gap-4">
                Línea <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Evolutiva</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                {evoDetails.map((stage, idx) => (
                  <div key={stage.name} className="flex flex-col md:flex-row items-center gap-6 flex-1">
                    <Link
                      href={`/Pokedex/${stage.name}`}
                      className={`group relative w-full p-8 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 ${stage.name === pokemon.name ? 'border-white/20 ring-2 ring-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : 'border-white/5 hover:border-white/20'}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                      <div className="relative z-10 flex flex-col items-center">
                        <img
                          src={stage.image}
                          alt={stage.name}
                          className={`w-32 h-32 object-contain transition-all duration-500 drop-shadow-2xl ${stage.name === pokemon.name ? 'scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}`}
                        />
                        <h4 className={`mt-4 capitalize font-black tracking-tight text-xl ${stage.name === pokemon.name ? 'text-white' : 'text-zinc-500 group-hover:text-white'}`}>
                          {stage.name}
                        </h4>
                        <div className="mt-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                          #{stage.id.toString().padStart(3, '0')}
                        </div>
                      </div>
                    </Link>
                    {idx < evoDetails.length - 1 && (
                      <div className="text-zinc-800 text-4xl rotate-90 md:rotate-0 select-none opacity-30">
                        &rarr;
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
