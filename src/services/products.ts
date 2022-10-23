import { api } from './config';
import { Product } from '@apptypes/Product';

interface ProductsResponse {
  records: Product[]
}

export const fetchProducts = () => {
  return api.get<ProductsResponse>('/products');
  // return fetch('https://api.airtable.com/v0/appdpf7By5zmgmYOI', {
  //   headers: {
  //     Authorization: 'Bearer ....'
  //   }
  // })
  // .then(response => response.json())
  // .then(data => console.log(data.fdgjkgdhhgdhfghkdfhgkhdfkjgh))

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

