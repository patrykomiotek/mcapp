import { render, screen } from '@testing-library/react';

import { useViewport } from '@hooks/useViewport';
import { Viewport } from './Viewport';

// jest.mock('@hooks/useViewport', () => ({
//   useViewport: () => ({ x: 100, y: 200 }),
// }));

jest.mock('@hooks/useViewport', () => ({
  useViewport: jest.fn(),
}));

const mockedUseViewport = useViewport as jest.Mock;

describe('<Viewport /> component with mocked hook per test', () => {
  it('should display values from mocked hook', () => {
    mockedUseViewport.mockImplementationOnce(() => ({ x: 14, y: 15 }));
    render(<Viewport />);
    expect(screen.getByText(/x: 14 y: 15/i)).toBeInTheDocument();
  });

  it('should display values from mocked hook ver 2', () => {
    mockedUseViewport.mockImplementationOnce(() => ({ x: 22, y: 22 }));
    render(<Viewport />);
    expect(screen.getByText(/x: 22 y: 22/i)).toBeInTheDocument();
  });
});