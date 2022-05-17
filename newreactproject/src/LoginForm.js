import axios from "axios";
import React , { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import DataLoad from "./DataLoad";
import Nav from "./Nav";
import "./style.css";
import userData from "./userData.js";

function LoginForm() {
 
    const [data, setData] = useState({
      email: '',
      password: '',
  });

    const [error, setError] = useState(false);
  
    const handleChange = name => e => {
      setData({ ...data, [name]: e.target.value });
    };
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/order`; 
      navigate(path);
      <DataLoad/>
    }
    
    const handleDataSubmit = async (e) => {
      e.preventDefault();
      console.log(Object.keys(userData).length);
      for (var i=0; i < Object.values(userData).length; i++) {
        if (data.email === Object.values(userData)[i].email && data.password === Object.values(userData)[i].password) {
            routeChange();
        }
        else{
            setError({error: true})
        }
    }
         
    };

    const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h3>Invalid credentials!</h3>
          </div>
        );
      };
   
    return (
        <div className="form">
            <div className="border">
                <h2 className="header">Login Here</h2>
                <div style={{textAlign: "center"}}>{ errorMessage() }</div>
                <form onSubmit={handleDataSubmit}>
                    <label className="label">Email</label>
                    <input className="input"
                    value={data.email} type="email" placeholder='Enter Email' name="email" onChange={handleChange('email')}/>
            
                    <label className="label">Password</label>
                    <input className="input"
                    value={data.password} type="password" placeholder='Enter password' name="password" onChange={handleChange('password')}/>

                    <button className="button" type="submit">
                        Log In
                    </button>
                    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
  }
export default LoginForm;