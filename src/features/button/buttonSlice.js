import { createSlice } from '@reduxjs/toolkit';

export const buttonSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increase: (state, action) => {
      const prevQty = state[action.isbn]
      Object.assign(state, { [action.isbn]: prevQty + action.qty });
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


