import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://api.coingecko.com/api/v3/search/trending';

export const fetchCurrency = createAsyncThunk('currency/fetchCurrency', async () => {
  const response = await fetch(API);
  const data = await response.json();
  return data.coins;
});

const searchAPI = 'https://api.coingecko.com/api/v3/search?query';

export const searchCurrency = createAsyncThunk('currency/searchCurrency', async (searchQuery) => {
  const response = await fetch(`${searchAPI}=${searchQuery}`);
  const data = await response.json();
  return data.coins;
});

const initialState = {
  Loading: false,
  Currencies: [],
  error: null,
  query: '',
};

const CurrencySlice = createSlice({
  name: 'Currencies',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      const searchedCoin = state.Currencies
        .filter((item) => item.name.toLowerCase().includes(action.payload));
      return {
        ...state,
        query: searchedCoin,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchCurrency.fulfilled, (state, { payload }) => {
        const result = payload.map((coin) => ({
          id: coin.item.coin_id,
          name: coin.item.name,
          image: coin.item.large,
          priceBtc: coin.item.price_btc,
        }));

        const newState = {
          ...state,
          loading: false,
          Currencies: result,
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
        const result = payload.map((coin) => ({
          id: coin.id,
          name: coin.name,
          image: coin.large,
          priceBtc: coin.price_btc,
        }));

        const newState = {
          ...state,
          loading: false,
          Currencies: result,
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
