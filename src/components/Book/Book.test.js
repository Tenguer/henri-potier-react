import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom"
import QuantityButton from '../../components/QuantityButton/QuantityButton'
import Book from './Book';

describe("Book component", () => {
  it("Show one book", () => {
    // given
    const props = {
      key: 12,
      isbn: 444,
      title: "Henri Potier à l'école des sorciers",
      cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
      synopsis: [{}],
      price: 14
    };
    // when
    const { getByText } = render(<Router><Book {...props}/><QuantityButton /></Router> )
    // then
    expect(getByText("Henri Potier à l'école des sorciers")).toBeInTheDocument()
    expect(getByText("14€")).toBeInTheDocument()
    screen.getByAltText(/Couvertude de : Henri Potier à l'école des sorciers/i)
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media");
  })

  it("Add one book", async () => {
    // given
    const props = {
      key: 12,
      isbn: 444,
      title: "Henri Potier à l'école des sorciers",
      cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
      synopsis: [{}],
      price: 14
    };

    const childProps = {
      onSubmitQuantity: jest.fn()
    }

    // when
    const { getByText, getByTestId } = render(<Router><Book {...props}/><QuantityButton {...childProps}/></Router> )
    // then
    const increaseButton = getByTestId('increase-button')
    await fireEvent.click(increaseButton)
    getByText('1')
    const addbutton = getByTestId('increaseButton-add')
    await fireEvent.click(addbutton)
  })
})

// TODO test l'affichage de 2 livres.
// TODO mock getBooks
