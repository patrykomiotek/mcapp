import { rest } from 'msw'

import { BASE_URL } from '@services/products';
import { Product } from '@apptypes/Product';

interface Body {
}

export const handlers = [

  rest.get<never, never, Product>(`${BASE_URL}/products/recOeguiOUiOyViJs`, async (_req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({
        id: '123',
        fields: {
          name: 'Product 500',
          product_key: 'dfg',
          description: 'Lorem ipsum',
          price: 456,
          created_at: '123',
          updated_at: '123'
        }
      }),
    )

  })

  // rest.post('/login', (req, res, ctx) => {
  //   const { username } = req.body

  //   return res(
  //     ctx.json({
  //       id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //       username,
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     })
  //   )
  // }),
]
