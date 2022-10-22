export interface Product {
  id: string;
  fields: {
    name: string;
    product_key: string;
    description: string;
    price: number;
    created_at: string;
    updated_at: string;
  }
}
