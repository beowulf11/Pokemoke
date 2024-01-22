import gql from 'graphql-tag';

export const QUERY_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemonByName(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        name
        isFavorite
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
      sound
      isFavorite
    }
  }
`;
