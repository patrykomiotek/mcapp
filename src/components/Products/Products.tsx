import { useEffect, useState } from 'react';

import { Product } from '@apptypes/Product';
import { fetchProducts } from '@services/products';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response  = await fetchProducts();

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
          <p>{elem.fields.name}, {elem.fields.price}</p>
        </div>
      ))}
    </div>
  );
}

export { Products };
