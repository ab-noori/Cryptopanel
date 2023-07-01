import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en';

export const fetchCurrency = createAsyncThunk('currency/fetchCurrency', async () => {
  if (!window.localStorage.getItem('cashe')) {
    const response = await fetch(API);
    const data = await response.json();
    window.localStorage.setItem('cashe', JSON.stringify(data));
    return data;
  }

  return JSON.parse(window.localStorage.getItem('cashe'));
});

const searchAPI = 'https://api.coingecko.com/api/v3/search?query';

export const searchCurrency = createAsyncThunk('currency/searchCurrency', async (searchQuery) => {
  const response = await fetch(`${searchAPI}=${searchQuery}`);
  const data = await response.json();
  return data.coins;
});

const initialState = {
  Loading: false,
  Currencies: JSON.parse(window.localStorage.getItem('cashe')) || [],
  // Currencies: [],
  error: null,
};

const CurrencySlice = createSlice({
  name: 'Currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchCurrency.fulfilled, (state, { payload }) => {
        // window.localStorage.setItem('cashe', JSON.stringify(payload));
        const newState = {
          ...state,
          loading: false,
          Currencies: payload,
          error: null,
        };
        return newState;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          error: action.error.message,
        };
        return newState;
      })
      .addCase(searchCurrency.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(searchCurrency.fulfilled, (state, { payload }) => {
        const newState = {
          ...state,
          loading: false,
          Currencies: payload,
          error: null,
        };
        return newState;
      })
      .addCase(searchCurrency.rejected, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default CurrencySlice.reducer;
