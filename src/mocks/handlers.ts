import { rest } from 'msw'

import { BASE_URL } from '@services/products';
import { Product } from '@apptypes/Product';

interface Body {
}

export const handlers = [

  rest.get<Body>(`${BASE_URL}/products/recOeguiOUiOyViJs`, (_req, res, ctx) => {

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
