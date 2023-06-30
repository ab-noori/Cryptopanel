import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.coingecko.com/api/v3/coins';
// const CRITERIA = 'localization=false&tickers=false&community_data=false&developer_data=false';

export const fetchDetails = createAsyncThunk('CurrencyDetails/fetchDetails', async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();
  return data;
});

const initialState = {
  Loading: false,
  CurrencyDetails: [],
  error: null,
};

const DetailsSlice = createSlice({
  name: 'CurrencyDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        const newState = { ...state, Loading: true };
        return newState;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        const newState = {
          ...state,
          Loading: false,
          CurrencyDetails: action.payload,
          error: null,
        };
        return newState;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        const newState = {
          ...state,
          Loading: false,
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default DetailsSlice.reducer;
