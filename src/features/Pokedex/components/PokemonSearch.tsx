'use client';

type Props = {
  onSearch: (value: string) => void;
};

export default function PokemonSearch({ onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      onChange={e => onSearch(e.target.value)}
      className="
        w-full mb-6 px-4 py-2 rounded-md
        bg-zinc-800 text-white
        border border-zinc-700
        focus:border-amber-400 focus:outline-none
      "
    />
  );
}