import { SimpleGrid } from '@mantine/core';
import { PokemonListItemLoading } from '@/components/pokemon/collection/list/PokemonListItemLoading';

export function PokemonListLoading() {
  return (
    <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }}>
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
      <PokemonListItemLoading />
    </SimpleGrid>
  );
}
