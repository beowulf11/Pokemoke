'use client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import NextAdapterApp from 'next-query-params/app';
import { QueryParamProvider } from 'use-query-params';
import { theme } from '@/lib/theme';

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ClientProviders({ children }: React.PropsWithChildren) {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>
      <ApolloNextAppProvider makeClient={makeClient}>
        <MantineProvider theme={theme}>
          <Notifications />
          {children}
        </MantineProvider>
      </ApolloNextAppProvider>
    </QueryParamProvider>
  );
}
