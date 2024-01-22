'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Center, Pagination, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { TabType } from '@/app/(overview)/types';
import { QUERY_POKEMONS_COUNT } from '@/app/(overview)/query';
import { PokemonsQuery } from '@/api/graphql';

type FooterProps = {
  search: string | undefined | null;
  tab: string | undefined | null;
  type: string | undefined | null;
  page: number | undefined | null;
  favoritesPage: number | undefined | null;
  limit: number | undefined | null;
  onSetPage: (page: number) => void;
  onSetFavoritesPage: (page: number) => void;
};

export default function Footer({
  search,
  tab,
  type,
  limit,
  page,
  favoritesPage,
  onSetPage,
  onSetFavoritesPage,
}: FooterProps) {
  const theme = useMantineTheme();
  const showLargeNavigation = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const { data } = useSuspenseQuery<PokemonsQuery>(QUERY_POKEMONS_COUNT, {
    variables: {
      type,
      isFavorite: tab === TabType.Favorites,
      search,
      limit,
    },
    cachePolicy: 'cache-first',
  });

  const {
    pokemons: { count },
  } = data || { pokemons: { count: 0 } };
  const empty = count === 0;

  return (
    <Center mt={20}>
      <Pagination
        total={Math.ceil(count / limit)}
        size={showLargeNavigation ? 'xl' : 'md'}
        disabled={empty}
        value={(tab === TabType.Favorites ? favoritesPage : page) || 1}
        onChange={tab === TabType.Favorites ? onSetFavoritesPage : onSetPage}
      />
    </Center>
  );
}
