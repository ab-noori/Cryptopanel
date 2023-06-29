import { configureStore } from '@reduxjs/toolkit';
import CurrencyReducer from './CurrencySlice';

const store = configureStore({
  reducer: {
    Currencies: CurrencyReducer,
  },
});

export default store;
