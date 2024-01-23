import { Stack, Flex, Skeleton } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './PokemonListItemLoading.module.css';

export function PokemonListItemLoading() {
  return (
    <Flex className={classes.container}>
      <Skeleton className={classes.imageSkeleton} />
      <Flex className={classes.infoContainer}>
        <Stack className={classes.infoContainer}>
          <Skeleton className={classes.titleSkeleton} />
          <Skeleton className={classes.descriptionSkeleton} />
        </Stack>
        <IconHeart className={classes.heart} />
      </Flex>
    </Flex>
  );
}
