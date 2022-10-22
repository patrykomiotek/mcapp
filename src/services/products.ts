import axios from 'axios';

import { Product } from '@apptypes/Product';

interface ProductsResponse {
  records: Product[]
}

export const BASE_URL = 'https://api.airtable.com/v0/appdpf7By5zmgmYOI';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  }
});

export const fetchProducts = () => {
  return api.get<ProductsResponse>('/products');
}

export const fetchProduct = (id: Product['id']) => {
  return api.get<Product>(`/products/${id}`);
}

export const saveProduct = (data: Omit<Product, 'id'>) => {
  return api.post<Product>(`/products`, data);
}

export const updatePriceByOne = async (id: Product['id']) => {

  try {
    const response = await api.get<Product>(`/products/${id}`);
    const product = response.data;

    return api.patch(`/products`, {
      "records": [
        {
          "id": id,
          "fields": {
            price: product.fields.price + 1,
          }
        }
      ]
    });
  } catch (_e) {
    throw new Error('Cannot make operation');
  }
}

export const deleteProduct = (id: string) => {
  return api.delete(`/products/${id}`);
}

