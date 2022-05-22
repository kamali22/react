import React from "react";
import FoodProduct from "./FoodProduct";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";

function AddCart() {
    return (
        <>
            <CartProvider>
                <FoodProduct />
                <Cart />
            </CartProvider>
        </>
    );
}

export default AddCart;