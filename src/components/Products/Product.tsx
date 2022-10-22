import { MouseEventHandler, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchProduct, updatePriceByOne } from '@services/products';

type Props = {
  productId: string;
}

const Product = ({ productId }: Props) => {
  const { isLoading, isError, data: response, refetch } = useQuery(
    ['product', productId],
    () => fetchProduct(productId)
  );

  const product = response?.data;

  const handleUpdatePrice: MouseEventHandler<HTMLButtonElement> = () => {
    updatePriceByOne(productId);
    refetch();
  }

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
      <button onClick={() => refetch()}>Refresh</button>
      <button onClick={handleUpdatePrice}>Update price by 1</button>
    </div>
  );
}

export { Product };
