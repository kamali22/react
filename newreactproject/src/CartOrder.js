import React from "react";
import DataLoad from "./DataLoad";

function CartOrder() {
    return (
        <div>
            <h2>Cart order</h2>
            {DataLoad.cartData}
            <p>kamali</p>
        </div>
    );
}

export default CartOrder;