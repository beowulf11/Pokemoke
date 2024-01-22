'use client';

import { useSearchParams } from 'next/navigation';
import { DisplayType } from '@/app/(overview)/types';
import { PokemonGridLoading } from '@/components/pokemon/collection/grid/PokemonGridLoading';
import { PokemonListLoading } from '@/components/pokemon/collection/list/PokemonListLoading';

export default function Loading() {
  const searchParams = useSearchParams();
  const display = searchParams.get('display') ?? DisplayType.Grid;

  return display === DisplayType.Grid ? <PokemonGridLoading /> : <PokemonListLoading />;
}
