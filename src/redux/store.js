import { configureStore } from '@reduxjs/toolkit';
import CurrencyReducer from './CurrencySlice';
import DetailsReducer from './DetailsSlice';

const store = configureStore({
  reducer: {
    Currencies: CurrencyReducer,
    CurrencyDetails: DetailsReducer,
  },
});

export default store;
