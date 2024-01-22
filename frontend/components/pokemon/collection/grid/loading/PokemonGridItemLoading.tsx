import { Stack, Flex, Container, Skeleton } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import classes from './PokemonGridItemLoading.module.css';

export function PokemonGridItemLoading() {
  return (
    <Flex className={classes.container}>
      <Container className={classes.imageContainer}>
        <Skeleton />
      </Container>
      <Flex className={classes.footer}>
        <Stack className={classes.textContainer}>
          <Skeleton className={classes.title} />
          <Skeleton className={classes.description} />
        </Stack>
        <IconHeartFilled className={classes.heart} />
      </Flex>
    </Flex>
  );
}
