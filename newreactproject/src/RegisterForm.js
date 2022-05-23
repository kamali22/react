import { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import "./assests/Styles/style.css";
import Nav from './Nav';
import axios from 'axios';

export default function RegisterForm() {
 
  const [values, setValues] = useState({
    email: '',
    password: '',
    address: "",
    loggedIn: true,
});
 
  const [error, setError] = useState(false);

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/order`; 
    navigate(path);
  }
  
  const handleDataSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handle submit");
    const { email, password, address , loggedIn} = values;
    const user = { email, password, address , loggedIn};
    await axios.post('http://localhost:3010/posts', user);
    setValues({ email: '', password: '', address:'' });
    routeChange();
       
};
 
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h3>Please enter all the fields</h3>
      </div>
    );
  };
 
  
  return (
    <div className="form">
        <Nav />
        <div className='border'>
            <div><h2 className='header'>Register Here</h2></div>

            <div className="messages">
              {errorMessage()}
            </div>
 
            <form > 
                <label className="label">Email</label>
                <input onChange={handleChange('email')} className="input"
                  value={values.email} type="email" placeholder='Enter Email' />
        
                <label className="label">Password</label>
                <input onChange={handleChange('password')} className="input"
                  value={values.password} type="password" placeholder='Enter password' />

                <label className="label">Address</label>
                <textarea onChange={handleChange('address')} className="input address"
                  value={values.address} type="text" placeholder='Enter Address' />  
        
                <button className="button" type="submit" onClick={handleDataSubmit}>
                  Sign Up
                </button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </div>
  );
}