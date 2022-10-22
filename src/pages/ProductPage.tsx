import { useParams } from 'react-router-dom';

import { Product } from '@components/Products';


const ProductPage = () => {
  const params = useParams<{ id: string }>();

  if (params.id) {
    return <Product productId={params.id} />
  }

  return <p>No id specified</p>
}

export { ProductPage };
