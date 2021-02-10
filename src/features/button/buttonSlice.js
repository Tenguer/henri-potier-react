import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0

export const buttonSlice = createSlice({
  name: 'button',
  initialState:[],
  reducers: {
    test: {
      reducer(state, action) {
        console.log('reducer', action, state)
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        console.log('prepare', text)
        return { payload: { text, id: nextTodoId++ } }
      }
    },
    increase(state, action) {
      const { amount,isbn } = action.payload

      console.log( amount, isbn)
      state.push({ amount, isbn })
    },
    decrease: (state, action) => {
      if (state.qty > 0) {
        state.qty -= action.payload;
      }
    },
    findBook: () => {
      console.log('findbook')
    }
  },
});

export const { increase, decrease } = buttonSlice.actions;

export const selectQty = state => state.button.qty;

export default buttonSlice.reducer;
