import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('type city name in the input field', () => {
  render(<Form />);

  fireEvent.change(screen.getByPlaceholderText(/Search for a city/i), {
    target: { value: 'perth' },
  });
  fireEvent.click(screen.getByTestId(/submit/i));

  expect(screen.getByDisplayValue('perth')).toBeInTheDocument();
});
