import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('<Input /> component', () => {
  it('should display label on the screen', () => {
    render(<Input label="This is label" />);
    // expect(screen.getByLabelText('This is label')).toBeInTheDocument();
    expect(screen.getByText('This is label')).toBeInTheDocument();
  })
});
