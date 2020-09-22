import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListButton from './ListButton';

test('display button correctly', () => {
  const item = {
    uid: 3286,
    aqi: '13',
    station: {
      name: 'Perth',
    },
  };

  render(<ListButton item={item} />);
  expect(screen.getByText('Perth')).toBeInTheDocument();
});
