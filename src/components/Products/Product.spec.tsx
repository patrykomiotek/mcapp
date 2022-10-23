import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import { Product } from './Product';

const client = new QueryClient();

jest.mock('@tanstack/react-query', () => {
  const originalModule = jest.requireActual('@tanstack/react-query');

  return {
    ...originalModule,
    useQuery: jest.fn(),
  }
});

const mockedUseQuery = useQuery as jest.Mock;

const renderComponent = () => {
  render(<QueryClientProvider client={client}><Product /></QueryClientProvider>);
};

describe('<Product /> component', () => {
  it('should display Product info', () => {
    mockedUseQuery.mockImplementationOnce(() => ({
      isLoading: false,
      isError: false,
      data: {
        data: {
          id: '12445',
          fields: {
            name: 'Product 556',
            price: 500,
            description: 'Super description',
            product_key: 'yup_dsffd',
            created_at: '',
            updated_at: '',
          }
        }
      },
      refetch: jest.fn
    }));
    renderComponent();

    expect(screen.getByText(/Product 556/i)).toBeInTheDocument();
  })
});