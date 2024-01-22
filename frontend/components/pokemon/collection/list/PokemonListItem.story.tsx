import { PokemonListItem } from './PokemonListItem';

export default {
  title: 'PokemonListItem',
  component: PokemonListItem,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    isFavorite: {
      control: {
        type: 'boolean',
      },
    },
    types: {
      control: {
        type: 'multi-select',
      },
      options: ['fire', 'water', 'grass'],
    },
  },
  render: ({ ...args }) => <PokemonListItem {...args} />,
};

export const Primary = {
  args: {
    name: 'Charmander',
    isFavorite: false,
    image: 'https://img.pokemondb.net/artwork/raticate.jpg',
    types: ['fire'],
  },
};
