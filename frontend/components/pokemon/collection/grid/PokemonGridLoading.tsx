import { Group } from '@mantine/core';
import { PokemonGridItemLoading } from '@/components/pokemon/collection/grid/loading/PokemonGridItemLoading';

export function PokemonGridLoading() {
  return (
    <Group spacing={10} grow align="flex-start">
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
      <PokemonGridItemLoading />
    </Group>
  );
}
