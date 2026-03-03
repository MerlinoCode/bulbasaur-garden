'use client';

type Pokemon = {
  name: string;
  url: string;
};

type Props = {
  pokemon: Pokemon[];
};

export default function PokemonList({ pokemon }: Props) {
  return (
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
  );
}
