import { notFound } from 'next/navigation';
import { getApolloClient } from '@/api/server-client';
import { PokemonQuery } from '@/api/graphql';
import { QUERY_POKEMON_DETAIL } from '@/app/[name]/query';
import Pokemon from '@/app/[name]/pokemon';

type PokemonPageProps = {
  params: { name: string };
};

export default async function PokemonPage({ params: { name } }: PokemonPageProps) {
  const getClient = getApolloClient();

  const { data } = await getClient.query<PokemonQuery>({
    query: QUERY_POKEMON_DETAIL,
    variables: {
      name,
    },
  });

  const { pokemonByName } = data as PokemonQuery;

  if (!pokemonByName) {
    notFound();
  } else {
    return <Pokemon name={name} />;
  }
}
