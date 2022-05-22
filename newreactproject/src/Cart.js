import React from "react";
import { useCart } from "react-use-cart";
import "./assests/Cart.css";
import DataNav from "./DataNav";

const Cart = () => {
  const { 
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart 
  } = useCart();

  if (isEmpty) return <h1><DataNav />Your cart is empty!</h1>

  return (
    <div> <DataNav />
      <h2 className="cart-header">In Your Cart ({totalUniqueItems})</h2>
      <table className="table">
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.img} style={{height: '6rem', width: '9rem'}} />
                </td>
                <td>{item.itemName}</td>
                <td>${item.price}</td>
                <td>Quantity ({item.quantity})</td>
                <td>
                  <button className="cartbutton" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <button className="cartbutton" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="cartbutton remove" onClick={() => removeItem(item.id)}>Remove Item</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {console.warn(items)}
      <div className="footerdiv">
        <span className="span">
          <h2 className="footer">Total Price: ${cartTotal}</h2>
          <button className="footer remove cartbutton" onClick={() => emptyCart()}>Clear Cart</button>
        </span>
      </div>
    </div>
  );
}

export default Cart;