import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('header has text', () => {
  render(<Header />);
  expect(screen.getByText('Air Quality Index')).toBeInTheDocument();
});
