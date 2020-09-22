import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button should have a name', () => {
  const name = 'Sydney';
  render(<Button name={name} />);
  expect(screen.getByText(name)).toBeInTheDocument();
});

test('button should be clickable', () => {
  render(<Button name="Perth" />);
  fireEvent.click(screen.getByText(/Perth/i));
});
