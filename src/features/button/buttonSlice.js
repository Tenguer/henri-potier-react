import { createSlice } from '@reduxjs/toolkit';

export const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    amount: 1,
    qty: 0,
    bookQty: []
  },
  reducers: {
    increase: (state, action) => {
      state.bookQty.push({[action.payload.isbn]: action.payload.amount})
      // state.qty += action.payload;
      this.findBook()
    },
    decrease: (state, action) => {
      if (state.qty > 0) {
        state.qty -= action.payload;
      }
    },
    findBook: () => {
      console.log('findbook')
      // console.log(state, action.payload.isbn)
      // return state.bookQty.findIndex(action.payload.isbn)
    }
  },
});

export const { increase, decrease } = buttonSlice.actions;

export const selectQty = state => state.button.qty;

export default buttonSlice.reducer;
