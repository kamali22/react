import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "./assests/Styles/Cart.css";
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

  const [show, setShow] = useState(false);

   const placeOrder = () => {
    console.log("Your order is placed!!!");
    return (
      <div className="place order">
        <h2 className="place-header">Thanks for your order!!! We will reach soon with your delicious food.</h2>
        <div>
          <table>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            <tr>
            {items.map((item, index) => {
              return (
                <div key={index}>  
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </div>
              );
              })}
              </tr>
            </table>
        </div>
      </div>
    );
  }

  if (isEmpty) return <h1><DataNav />Your cart is empty!</h1>

  return (
    <div> <DataNav />
      <h2 className="cart-header">In Your Cart ({totalUniqueItems})</h2>
      <table className="table" style={{width: '1500px'}}>
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
      <div className="footerdiv">
        <span className="span">
          <h2 className="footer">Total Price: ${cartTotal}</h2>
          <button className="footer remove cartbutton" onClick={() => emptyCart()}>Clear Cart</button>
          <button className="footer place-order cartbutton" onClick={() => {setShow(true)}}>Place Order</button>
          {show ? placeOrder() : null}
        </span>
      </div>
    </div>
  );
}

export default Cart;