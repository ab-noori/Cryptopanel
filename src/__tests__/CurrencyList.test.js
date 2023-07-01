import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CurrencyList from '../components/CurrencyList';

test('renders CurrencyList component correctly', () => {
  const currencies = [
    {
      id: 1,
      rank: 1,
      name: 'Bitcoin',
      image: 'bitcoin.png',
      symbol: 'BTC',
      currentPrice: 50000,
      oneHourPriceChange: 0.5,
      oneDayPriceChange: 1.2,
      oneWeekPriceChange: -0.8,
      totalVolume: 1000000,
      marketCap: 1000000000,
    },
    // Add more sample data as needed
  ];

  const { container } = render(
    <Router>
      <CurrencyList
        currencies={currencies}
        query=""
        handleQuery={() => {}}
        handleKeyDown={() => {}}
      />
    </Router>,
  );

  expect(container).toMatchSnapshot();
});
