'use client';

import { MantineColor, useMantineTheme } from '@mantine/core';

export function getPokemonColorFromType(type: string): MantineColor {
  const theme = useMantineTheme();

  switch (type) {
    case 'Normal':
      return theme.colors.gray[6];
    case 'Fire':
      return theme.colors.red[6];
    case 'Water':
      return theme.colors.blue[6];
    case 'Electric':
      return theme.colors.yellow[6];
    case 'Grass':
      return theme.colors.green[6];
    case 'Ice':
      return theme.colors.cyan[6];
    case 'Fighting':
      return theme.colors.red[6];
    case 'Poison':
      return theme.colors.pink[6];
    case 'Ground':
      return theme.colors.orange[6];
    case 'Flying':
      return theme.colors.blue[6];
    case 'Psychic':
      return theme.colors.pink[6];
    case 'Bug':
      return theme.colors.green[6];
    case 'Rock':
      return theme.colors.orange[6];
    case 'Ghost':
      return theme.colors.gray[6];
    case 'Dragon':
      return theme.colors.violet[6];
    case 'Dark':
      return theme.colors.gray[6];
    case 'Steel':
      return theme.colors.gray[6];
    case 'Fairy':
      return theme.colors.pink[6];
    case 'Stellar':
      return theme.colors.violet[6];
    default:
      return theme.colors.gray[6];
  }
}
