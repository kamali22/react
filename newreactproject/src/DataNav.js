import React from "react";
import { Nav, NavLink } from "react-router-dom";
import profile from "./assests/images/profile.png";
import cart from "./assests/images/cart.png";
import logo from "./assests/images/y-logo.png";
import foodicon from "./assests/images/foodicon.jpeg";
import Cart from "./Cart";
import "./assests/Styles/DataNav.css";

class DataNav extends React.Component {
    
    render() {
        
        return (
            <nav className="navbar navbar-expand-sm bg-dark">
                <h2><img className="logo" src={logo} alt="" />
                Yumito</h2>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/food"><img className='icon food-icon' src={foodicon}/></NavLink>
                    </li>
                    <li className="nav-item"> 
                        <NavLink to="/cart"><img className='icon cart-icon' src={cart} />
                            <span class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
                                ({(Cart.totalUniqueItems)})
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile"><img className='icon profile-icon' src={profile}/></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default DataNav;