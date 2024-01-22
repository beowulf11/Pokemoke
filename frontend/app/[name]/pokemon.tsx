'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { PokemonQuery } from '@/api/graphql';
import { QUERY_POKEMON_DETAIL } from '@/app/[name]/query';
import { PokemonDetail } from '@/components/pokemon/detail/PokemonDetail';

type PokemonProps = {
  name: string;
};

export default function Pokemon({ name }: PokemonProps) {
  const { data } = useSuspenseQuery<PokemonQuery>(QUERY_POKEMON_DETAIL, {
    variables: {
      name,
    },
  });

  const { pokemonByName } = data as PokemonQuery;

  return <PokemonDetail {...pokemonByName} />;
}
