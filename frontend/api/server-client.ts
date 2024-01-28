import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export function getApolloClient(): ApolloClient<unknown> {
  const apolloClient = registerApolloClient(
    () =>
      new ApolloClient({
        ssrMode: typeof window === 'undefined',
        cache: new InMemoryCache(),
        link: new HttpLink({
          uri: 'http://localhost:4000/graphql',
          fetchOptions: { cache: 'no-store' },
        }),
      })
  ).getClient;
  return apolloClient();
}
