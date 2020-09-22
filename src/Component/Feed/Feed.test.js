import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Feed from './Feed';

test('it gets the correct data', () => {
  const feed = {
    aqi: 25,
    city: {
      name: 'Perth High Street, United Kingdom',
      geo: [56.396597, -3.4324],
    },
    attributions: [
      {
        name: 'Air Quality in Scotland - latest data',
        url: 'http://www.scottishairquality.scot/',
      },
    ],
  };

  render(<Feed feed={feed} />);

  expect(screen.getByText(feed.city.name)).toBeInTheDocument();
  expect(screen.getByText(`${feed.aqi}`)).toBeInTheDocument();
  expect(screen.getByText(feed.attributions[0].name)).toBeInTheDocument();
  expect(
    screen.getByText(feed.attributions[0].name).closest('a')
  ).toHaveAttribute('href', feed.attributions[0].url);
});
