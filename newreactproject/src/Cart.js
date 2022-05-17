import React from 'react';
import {Container ,Card, Col, Row } from 'react-bootstrap';  

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
            <div>
                <Container fluid className='container'>	
                    <Col xs="4">
                        <Card className='card'>
                            <Card.Img variant='' src={product.img} />
                            <Card.Body className='card'>
                                <Card.Title>{product.itemName}</Card.Title>
                                <Card.Text>
                                    Price: {product.price} <br></br>
                                    Vegan: {product.vegan}
                                </Card.Text>
                                <button onClick={() => removeFromCart(product)}>Remove item</button>
                            </Card.Body>
                        </Card>
                    </Col>	
                </Container>
            </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}

/*
return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );

*/