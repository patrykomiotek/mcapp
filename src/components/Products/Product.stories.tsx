import { ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Product } from './Product';

export default {
  title: 'App/Products/Product',
} as ComponentMeta<typeof Product>;

const queryClient = new QueryClient();

export const _Product = () => (
  <QueryClientProvider client={queryClient}><Product /></QueryClientProvider>
);
