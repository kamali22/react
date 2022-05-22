import React from 'react'  
import Nav from './Nav'
import About from './About'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import {Switch} from "react-router";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DemoData from './DemoData'
import DataLoad from './DataLoad'
import DataNav from './DataNav'
import CartOrder from './CartOrder'
import Cart from './Cart'
import FoodProduct from './FoodProduct'
import AddCart from './AddCart'

class OrderRouting extends React.Component {  
  
  render() {  
    return (  
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/food" element={<FoodProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<AddCart />} />
            <Route path="/logout" element={<LoginForm />} />
          </Routes>
        </div>  
      </Router>
    )  
  }  
}  

export default OrderRouting;