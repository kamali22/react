import React from 'react';
import Routing from './routing';
import "./style.css"
import { CartProvider } from 'react-use-cart';

class App extends React.Component {
  render() {
    return (
      <div>
        <CartProvider>
          <Routing />
        </CartProvider>
      </div>
    );
  }
}

export default App;