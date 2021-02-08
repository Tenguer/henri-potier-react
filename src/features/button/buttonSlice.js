import { createSlice } from '@reduxjs/toolkit';

export const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    amount: 1,
    qty: 0
  },
  reducers: {
    increase: state => {
      state.qty += state.amount;
    },
    decrease: state => {
      if (state.qty > 0) {
        state.qty -= state.amount;
      }
    }
  },
});

export const { increase, decrease } = buttonSlice.actions;

export const selectQty = state => state.button.qty;

export default buttonSlice.reducer;
