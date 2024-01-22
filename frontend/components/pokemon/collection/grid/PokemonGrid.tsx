import { Group } from '@mantine/core';
import { PokemonsQuery } from '@/api/graphql';
import { PokemonGridItem } from '@/components/pokemon/collection/grid/item/PokemonGridItem';

export function PokemonGrid({ pokemons }: { pokemons: PokemonsQuery['pokemons'] }) {
  return (
    <Group spacing={10} grow align="flex-start">
      {pokemons.edges.map((pokemon) => (
        <PokemonGridItem key={pokemon.id} {...pokemon} />
      ))}
    </Group>
  );
}
