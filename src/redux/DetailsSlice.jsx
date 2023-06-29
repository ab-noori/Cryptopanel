import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.coingecko.com/api/v3/coins';
const CRITERIA = 'localization=false&tickers=false&market_data=false&community_data=false&developer_data=false';

export const currencyDetails = createAsyncThunk('currency/currencyDetails', async (id) => {
  const response = await fetch(`${URL}/${id}?${CRITERIA}`);
  const data = await response.json();
  return data.coins;
});

const initialState = {
  Loading: false,
  currencyDetails: [],
  error: null,
};

const DetailsSlice = createSlice({
  name: 'currencyDetails',
  initialState,
  reducers: {},
});

export default DetailsSlice.reducer;
