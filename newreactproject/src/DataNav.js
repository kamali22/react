import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"
import profile from "./assests/profile.png";
import cart from "./assests/cart.png";
import logo from "./assests/y-logo.png";

class DataNav extends React.Component {
    
    render() {
        
        return (
            <nav>
                <h2><img className="logo" src={logo} alt="" />
                Yumito</h2>

                <ul className="nav-link">
                    <li>
                        <NavLink to="/cart" activeClassName="active"><a href="" className="cart-icon"><img className='cart-icon' src={cart}/></a></NavLink>
                    </li>
                     <li>
                        <NavLink to="/profile" activeClassName="active"><a href="" className="profile-icon"><img className='profile-icon' src={profile}/></a></NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default DataNav;