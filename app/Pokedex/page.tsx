import PokedexPage from '@/src/features/Pokedex/PokedexPage';

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
};

export default async function Page(props: Props) {
  return <PokedexPage searchParams={props.searchParams} />;
}