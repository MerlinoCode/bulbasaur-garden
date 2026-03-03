import PokedexPage from '@/src/features/Pokedex/PokedexPage';

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default function Page({ searchParams }: Props) {
  return <PokedexPage searchParams={searchParams} />;
}