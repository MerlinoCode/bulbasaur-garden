import PokemonDetailsPage from '@/src/features/Pokedex/PokemonDetailsPage';

type Props = {
  params: Promise<{
    name: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  return <PokemonDetailsPage name={params.name} />;
}
