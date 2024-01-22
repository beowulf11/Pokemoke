import gql from 'graphql-tag';
import { QueryOptions } from '@apollo/client';
import { PokemonsQuery } from '@/api/graphql';
import { DEFAULT_LIMIT } from '@/app/(overview)/constants';
import { TabType } from '@/app/(overview)/types';

export const QUERY_POKEMONS_LIST = gql`
  query pokemons($offset: Int, $limit: Int, $type: String, $search: String, $isFavorite: Boolean) {
    pokemons(
      query: {
        limit: $limit
        offset: $offset
        search: $search
        filter: { type: $type, isFavorite: $isFavorite }
      }
    ) {
      limit
      count
      edges {
        id
        name
        types
        image
        isFavorite
      }
    }
  }
`;

export const QUERY_POKEMONS_COUNT = gql`
  query pokemons_count($limit: Int, $type: String, $search: String, $isFavorite: Boolean) {
    pokemons(
      query: { limit: $limit, search: $search, filter: { type: $type, isFavorite: $isFavorite } }
    ) {
      limit
      count
    }
  }
`;

export const QUERY_POKEMON_TYPES = gql`
  query pokemon_types {
    pokemonTypes
  }
`;

export function pokemonsQueryOptions(
  search?: string,
  tab?: string,
  type?: string,
  page?: number,
  favoritesPage?: number
): QueryOptions<PokemonsQuery> {
  return {
    variables: {
      search: search || undefined,
      isFavorite: tab === TabType.Favorites,
      type,
      offset: DEFAULT_LIMIT * ((tab === TabType.Favorites ? favoritesPage || 1 : page || 1) - 1),
      limit: DEFAULT_LIMIT,
    },
  } as QueryOptions<PokemonsQuery>;
}
