import axios from "axios";
import React , { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "./style.css";

function LoginForm() {
 
    const [data, setData] = useState({
      email: '',
      password: '',
  });
    const [persons, setPersons] = useState([]);

    const [error, setError] = useState(false);
  
    const handleChange = name => e => {
      setData({ ...data, [name]: e.target.value });
    };
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/order`; 
      navigate(path);
      
    }
    
    const handleDataSubmit = async (e) => {
      e.preventDefault();
      axios.get("http://localhost:3010/posts").then(res => {const persons=res.data; setPersons([persons]); console.log("persons", persons, "length is", persons.length)})
      console.log("data length", persons.length);
      Object.values(persons).map(userdata => {
        console.log("data is ", userdata.length, data[0]);
        for (var i=0; i < userdata.length; i++) {
          console.log("email is", userdata[i].email);
          if (data.email === userdata[i].email && data.password === userdata[i].password) {
            routeChange();
        }
        else{
            setError({error: true})
        }
        }
      })         
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
            <Nav />
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