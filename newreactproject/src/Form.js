import React from "react";
import axios from 'axios';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            mobile: "",
            password: ""
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState( {[name]: value} );
    }

    handleSubmit(event) {
        event.preventDefault();
        const config = { headers: { 'content-type': 'multipart/form-data'}}
        let fname = this.state.name
        console.log(fname);
        let dataArray = new FormData();
        dataArray.append("name", fname);
        dataArray.append("email", this.state.email);
        dataArray.append("mobile", this.state.mobile);
        dataArray.append("password", this.state.passowrd);
        console.log(dataArray[0]);
        axios.post("http://localhost:3010/posts", this.state, config).then(response => {console.log(response);}).catch(error => {console.log(error);})
    }

    render() {
        return (
            <div className="form">
                <h2>Register Form</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter your mail" onChange={this.handleUserInput} />
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter your password" onChange={this.handleUserInput} />
                    <label>Address</label>
                    <input type="text" className="form-control address" name="address" placeholder="Enter your address" onChnage={this.handleUserInput} height="50" />
                    <input type="submit" className="button" value="Create account"/>
                </form>
            </div>
        );
    }
}

export default Form;