import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Book from './Book'
// import createStore from './createReduxStore'
import buttonStore from '../../features/button/buttonSlice'

// const store = createStore()

test('renders book', () => {
  render(
    <Provider store={ configureStore(buttonStore) }>
          <Book path="/"/>
    </Provider>
  );

  // const increaseButton = screen
  //     .getByTestId('increaseButton')
  //     .querySelector('[data-testid="increase-button"]');

  // expect(increaseButton).toBeInTheDocument();
  // fireEvent.click(increaseButton);

  // const quantity = screen.getByText('Quantité : 2')
  // expect(quantity.textContent).toBe("Quantité : 2")
});
