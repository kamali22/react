import React from "react";
import { NavLink } from "react-router-dom";
import profile from "./assests/images/profile.png";
import cart from "./assests/images/cart.png";
import logo from "./assests/images/y-logo.png";
import foodicon from "./assests/images/foodicon.jpeg";
import Cart from "./Cart";
import "./assests/Styles/DataNav.css";

class DataNav extends React.Component {
    
    render() {
        
        return (
            <nav>
                <h2><img className="logo" src={logo} alt="" />
                Yumito</h2>

                <ul className="nav-link">
                    <li>
                        <NavLink to="/food"><img className='icon food-icon' src={foodicon}/></NavLink>
                    </li>
                    <li> 
                        <NavLink to="/cart"><img className='icon cart-icon' src={cart}/>{(Cart.totalUniqueItems)}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile"><img className='icon profile-icon' src={profile}/></NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default DataNav;