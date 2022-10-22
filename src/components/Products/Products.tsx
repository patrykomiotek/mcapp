import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: string;
  fields: {
    name: string;
    product_key: string;
    description: string;
    created_at: string;
    updated_at: string;
  }
}

interface ProductsResponse {
  records: Product[]
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response  = await axios.get<ProductsResponse>('https://api.airtable.com/v0/appdpf7By5zmgmYOI/products', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        }
      });

      console.log(response);
      setProducts(response.data.records);
    } catch (_e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Oh no! An error has occured</p>
  }

  return (
    <div>
      <h2>Products</h2>
      {products && products.map((elem) => (
        <div key={elem.id}>
          <p>{elem.fields.name}</p>
        </div>
      ))}
    </div>
  );
}

export { Products };
