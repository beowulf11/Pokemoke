'use client';

import { Badge } from '@mantine/core';
import { getPokemonColorFromType } from '@/lib/pokemon';

type PokemonBadgeProps = {
  type: string;
};

export function PokemonBadge({ type }: PokemonBadgeProps) {
  const color = getPokemonColorFromType(type);

  return (
    <Badge
      color={color}
      variant="filled"
      radius="md"
    >
      {type}
    </Badge>
  );
}
