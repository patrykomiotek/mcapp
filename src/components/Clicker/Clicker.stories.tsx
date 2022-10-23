import { ComponentMeta } from '@storybook/react';

import { Clicker } from './Clicker';

export default {
  title: 'App/Clicker',
} as ComponentMeta<typeof Clicker>;


export const _Clicker = () => (
  <Clicker />
);

