import { render, screen } from '@testing-library/react';

import { Viewport } from './Viewport';

jest.mock('@hooks/useViewport', () => ({
  useViewport: () => ({ x: 100, y: 200 }),
}));

describe('<Viewport /> component with mocked hook per test', () => {
  it('should display values from mocked hook', () => {
    render(<Viewport />);
    expect(screen.getByText(/x: 100 y: 200/i)).toBeInTheDocument();
  });
});