import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthCredentials } from './AuthCredentials';
import { AuthProvider } from './AuthContext';

describe('<AuthCredentials /> component', () => {
  it('should toggle context value', () => {
    render(<AuthProvider><AuthCredentials /></AuthProvider>);

    expect(screen.getByText('Is logged in: No')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Is logged in: Yes')).toBeInTheDocument();
  });
});