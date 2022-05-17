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

class OrderRouting extends React.Component {  
  
  render() {  
    return (  
      <Router>
        <div className='App'>  
          <DataNav/>
          <Routes>
            <Route path="/cart" element={<CartOrder />} />
            <Route path="/order" element={<DataLoad />} />
            <Route path="/logout" element={<LoginForm />} />
          </Routes>
        </div>  
      </Router>
    )  
  }  
}  
export default OrderRouting;