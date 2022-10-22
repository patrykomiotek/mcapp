import { ComponentMeta } from '@storybook/react';

import { Counter } from './Counter';

export default {
  title: 'App/Counter',
} as ComponentMeta<typeof Counter>;


export const _Counter = () => (
  <Counter />
);

