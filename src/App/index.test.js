import React from 'react';
import { render } from '@testing-library/react';
import { App } from './index';

test('renders Clearbit attribution', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Logos provided by Clearbit/i);
  expect(element).toBeInTheDocument();
});

test('renders Fuel Up copyright', () => {
  const { getByText } = render(<App />);
  // todo: make dynamic w/ current year
  const element = getByText(/Fuel Up © 2020/i);
  expect(element).toBeInTheDocument();
});

