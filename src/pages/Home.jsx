import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, searchCurrency } from '../redux/CurrencySlice';

const Home = () => {
  const Currencies = useSelector((state) => state.Currencies.Currencies);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const handleQuery = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!query) {
        // Check if any field is empty
        dispatch(fetchCurrency());
        return;
      }
      dispatch(searchCurrency(query)).then(() => {
        setQuery('');
      });
    }
  };

  return (
    <>
      <h1>Main page</h1>
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={handleQuery}
        onKeyDown={handleKeyDown}
      />

      {Currencies.map((Currency) => (
        <div className="currency-list" key={Currency.id}>
          <Link to={`/Cryptopanel/${Currency.id}`}>{Currency.name}</Link>
        </div>
      ))}
    </>
  );
};

export default Home;
