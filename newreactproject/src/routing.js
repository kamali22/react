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

class Routing extends React.Component {  
  
  render() {  
    return (  
      <Router>
        <div className='App'>  
          <Nav/>
          <Routes>
            <Route path="/order" element={<DataLoad />} />
            <Route path="/home" element={<DemoData />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/cart" element={<CartOrder />} />
          </Routes>
        </div>  
      </Router>
    )  
  }  
}  
export default Routing;