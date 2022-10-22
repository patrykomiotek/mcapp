import axios from 'axios';

import { Product } from '@apptypes/Product';

interface ProductsResponse {
  records: Product[]
}

export const fetchProducts = () => {
  return axios.get<ProductsResponse>('https://api.airtable.com/v0/appdpf7By5zmgmYOI/products', {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    }
  })
}