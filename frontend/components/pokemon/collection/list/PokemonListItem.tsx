import { Stack, Flex, Text, Title, Container } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '@/api/graphql';
import { FavoriteButton } from '@/components/pokemon/common/FavoriteButton';

type PokemonListItemProps = Pick<Pokemon, 'id' | 'name' | 'types' | 'isFavorite' | 'image'>;

export function PokemonListItem(pokemon: PokemonListItemProps) {
  return (
    <Flex
      h={100}
      gap={0}
      direction="row"
      style={{
        border: '1px solid #ccc',
        minWidth: 230,
      }}
    >
      <Container p={10} h={100} w={100} href={`/${pokemon.name}`} component={Link}>
        <Image
          width={80}
          height={80}
          src={pokemon.image}
          style={{
            objectFit: 'contain',
          }}
          alt={pokemon.name}
        />
      </Container>
      <Flex
        justify="space-evenly"
        align="center"
        style={{
          flexBasis: '100%',
        }}
        py={10}
        px={10}
        bg="gray.3"
      >
        <Stack
          gap={0}
          style={{
            flexBasis: '80%',
          }}
        >
          <Title
            component={Link}
            href={`/${pokemon.name}`}
            order={3}
            c="black"
            style={{ wordWrap: 'anywhere', textDecoration: 'none' }}
          >
            {pokemon.name}
          </Title>
          <Text>{pokemon.types.join(', ')}</Text>
        </Stack>
        <FavoriteButton {...pokemon} style={{ flexBasis: '20%' }} />
      </Flex>
    </Flex>
  );
}
