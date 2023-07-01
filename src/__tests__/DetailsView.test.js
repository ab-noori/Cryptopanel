import React from 'react';
import { render } from '@testing-library/react';
import DetailsView from '../components/DetailsView';

test('renders DetailsView correctly', () => {
  const props = {
    marketCapRank: 1,
    currentPrice: 1000,
    marketCap: 1000000,
    marketCapChange24h: 5000,
    high24h: 1500,
    low24h: 800,
    priceChange24h: 200,
    priceChangePercentage24h: 0.2,
    marketCapChangePercentage24: 0.5,
    ath: 2000,
    athChangePercentage: 0.4,
    atl: 500,
    atlChangePercentage: 0.1,
    fullyDilutedValuation: 2000000,
    totalVolume: 50000,
    totalSupply: 1000000,
    circulatingSupply: 800000,
    maxSupply: 2000000,
    publicInterestScore: 0.8,
  };

  /* eslint-disable react/jsx-props-no-spreading */
  const { container } = render(<DetailsView {...props} />);

  expect(container).toMatchSnapshot();
});
