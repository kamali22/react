import React from 'react'  
import Nav from './Nav'
import About from './About'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import {Switch} from "react-router";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DemoData from './DemoData'
import DataLoad from './DataLoad'
import CartOrder from './CartOrder'
import Cart from './Cart'
import Home from './Home'
import FoodProduct from './FoodProduct'

class Routing extends React.Component {  
  
  render() {  
    return (  
      <Router>
        <div className='App'> 
          <Routes>
            <Route path="" element={<DemoData/>} />
            <Route path="/food" element={<FoodProduct />} />
            <Route path="/route" element={<Home/>} />
            <Route path="/order" element={<FoodProduct />} />
            <Route path="/home" element={<DemoData />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>  
      </Router>
    )  
  }  
}  
export default Routing;