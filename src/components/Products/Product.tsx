import { useQuery } from '@tanstack/react-query';

import { fetchProduct } from '@services/products';

const Product = () => {
  const { isLoading, isError, data: response, refetch } = useQuery(
    ['product/recOeguiOUiOyViJs'],
    () => fetchProduct('recOeguiOUiOyViJs')
  );
  const product = response?.data;

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
    </div>
  );
}

export { Product };
