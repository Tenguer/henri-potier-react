import React, {useState} from "react";

import Quantity from "../Quantity/Quantity";

export default function BookQuantity ({isbn, onAddToCart}) {
    const [quantity, setQuantity] = useState(0);

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
    const addToCartAndReset =  () => {
        onAddToCart({isbn, quantity});
        setQuantity(0);
    }
    return (
        <>
            <Quantity
                data-testid="increaseButton"
                increase = { increase }
                decrease = { decrease }
            />
            <button
                className="btn-add"
                onClick={ addToCartAndReset }
            >
                Ajouter au panier
            </button>
        </>
    )}
