'use client';

import { ActionIcon, Flex, Stack, Title, Text, Image } from '@mantine/core';
import { IconVolume, IconSword, IconRipple, IconSparkles, IconWeight, IconArrowsMoveVertical } from '@tabler/icons-react';
import { Pokemon } from '@/api/graphql';
import { PokemonBadge } from '@/components/pokemon/badge/PokemonBadge';
import { FavoriteButton } from '@/components/pokemon/common/FavoriteButton';

type PokemonDetailProps = Pokemon;

export function PokemonDetail(pokemon: PokemonDetailProps) {
  return (
    <Flex gap={50}>
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        width={200}
        height={200}
        style={{ objectFit: 'contain' }}
      />
      <ActionIcon onClick={() => new Audio(pokemon.sound).play()}>
        <IconVolume />
      </ActionIcon>
      <Stack gap={10}>
        <Flex>
          <Title order={1}>{pokemon.name}</Title>
          <FavoriteButton {...pokemon} />
        </Flex>
        <Flex gap={5}>
          {pokemon.types.map((type, index) => (
            <PokemonBadge key={index} type={type} />
          ))}
        </Flex>
        <Flex gap={5}>
          <IconWeight />
          <Text>{`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}</Text>
        </Flex>
        <Flex gap={5}>
          <IconArrowsMoveVertical />
          <Text>{`${pokemon.height.minimum} - ${pokemon.height.maximum}`}</Text>
        </Flex>
        <Flex direction="column">
          <Flex gap={5} mb={10} align="center" style={{ alignSelf: 'center' }}>
            <IconSword />
            <Title order={3}>Attacks</Title>
          </Flex>
          <Flex />
          <Flex gap={20}>
            <div>
              <Flex gap={5} align="center">
                <IconRipple />
                <Title order={4}>Fast</Title>
              </Flex>
              {pokemon.attacks.fast.map((attack) => (
                <Text key={attack.name}>{attack.name}</Text>
              ))}
            </div>
            <div>
              <Flex gap={5} align="center">
                <IconSparkles />
                <Title order={4}>Special</Title>
              </Flex>
              {pokemon.attacks.special.map((attack) => (
                <Text key={attack.name}>{attack.name}</Text>
              ))}
            </div>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
