import { Flex } from '@mantine/core';
import { PokemonsQuery } from '@/api/graphql';
import { PokemonGridItem } from '@/components/pokemon/collection/grid/item/PokemonGridItem';

export function PokemonGrid({ pokemons }: { pokemons: PokemonsQuery['pokemons'] }) {
  return (
    <Flex spacing={10} wrap="wrap" gap={10} align="flex-start">
      {pokemons.edges.map((pokemon) => (
        <PokemonGridItem key={pokemon.id} {...pokemon} />
      ))}
    </Flex>
  );
}
