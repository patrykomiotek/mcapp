import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter element', () => {
  render(<App />);
  const counterElement = screen.getByText(/Counter value/i);
  expect(counterElement).toBeInTheDocument();
});
