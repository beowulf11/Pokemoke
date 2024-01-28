'use client';

import {
  ActionIcon,
  Box,
  Center,
  Flex,
  Stack,
  Title,
  Text,
  alpha,
  MantineColor,
  SimpleGrid,
  Progress,
  Tooltip,
  ScrollArea,
} from '@mantine/core';
import {
  IconVolume,
  IconSword,
  IconRipple,
  IconSparkles,
  IconWeight,
  IconArrowsMoveVertical,
  IconArrowBigUpLineFilled,
  IconSwords,
  IconSwordOff,
  IconFirstAidKit,
} from '@tabler/icons-react';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import { Pokemon } from '@/api/graphql';
import { PokemonBadge } from '@/components/pokemon/badge/PokemonBadge';
import { FavoriteButton } from '@/components/pokemon/common/FavoriteButton';
import classes from './PokemonDetail.module.css';
import { getPokemonColorFromType } from '@/lib/pokemon';
import { PokemonGridItem } from '@/components/pokemon/collection/grid/item/PokemonGridItem';

type PokemonDetailProps = Pokemon;

export function PokemonDetail(pokemon: PokemonDetailProps) {
  const typeColor = getPokemonColorFromType(pokemon.types[0]);

  return (
    <Center className={classes.container}>
      <PokemonImage {...pokemon} typeColor={typeColor} />
      <Stack className={classes.sidebarContainer}>
        <Stack w="100%" gap={5}>
          <Flex className={classes.nameContainer}>
            <Title className={classes.name} order={1}>
              {pokemon.name}
            </Title>
            <FavoriteButton {...pokemon} iconSize={50} />
          </Flex>
          <Flex gap={5} wrap="wrap">
            {pokemon.types.map((type, index) => (
              <PokemonBadge key={index} type={type} />
            ))}
          </Flex>
        </Stack>
        <StatsSection {...pokemon} typeColor={typeColor} />
        <AttacksSection {...pokemon} />
        <EvolutionsSection {...pokemon} />
      </Stack>
    </Center>
  );
}

type PokemonImageProps = Pick<Pokemon, 'image' | 'name' | 'sound' | 'types'> & {
  typeColor: MantineColor;
};

function PokemonImage({ typeColor, image, name, sound }: PokemonImageProps) {
  return (
    <Box className={classes.pokemonImageContainer} bg={alpha(typeColor, 0.15) as MantineColor}>
      <Image
        className={classes.pokemonImage}
        src={image}
        priority
        alt={name}
        width={500}
        height={500}
      />
      <ActionIcon className={classes.soundButton} onClick={() => new Audio(sound).play()}>
        <IconVolume />
      </ActionIcon>
    </Box>
  );
}

type StatsSectionProps = Pick<
  Pokemon,
  'type' | 'weight' | 'height' | 'fleeRate' | 'maxCP' | 'maxHP'
> & {
  typeColor: MantineColor;
};

function StatsSection({ typeColor, weight, height, maxCP, maxHP, fleeRate }: StatsSectionProps) {
  return (
    <Box className={classes.statsContainer}>
      <SimpleGrid cols={2}>
        <Flex className={classes.leftStatContainer}>
          <Flex align="center">
            <IconWeight size={20} />
            <Title order={3}>Weight</Title>
          </Flex>
          <Text>{`${weight.minimum} - ${weight.maximum}`}</Text>
        </Flex>
        <Flex className={classes.rightStatContainer}>
          <Flex align="center">
            <IconArrowsMoveVertical size={20} />
            <Title order={3}>Height</Title>
          </Flex>
          <Text>{`${height.minimum} - ${height.maximum}`}</Text>
        </Flex>
        <Flex className={classes.leftStatContainer}>
          <Flex align="center">
            <IconSwords size={20} />
            <Title order={3}>Max CP</Title>
          </Flex>
          <Text>{maxCP}</Text>
        </Flex>
        <Flex className={classes.rightStatContainer}>
          <Flex align="center">
            <IconFirstAidKit size={20} />
            <Title order={3}>Max HP</Title>
          </Flex>
          <Text>{maxHP}</Text>
        </Flex>
      </SimpleGrid>
      <Flex direction="column" style={{ width: '100%' }} align="center">
        <Title order={3}>Flee rate</Title>
        <Tooltip label={fleeRate} position="left">
          <Progress value={fleeRate * 100} color={typeColor} w="100%" />
        </Tooltip>
      </Flex>
    </Box>
  );
}

function AttacksSection({
  attacks,
  weaknesses,
  resistant,
}: Pick<Pokemon, 'attacks' | 'weaknesses' | 'resistant'>) {
  return (
    <Flex className={classes.attacksContainer}>
      <Flex className={classes.attacksTitleContainer}>
        <IconSword />
        <Title order={3}>Attacks</Title>
      </Flex>
      <Flex />
      <Flex className={classes.attacksTypesContainer}>
        <Flex className={classes.attacksTypeContainer}>
          <Flex className={classes.attacksTypeTitleContainer}>
            <IconRipple />
            <Title order={4}>Fast</Title>
          </Flex>
          {attacks.fast.map((attack) => (
            <Text key={attack.name} className={classes.attackType}>
              {attack.name}
            </Text>
          ))}
        </Flex>
        <Flex className={classes.attacksTypeContainer}>
          <Flex className={classes.attacksTypeTitleContainer}>
            <IconSparkles />
            <Title order={4}>Special</Title>
          </Flex>
          {attacks.special.map((attack) => (
            <Text key={attack.name} className={classes.attackType}>
              {attack.name}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Flex className={classes.attacksTypeTitleContainer}>
        <IconSwords size={20} />
        <Title order={3}>Resistant</Title>
      </Flex>
      <Flex className={classes.resistantValuesContainer}>
        {resistant.map((resistent) => (
          <PokemonBadge key={resistent} type={resistent} />
        ))}
      </Flex>
      <Flex className={classes.attacksTypeTitleContainer}>
        <IconSwordOff size={20} />
        <Title order={3}>Weakness</Title>
      </Flex>
      <Flex className={classes.weaknessesValuesContainer}>
        {weaknesses.map((weakness) => (
          <PokemonBadge key={weakness} type={weakness} />
        ))}
      </Flex>
    </Flex>
  );
}

function EvolutionsSection({ evolutions }: Pick<Pokemon, 'evolutions'>) {
  return (
    <Flex className={classes.evolutionContainer}>
      <Flex align="center">
        <IconArrowBigUpLineFilled size={20} />
        <Title order={3}>Evolutions</Title>
      </Flex>
      {evolutions.length === 0 ? (
        <Text>No evolutions</Text>
      ) : (
        <>
          <Flex className={classes.mobileEvolutionList}>
            {evolutions.map((evolution) => (
              <PokemonGridItem key={evolution.name} {...evolution} />
            ))}
          </Flex>
          <Carousel
            className={classes.desktopEvolutionList}
            slideSize="20%"
            slideGap="md"
            slidesToScroll={1}
            loop
          >
            {evolutions.map((evolution) => (
              <Carousel.Slide key={evolution.name}>
                <PokemonGridItem {...evolution} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </>
      )}
    </Flex>
  );
}
