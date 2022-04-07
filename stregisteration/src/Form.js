import React from "react";
import { FormErrors } from './FormErrors';
import "./assests/style.css";

class Form extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
          username: '',
          surname: '',
          email: '',
          password: '',
          formErrors: {username: '', surname:'', email: '', password: ''},
          usernameValid: false,
          surnameValid: false,
          emailValid: false,
          passwordValid: false,
          formValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
    }

    handleSubmit(event) {
        //event.preventDefault();
        console.log(this.state);
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let surnameValid = this.state.surnameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'username':
            usernameValid = value.match(/^[a-zA-Z\-]+$/);
            fieldValidationErrors.username = usernameValid ? '' : ' accepts alphabet characters only';
            break;
          case 'surname':
            surnameValid = value.match(/^[a-zA-Z\-]+$/);
            fieldValidationErrors.surname = surnameValid ? '' : ' accepts alphabet characters only';
            break;
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            fieldValidationErrors.password = passwordValid ? '': ' should contain atleast 8 characters including 1 lowercase, uppercase, number and special character';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        usernameValid: usernameValid,
                        surnameValid: surnameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
        //console.log(this.state);
    }

    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.surnameValid && this.state.emailValid && this.state.passwordValid});
        //console.log(this.state);
      }

    render() {
        return (
            <div>
                <div className="navbar">
                    <h1 className="head">Go</h1>
                    <h1 className="head">Simpletax</h1>
                </div>
                <div className="container-left">
                    <h1 className="sidebar">Start your free trial</h1>
                    <h1 className="one">- no credit card required!</h1>
                    <p> ✔ Simple and easy to use </p>
                    <p>✔ Save time and hassle </p>
                    <p>✔ Save money</p>               
                    <p>✔ Nothing to install, runs everywhere </p> 
                    <p>✔ 100% compatible with HMRC </p>   
                    <p>✔ Making Tax Digital ready </p>
                    <p>✔ No obligation, cancel at anytime!</p>
                </div>
                <div className="container-right">
                    <p className="formheader">Start your free trial</p>
                    <form>
                        <div className="error">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="First Name" name="username" value={this.state.username} required onChange={this.handleUserInput} />
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Surname" name="surname" value={this.state.surname} onChange={this.handleUserInput} />
                        </div>
                        <div>
                            <input type="mail" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleUserInput} required />
                        </div>
                        <div>
                            <input type="password" className="form-control" placeholder="Create password" name="password" value={this.state.password} onChange={this.handleUserInput} required />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.handleSubmit}>Get Started</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Form;