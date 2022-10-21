import { ComponentMeta } from '@storybook/react';

import { Generator } from './Generator';

export default {
  title: 'App/Generator',
} as ComponentMeta<typeof Generator>;


export const _Generator = () => (
  <Generator />
);

