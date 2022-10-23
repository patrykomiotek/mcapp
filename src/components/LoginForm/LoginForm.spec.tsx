import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginForm } from './LoginForm';

describe('<LoginForm />', () => {
  it('should display success message after submit form', () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    userEvent.type(screen.getByLabelText(/e-mail/i), 'test@example.com');
    userEvent.type(screen.getByLabelText(/password/i), '1234');
    userEvent.type(screen.getByLabelText(/language/i), 'php');

    userEvent.click(screen.getByText(/send/i));

    expect(screen.getByText(/success/i)).toBeInTheDocument();
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: '1234',
      language: 'php',
    });
  });

  it('should display error message after submit form', () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    userEvent.type(screen.getByLabelText(/e-mail/i), 'test');
    userEvent.click(screen.getByText(/send/i));

    expect(screen.getByText(/Email is invalid/i)).toBeInTheDocument();
  });
});