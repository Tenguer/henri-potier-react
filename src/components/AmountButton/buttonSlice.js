import { createSlice } from '@reduxjs/toolkit';

export const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    amount: 0,
    qty: 0
  },
  reducers: {
    increase: state => {
      state.qty += 1;
    },
    decrease: state => {
      if (state.qty > 0) {
        state.qty -= 1;
      }
    }
  },
});

export const { increase, decrease } = buttonSlice.actions;

export const selectQty = state => state.button.qty;

export default buttonSlice.reducer;
