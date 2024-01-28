'use client';

import { useMutation } from '@apollo/client';
import { IconHeartFilled, IconBug, IconHeartBroken } from '@tabler/icons-react';
import { ActionIcon, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  MUTATION_FAVORITE_POKEMON,
  MUTATION_UN_FAVORITE_POKEMON,
} from '@/components/pokemon/common/query';
import { Pokemon } from '@/api/graphql';
import classes from './FavoriteButton.module.css';

type FavoriteButtonProps = Pick<Pokemon, 'id' | 'name' | 'isFavorite'> & {
  iconSize?: number;
};

function favoriteNotification(pokemonName: string, favored: boolean) {
  const action = favored ? 'favored' : 'un favored';
  const icon = favored ? <IconHeartFilled /> : <IconHeartBroken />;

  notifications.show({
    title: `${pokemonName} ${action}`,
    message: `You have ${action} this pokemon`,
    icon,
    styles: {
      icon: {
        color: 'red',
        backgroundColor: 'transparent',
      },
    },
  });
}

function errorNotification(pokemonName: string, favored: boolean) {
  const action = favored ? 'favored' : 'un favored';

  notifications.show({
    title: `[Fail] ${pokemonName} ${action}`,
    message: `${action} ${pokemonName} failed`,
    icon: <IconBug />,
    styles: {
      icon: {
        backgroundColor: 'red',
      },
      title: {
        color: 'red',
      },
    },
  });
}

export function FavoriteButton({ iconSize, isFavorite, name, id }: FavoriteButtonProps) {
  const [favoriteMutation] = useMutation(MUTATION_FAVORITE_POKEMON, {
    update(cache) {
      cache.evict({ fieldName: 'pokemons' });
      cache.modify({
        id: cache.identify({ __typename: 'Pokemon', id }),
        fields: {
          isFavorite() {
            return true;
          },
        },
      });
    },
    onCompleted() {
      favoriteNotification(name, true);
    },
    onError() {
      errorNotification(name, true);
    },
  });
  const [unFavoriteMutation] = useMutation(MUTATION_UN_FAVORITE_POKEMON, {
    update(cache) {
      cache.evict({ fieldName: 'pokemons' });
      cache.modify({
        id: cache.identify({ __typename: 'Pokemon', id }),
        fields: {
          isFavorite() {
            return false;
          },
        },
      });
    },
    onCompleted() {
      favoriteNotification(name, false);
    },
    onError() {
      errorNotification(name, false);
    },
  });

  return (
    <ActionIcon
      className={classes.favoriteIcon}
      data-isFavorite={isFavorite}
      onClick={() => {
        isFavorite
          ? unFavoriteMutation({ variables: { id } })
          : favoriteMutation({ variables: { id } });
      }}
      variant="transparent"
      size={iconSize || 'xl'}
    >
      <IconHeartFilled style={{ width: rem(iconSize), height: rem(iconSize) }} />
    </ActionIcon>
  );
}
