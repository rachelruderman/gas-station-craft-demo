import React from 'react';
import { render } from '@testing-library/react';
import { App } from './index';

test('renders Clearbit attribution', () => {
  const { getByText } = render(<App />);
  const attributionEl = getByText(/Logos provided by Clearbit/i);
  expect(attributionEl).toBeInTheDocument();
});
