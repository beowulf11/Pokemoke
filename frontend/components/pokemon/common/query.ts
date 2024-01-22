import gql from 'graphql-tag';

export const MUTATION_FAVORITE_POKEMON = gql`
  mutation favorite_pokemon($id: ID!) {
    favoritePokemon(id: $id) {
      __typename
      id
      isFavorite
    }
  }
`;

export const MUTATION_UN_FAVORITE_POKEMON = gql`
  mutation un_favorite_pokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      __typename
      id
      isFavorite
    }
  }
`;
