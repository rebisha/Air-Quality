import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AQIndex from './AQIndex';

test('the index correctly displays text', () => {
  render(<AQIndex />);

  expect(screen.getByText('Good')).toBeInTheDocument();
  expect(screen.getByText('Moderate')).toBeInTheDocument();
  expect(
    screen.getByText('Unhealthy for sensitive groups')
  ).toBeInTheDocument();
  expect(screen.getByText('Unhealthy')).toBeInTheDocument();
  expect(screen.getByText('Very Unhealthy')).toBeInTheDocument();
  expect(screen.getByText('Hazardous')).toBeInTheDocument();
});
