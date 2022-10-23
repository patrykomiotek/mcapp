import { render, screen } from '@testing-library/react';

import { Generator } from './Generator';

describe('<Generator /> component', () => {
  // it.todo('should display uuid on start');
  it('should display new value after click', () => {
    render(<Generator />);
    screen.debug();
  });
});