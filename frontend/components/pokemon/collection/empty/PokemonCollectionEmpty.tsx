import { Flex, Text, Title } from '@mantine/core';
import { TabType } from '@/app/(overview)/types';

type PokemonCollectionEmptyProps = {
  tab: string;
};

export function PokemonCollectionEmpty({ tab }: PokemonCollectionEmptyProps) {
  return (
    <Flex direction="column" align="center">
      <Title order={1}>No Pokemon found</Title>
      {tab === TabType.Favorites && <Text mt={5}>You have no favorite Pokemons yet</Text>}
    </Flex>
  );
}
