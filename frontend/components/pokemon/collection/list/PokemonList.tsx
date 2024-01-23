import { SimpleGrid } from '@mantine/core';
import { PokemonsQuery } from '@/api/graphql';
import { PokemonListItem } from '@/components/pokemon/collection/list/item/PokemonListItem';

export function PokemonList({ pokemons }: { pokemons: PokemonsQuery['pokemons'] }) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }}>
      {pokemons.edges.map((pokemon) => (
        <PokemonListItem key={pokemon.id} {...pokemon} />
      ))}
    </SimpleGrid>
  );
}
