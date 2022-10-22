import { ComponentMeta } from '@storybook/react';

import { Product } from './Product';

export default {
  title: 'App/Products/Product',
} as ComponentMeta<typeof Product>;


export const _Product = () => (
  <Product />
);

