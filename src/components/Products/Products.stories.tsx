import { ComponentMeta } from '@storybook/react';

import { Products } from './Products';

export default {
  title: 'App/Products/Products',
} as ComponentMeta<typeof Products>;


export const _Products = () => (
  <Products />
);

