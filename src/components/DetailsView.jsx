import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';
import './DetailsView.scss';

const DetailsView = (props) => {
  const {
    marketCapRank, currentPrice,
    marketCap, marketCapChange24h, high24h, low24h,
    priceChange24h, priceChangePercentage24h,
    marketCapChangePercentage24, ath, athChangePercentage,
    atl, atlChangePercentage, fullyDilutedValuation, totalVolume,
    totalSupply, circulatingSupply, maxSupply, publicInterestScore,
  } = props;

  const data = [
    { label: 'Rank', value: marketCapRank },
    { label: 'Price', value: `$ ${millify(currentPrice)}` },
    { label: 'Market Cap', value: `$ ${millify(marketCap)}` },
    { label: 'Market Cap Change', value: `$ ${millify(marketCapChange24h)} / ${millify(marketCapChangePercentage24)} %` },
    { label: '24H High Price', value: `$ ${millify(high24h)}` },
    { label: '24H Low Price', value: `$ ${millify(low24h)}` },
    { label: '24H Price Change', value: `$ ${millify(priceChange24h)} / ${millify(priceChangePercentage24h)} %` },
    { label: 'All Time High Value', value: `$ ${millify(ath)} / ${millify(athChangePercentage)} %` },
    { label: 'All Time Low Value', value: `$ ${millify(atl)} / ${millify(atlChangePercentage)} %` },
    { label: 'Delutated Valuation', value: `$ ${millify(fullyDilutedValuation)}` },
    { label: 'Total Volume', value: `$ ${millify(totalVolume)}` },
    { label: 'Total Supply', value: `$ ${millify(totalSupply)}` },
    { label: 'Circulating Supply', value: `$ ${millify(circulatingSupply)}` },
    { label: 'Maximum Supply', value: `$ ${millify(maxSupply)}` },
    { label: 'Interest Score', value: publicInterestScore },
  ];

  return (
    <div className="details-view">
      {' '}
      {/* Add the "details-view" class */}
      <ul>
        {data.map((item) => (
          <li key={item.label}>
            <span className="label">
              {' '}
              {/* Add the "label" class */}
              {item.label}
              :
            </span>
            <span className="value">
              {' '}
              {/* Add the "value" class */}
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

DetailsView.propTypes = {
  marketCapRank: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  marketCapChange24h: PropTypes.number.isRequired,
  high24h: PropTypes.number.isRequired,
  low24h: PropTypes.number.isRequired,
  priceChange24h: PropTypes.number.isRequired,
  priceChangePercentage24h: PropTypes.number.isRequired,
  marketCapChangePercentage24: PropTypes.number.isRequired,
  ath: PropTypes.number.isRequired,
  athChangePercentage: PropTypes.number.isRequired,
  atl: PropTypes.number.isRequired,
  atlChangePercentage: PropTypes.number.isRequired,
  fullyDilutedValuation: PropTypes.number.isRequired,
  totalVolume: PropTypes.number.isRequired,
  totalSupply: PropTypes.number.isRequired,
  circulatingSupply: PropTypes.number.isRequired,
  maxSupply: PropTypes.number.isRequired,
  publicInterestScore: PropTypes.number.isRequired,
};

export default DetailsView;
