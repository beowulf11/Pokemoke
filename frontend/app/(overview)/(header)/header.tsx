'use client';

import React, { useEffect, useState } from 'react';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Center, Flex, SegmentedControl, Select, Text, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconHeartFilled, IconLayoutGrid, IconLayoutList } from '@tabler/icons-react';
import { DisplayType, TabType } from '@/app/(overview)/types';
import { QUERY_POKEMON_TYPES } from '@/app/(overview)/query';
import { Pokemon_TypesQuery } from '@/api/graphql';
import classes from './header.module.css';
import { DEFAULT_DISPLAY, DEFAULT_TAB_TYPE } from '@/app/(overview)/constants';

type HeaderProps = {
  search: string | undefined | null;
  setSearch: (search?: string) => void;
  display: string | undefined | null;
  setDisplay: (display: DisplayType) => void;
  tab: string | undefined | null;
  setTab: (tab: string) => void;
  type: string | undefined | null;
  setType: (type?: string) => void;
};

export default function Header({
  search,
  setSearch,
  display,
  setDisplay,
  tab,
  setTab,
  type,
  setType,
}: HeaderProps) {
  const [localSearch, setLocalSearch] = useState(search);
  const [debouncedSearch] = useDebouncedValue(localSearch, 200, { leading: true });

  useEffect(() => {
    if (debouncedSearch !== search) {
      setSearch(debouncedSearch || undefined);
    }
  }, [debouncedSearch]);

  const { data } = useSuspenseQuery<Pokemon_TypesQuery>(QUERY_POKEMON_TYPES);

  return (
    <Flex className={classes.container}>
      <Flex className={classes.filterContainer}>
        <TextInput
          className={classes.searchInput}
          value={localSearch}
          size="md"
          placeholder="Search"
          onChange={(event) => setLocalSearch(event.currentTarget.value)}
        />
        <Select
          className={classes.typeInput}
          placeholder="Type"
          size="md"
          clearable
          allowDeselect
          searchable
          nothingFoundMessage="Nothing found..."
          value={type || null}
          onChange={setType}
          data={data?.pokemonTypes}
        />
      </Flex>
      <Flex className={classes.selectContainer}>
        <SegmentedControl
          className={classes.selectField}
          value={tab}
          onChange={setTab}
          size="xs"
          defaultValue={DEFAULT_TAB_TYPE}
          data={[
            { label: <Text>All</Text>, value: TabType.All },
            {
              label: (
                <Center>
                  <IconHeartFilled />
                  <Text ml={7}>Favorites</Text>
                </Center>
              ),
              value: TabType.Favorites,
            },
          ]}
        />
        <SegmentedControl
          className={classes.selectField}
          value={display}
          onChange={setDisplay}
          defaultValue={DEFAULT_DISPLAY}
          size="xs"
          data={[
            {
              label: (
                <Center>
                  <IconLayoutGrid />
                  <Text ml={7}>Grid</Text>
                </Center>
              ),
              value: DisplayType.Grid,
            },
            {
              label: (
                <Center>
                  <IconLayoutList />
                  <Text ml={7}>List</Text>
                </Center>
              ),
              value: DisplayType.List,
            },
          ]}
        />
      </Flex>
    </Flex>
  );
}
