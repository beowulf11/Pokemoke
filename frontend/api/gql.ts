/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query pokemons($offset: Int, $limit: Int, $type: String, $search: String, $isFavorite: Boolean) {\n    pokemons(\n      query: {\n        limit: $limit\n        offset: $offset\n        search: $search\n        filter: { type: $type, isFavorite: $isFavorite }\n      }\n    ) {\n      limit\n      count\n      edges {\n        id\n        name\n        types\n        image\n        isFavorite\n      }\n    }\n  }\n':
    types.PokemonsDocument,
  '\n  query pokemons_count($limit: Int, $type: String, $search: String, $isFavorite: Boolean) {\n    pokemons(\n      query: { limit: $limit, search: $search, filter: { type: $type, isFavorite: $isFavorite } }\n    ) {\n      limit\n      count\n    }\n  }\n':
    types.Pokemons_CountDocument,
  '\n  query pokemon_types {\n    pokemonTypes\n  }\n': types.Pokemon_TypesDocument,
  '\n  query pokemon($name: String!) {\n    pokemonByName(name: $name) {\n      id\n      number\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      classification\n      types\n      resistant\n      attacks {\n        fast {\n          name\n          type\n          damage\n        }\n        special {\n          name\n          type\n          damage\n        }\n      }\n      weaknesses\n      fleeRate\n      maxCP\n      evolutions {\n        id\n        name\n        image\n        types\n        isFavorite\n      }\n      evolutionRequirements {\n        amount\n        name\n      }\n      maxHP\n      image\n      sound\n      isFavorite\n    }\n  }\n':
    types.PokemonDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query pokemons($offset: Int, $limit: Int, $type: String, $search: String, $isFavorite: Boolean) {\n    pokemons(\n      query: {\n        limit: $limit\n        offset: $offset\n        search: $search\n        filter: { type: $type, isFavorite: $isFavorite }\n      }\n    ) {\n      limit\n      count\n      edges {\n        id\n        name\n        types\n        image\n        isFavorite\n      }\n    }\n  }\n'
): (typeof documents)['\n  query pokemons($offset: Int, $limit: Int, $type: String, $search: String, $isFavorite: Boolean) {\n    pokemons(\n      query: {\n        limit: $limit\n        offset: $offset\n        search: $search\n        filter: { type: $type, isFavorite: $isFavorite }\n      }\n    ) {\n      limit\n      count\n      edges {\n        id\n        name\n        types\n        image\n        isFavorite\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query pokemons_count($limit: Int, $type: String, $search: String, $isFavorite: Boolean) {\n    pokemons(\n      query: { limit: $limit, search: $search, filter: { type: $type, isFavorite: $isFavorite } }\n    ) {\n      limit\n      count\n    }\n  }\n'
): (typeof documents)['\n  query pokemons_count($limit: Int, $type: String, $search: String, $isFavorite: Boolean) {\n    pokemons(\n      query: { limit: $limit, search: $search, filter: { type: $type, isFavorite: $isFavorite } }\n    ) {\n      limit\n      count\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query pokemon_types {\n    pokemonTypes\n  }\n'
): (typeof documents)['\n  query pokemon_types {\n    pokemonTypes\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query pokemon($name: String!) {\n    pokemonByName(name: $name) {\n      id\n      number\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      classification\n      types\n      resistant\n      attacks {\n        fast {\n          name\n          type\n          damage\n        }\n        special {\n          name\n          type\n          damage\n        }\n      }\n      weaknesses\n      fleeRate\n      maxCP\n      evolutions {\n        id\n        name\n        image\n        types\n        isFavorite\n      }\n      evolutionRequirements {\n        amount\n        name\n      }\n      maxHP\n      image\n      sound\n      isFavorite\n    }\n  }\n'
): (typeof documents)['\n  query pokemon($name: String!) {\n    pokemonByName(name: $name) {\n      id\n      number\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      classification\n      types\n      resistant\n      attacks {\n        fast {\n          name\n          type\n          damage\n        }\n        special {\n          name\n          type\n          damage\n        }\n      }\n      weaknesses\n      fleeRate\n      maxCP\n      evolutions {\n        id\n        name\n        image\n        types\n        isFavorite\n      }\n      evolutionRequirements {\n        amount\n        name\n      }\n      maxHP\n      image\n      sound\n      isFavorite\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
