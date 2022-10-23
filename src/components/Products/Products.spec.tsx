import { render, screen, waitFor } from '@testing-library/react';

import { Products } from './Products';
import { fetchProducts } from '@services/products';

jest.mock('@services/products', () => {
  const originalModule = jest.requireActual('@services/products');
  return {
    ...originalModule,
    fetchProducts: jest.fn(),
  }
});

// const mockedFetchProducts = fetchProducts as jest.MockedFunction<typeof fetchProducts>;
const mockedFetchProducts = fetchProducts as jest.Mock;

describe('<Products /> component', () => {
  it('should display products after service resolve', async () => {
    mockedFetchProducts.mockResolvedValue({
      data: {
        records: [{
          id: '12445',
          fields: {
            name: 'Product 556',
            price: 500,
            description: 'Super description',
            product_key: 'yup_dsffd',
            created_at: '',
            updated_at: '',
          }
        }]
      }
    });
    render(<Products />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      // expect(await screen.findByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText(/Product 556/)).toBeInTheDocument();
    });

    expect(await screen.findByText(/Product 556/)).toBeInTheDocument();
  });

  it('should display error', async () => {
    mockedFetchProducts.mockRejectedValue({});
    render(<Products />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByText(/Oh no! An error has occured/i)).toBeInTheDocument();
  });
});