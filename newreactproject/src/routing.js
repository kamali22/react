import React from 'react'  
import About from './About'   
import LoginForm from './LoginForm'  
import RegisterForm from './RegisterForm'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage' 
import Cart from './Cart'
import FoodProduct from './FoodProduct'
import PlaceOrder from './PlacedOrder';

class Routing extends React.Component {  
  
  render() {  
    return (  
      <Router>
        <div className='App'> 
          <Routes>
            <Route path="" element={<HomePage/>} />
            <Route path="/food" element={<FoodProduct />} />
            <Route path="/order" element={<FoodProduct />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/logout" element={<LoginForm />} />
          </Routes>
        </div>  
      </Router>
    )  
  }  
}  
export default Routing;