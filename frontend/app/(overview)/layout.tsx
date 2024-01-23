'use client';

import '@mantine/core/styles.css';
import React, { Suspense } from 'react';
import { Container } from '@mantine/core';
import { NumberParam, StringParam, useQueryParams } from 'use-query-params';
import { TabType } from '@/app/(overview)/types';
import { DEFAULT_LIMIT } from '@/app/(overview)/constants';
import classes from './layout.module.css';
import Header from '@/app/(overview)/(header)/header';
import Footer from '@/app/(overview)/(footer)/footer';

export default function Layout({ children }: { children: any }) {
  const [query, setQuery] = useQueryParams({
    display: StringParam,
    type: StringParam,
    tab: StringParam,
    search: StringParam,
    page: NumberParam,
    favoritesPage: NumberParam,
  });
  const { display, type, tab, search, page, favoritesPage } = query;

  const resetPage = React.useCallback(
    (newParam) => {
      if (tab === TabType.Favorites) {
        setQuery({ favoritesPage: 1, ...newParam });
      } else {
        setQuery({ page: 1, ...newParam });
      }
    },
    [tab]
  );

  return (
    <Container fluid className={classes.container}>
      <Header
        search={search}
        setSearch={(newSearch) => {
          resetPage({ search: newSearch });
        }}
        display={display}
        setDisplay={(newDisplay) => {
          setQuery({ display: newDisplay });
        }}
        tab={tab}
        setTab={(newTab) => {
          setQuery({ tab: newTab });
        }}
        type={type}
        setType={(newType) => {
          resetPage({ type: newType });
        }}
      />
      <Suspense>{children}</Suspense>
      <Footer
        search={search || ''}
        tab={tab}
        type={type}
        limit={DEFAULT_LIMIT}
        page={page}
        onSetPage={(newPage) => {
          setQuery({ ...query, page: newPage });
        }}
        favoritesPage={favoritesPage}
        onSetFavoritesPage={(newPage) => {
          setQuery({ ...query, favoritesPage: newPage });
        }}
      />
    </Container>
  );
}
