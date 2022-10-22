import { ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Product } from './Product';
import { BASE_URL } from '@services/products';
import { Product as IProduct } from '@apptypes/Product';

const productId = 'recOeguiOUiOyViJs';

export default {
  title: 'App/Products/Product',
  decorators: [(Story) => (
    <MemoryRouter initialEntries={[`/products/${productId}`]}>
      <Routes>
        <Route path="/products/:id" element={<Story />} />
      </Routes>
    </MemoryRouter>
  )],
} as ComponentMeta<typeof Product>;

const queryClient = new QueryClient();

export const _Product = () => (
  <QueryClientProvider client={queryClient}><Product productId={productId} /></QueryClientProvider>
);

_Product.parameters = {
  msw: {
    handlers: [
      rest.get<never, never, IProduct>(`${BASE_URL}/products/recOeguiOUiOyViJs`, async (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            id: '123',
            fields: {
              product_key: 'dfg',
              name: 'Product 500',
              description: 'Lorem ipsum',
              price: 456,
              created_at: '123',
              updated_at: '123'
            }
          }),
        )
      })
    ]
  }
}

export const _ProductFailedResponse = () => (
  <QueryClientProvider client={queryClient}><Product productId={productId} /></QueryClientProvider>
);

_ProductFailedResponse.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/products/recOeguiOUiOyViJs`, async (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            callStack: 'failed to success'
          }),
        )
      })
    ]
  }
}

export const _ProductFailedResponse500 = () => (
  <QueryClientProvider client={queryClient}><Product productId={productId} /></QueryClientProvider>
);

_ProductFailedResponse500.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/products/recOeguiOUiOyViJs`, async (_req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({}),
        )
      })
    ]
  }
}

export const _ProductFailedLongLoading = () => (
  <QueryClientProvider client={queryClient}><Product productId={productId} /></QueryClientProvider>
);

_ProductFailedLongLoading.parameters = {
  msw: {
    handlers: [
      rest.get<never, never, IProduct>(`${BASE_URL}/products/recOeguiOUiOyViJs`, async (_req, res, ctx) => {
        return res(
          ctx.delay(10000),
          ctx.status(200),
          ctx.json({
            id: '123',
            fields: {
              product_key: 'dfg',
              name: 'Product 500',
              description: 'Lorem ipsum',
              price: 456,
              created_at: '123',
              updated_at: '123'
            }
          }),
        )
      })
    ]
  }
}