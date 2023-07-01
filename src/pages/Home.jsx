import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, searchCurrency } from '../redux/CurrencySlice';
import CurrencyList from '../components/CurrencyList';

const Home = () => {
  const currencies = useSelector((state) => state.Currencies.Currencies);
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
    <CurrencyList
      currencies={currencies}
      query={query}
      handleQuery={handleQuery}
      handleKeyDown={handleKeyDown}
    />
  );
};

export default Home;
