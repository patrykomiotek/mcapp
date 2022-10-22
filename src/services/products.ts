import axios from 'axios';

import { Product } from '@apptypes/Product';

interface ProductsResponse {
  records: Product[]
}

const api = axios.create({
  baseURL: 'https://api.airtable.com/v0/appdpf7By5zmgmYOI',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  }
});

export const fetchProducts = () => {
  return api.get<ProductsResponse>('/products');
}

export const fetchProduct = (id: string) => {
  return api.get<Product>(`/products/${id}`);
}

export const saveProduct = (data: Omit<Product, 'id'>) => {
  return api.post<Product>(`/products`, data);
}

export const deleteProduct = (id: string) => {
  return api.delete(`/products/${id}`);
}
