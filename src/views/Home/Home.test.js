import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom"

import Home from './Home';

test.skip('renders home', () => {
    render(<Router><Home /></Router>);

    const increaseButton = screen
        .getByTestId('increaseButton')
        .querySelector('[data-testid="increase-button"]');

    expect(increaseButton).toBeInTheDocument();
    fireEvent.click(increaseButton);

    const quantity = screen.getByText('Quantité : 2')
    expect(quantity.textContent).toBe("Quantité : 2")
});

// TODO test l'affichage de 2 livres.
// TODO mock getBooks
