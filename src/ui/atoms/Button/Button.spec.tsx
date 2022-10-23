import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('<Button /> component', () => {
  it('should display text based on props', () => {

    render(<Button>Kaczka 🦆</Button>);
    // screen.debug();

    expect(screen.getByText('Kaczka 🦆')).toBeInTheDocument();
    // expect(screen.getByRole('button')).toBeInTheDocument();
  });
});