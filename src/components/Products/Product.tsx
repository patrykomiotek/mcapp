import { useEffect, useState } from 'react';

import { Product as IProduct } from '@apptypes/Product';
import { fetchProduct } from '@services/products';

const Product = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response  = await fetchProduct('recOeguiOUiOyViJs');

      console.log(response);
      setProduct(response.data);
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
      <h2>{product?.fields.name}</h2>
      <p>{product?.fields.price}</p>
    </div>
  );
}

export { Product };
