'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useSearchParams } from 'next/navigation';
import { pokemonsQueryOptions, QUERY_POKEMONS_LIST } from '@/app/(overview)/query';
import { PokemonsQuery } from '@/api/graphql';
import { DisplayType } from '@/app/(overview)/types';
import { PokemonGrid } from '@/components/pokemon/collection/grid/PokemonGrid';
import { PokemonList } from '@/components/pokemon/collection/list/PokemonList';
import { PokemonCollectionEmpty } from '@/components/pokemon/collection/empty/PokemonCollectionEmpty';
import { DEFAULT_TAB_TYPE } from '@/app/(overview)/constants';

export function Pokemons() {
  const searchParams = useSearchParams();
  const display = searchParams.get('display') ?? DisplayType.Grid;
  const type = searchParams.get('type') ?? '';
  const tab = searchParams.get('tab') ?? DEFAULT_TAB_TYPE;
  const search = searchParams.get('search') ?? '';
  const page = Number(searchParams.get('page')) || 1;
  const favoritesPages = Number(searchParams.get('favoritesPage')) || 1;

  const { data } = useSuspenseQuery<PokemonsQuery>(
    QUERY_POKEMONS_LIST,
    pokemonsQueryOptions(search, tab, type, page, favoritesPages)
  );

  const { pokemons } = data as PokemonsQuery;

  return pokemons.edges.length === 0 ? (
    <PokemonCollectionEmpty tab={tab} />
  ) : display === DisplayType.Grid ? (
    <PokemonGrid pokemons={pokemons} />
  ) : (
    <PokemonList pokemons={pokemons} />
  );
}
