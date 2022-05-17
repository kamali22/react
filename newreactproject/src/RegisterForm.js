import { useState } from 'react';
import { Link , Navigate, useNavigate} from "react-router-dom";
import "./style.css"
import axios from 'axios';

export default function RegisterForm() {
 
  const [values, setValues] = useState({
    email: '',
    password: '',
    address: "",
    loggedIn: true,
});
 
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
  
  const handleDataSubmit = async (e) => {
    e.preventDefault();
    const { email, password, address , loggedIn} = values;
    const user = { email, password, address , loggedIn};
    await axios.post('http://localhost:3010/posts', user);
    setValues({ email: '', password: '', address:'' });
    successMessage();
    routeChange();
       
};
 
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3>User {values.email} successfully registered!!</h3>
      </div>
    );
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
        <div className='border'>
            <div><h2 className='header'>Register Here</h2></div>

            <div className="messages">
              {errorMessage()}
              {successMessage()}
            </div>
 
            <form onSubmit={handleDataSubmit}> 
                <label className="label">Email</label>
                <input onChange={handleChange('email')} className="input"
                  value={values.email} type="email" placeholder='Enter Email' />
        
                <label className="label">Password</label>
                <input onChange={handleChange('password')} className="input"
                  value={values.password} type="password" placeholder='Enter password' />

                <label className="label">Address</label>
                <textarea onChange={handleChange('address')} className="input address"
                  value={values.address} type="text" placeholder='Enter Address' />  
        
                <button className="button" type="submit">
                  Sign Up
                </button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </div>
  );
}