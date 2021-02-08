import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import buttonReducer from '../features/button/buttonSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    button: buttonReducer
  },
});
