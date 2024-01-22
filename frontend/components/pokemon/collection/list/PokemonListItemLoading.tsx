import { Stack, Flex, Container, Skeleton } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

export function PokemonListItemLoading() {
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
      <Container
        p={10}
        h={100}
        w={100}
      />
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
          <Skeleton
            height={20}
            width={100}
            mb={5}
          />
          <Skeleton
            height={20}
            width={150}
          />
        </Stack>
        <IconHeart style={{ flexBasis: '20%', color: 'red' }} />
      </Flex>
    </Flex>
  );
}
