import { getApolloClient } from '@/api/server-client';
import {
  pokemonsQueryOptions,
  QUERY_POKEMON_TYPES,
  QUERY_POKEMONS_LIST,
} from '@/app/(overview)/query';
import { Pokemons } from '@/app/(overview)/pokemons';

type PokemonCollectionProps = {
  search?: string;
  tab?: string;
  type?: string;
  page?: number;
  favoritesPage?: number;
};

export default async function PokemonCollection({ searchParams }: PokemonCollectionProps) {
  const getClient = getApolloClient();

  await Promise.all([
    getClient.query({
      query: QUERY_POKEMONS_LIST,
      ...pokemonsQueryOptions(
        searchParams.search,
        searchParams.tab,
        searchParams.type,
        searchParams.page || 1,
        searchParams.favoritesPage || 1
      ),
    }),
    getClient.query({
      query: QUERY_POKEMON_TYPES,
    }),
  ]);

  return <Pokemons />;
}
