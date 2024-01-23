import { Stack, Flex, Text, Title, Container } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '@/api/graphql';
import { FavoriteButton } from '@/components/pokemon/common/FavoriteButton';
import classes from './PokemonListItem.module.css';

type PokemonListItemProps = Pick<Pokemon, 'id' | 'name' | 'types' | 'isFavorite' | 'image'>;

export function PokemonListItem(pokemon: PokemonListItemProps) {
  return (
    <Flex className={classes.container}>
      <Container className={classes.imageContainer} href={`/${pokemon.name}`} component={Link}>
        <Image
          className={classes.image}
          width={80}
          height={80}
          src={pokemon.image}
          alt={pokemon.name}
        />
      </Container>
      <Flex className={classes.infoContainer}>
        <Stack className={classes.textContainer}>
          <Title className={classes.title} component={Link} href={`/${pokemon.name}`} order={3}>
            {pokemon.name}
          </Title>
          <Text>{pokemon.types.join(', ')}</Text>
        </Stack>
        <FavoriteButton className={classes.heart} {...pokemon} />
      </Flex>
    </Flex>
  );
}
