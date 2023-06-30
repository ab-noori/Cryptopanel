import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import millify from 'millify';
import './CurrencyList.scss';

const CurrencyList = ({
  currencies, query, handleQuery, handleKeyDown,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (currencyId) => {
    navigate(`/Cryptopanel/${currencyId}`);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={handleQuery}
        onKeyDown={handleKeyDown}
      />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Current Price</th>
              <th>24h Change</th>
              <th>Total Volume</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency) => (
              <tr key={currency.id} onClick={() => handleRowClick(currency.id)}>
                <td data-label="Rank">{millify(currency?.market_cap_rank)}</td>
                <td data-label="Name">
                  <img
                    src={currency?.image}
                    alt={`${currency?.image}-logo`}
                    className="img"
                  />
                  {currency?.name}
                </td>
                <td data-label="Symbol">{currency?.symbol}</td>
                <td data-label="Current Price">{`$ ${millify(currency?.current_price)}`}</td>
                <td data-label="24h Change">{`${millify(currency?.price_change_percentage_24h)} %`}</td>
                <td data-label="Total Volume">{`$ ${millify(currency?.total_volume)}`}</td>
                <td data-label="Market Cap">{`$ ${millify(currency?.market_cap)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

CurrencyList.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rank: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      currentPrice: PropTypes.number.isRequired,
      oneHourPriceChange: PropTypes.number.isRequired,
      oneDayPriceChange: PropTypes.number.isRequired,
      oneWeekPriceChange: PropTypes.number.isRequired,
      totalVolume: PropTypes.number.isRequired,
      marketCap: PropTypes.number.isRequired,
    }),
  ).isRequired,
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default CurrencyList;
