import './Login.css';
import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth";

const email = "";
const password = "";

class Login extends React.Component {
     


    //Need to change the below function so that only client can login
    submit(username, password) {
        var boolie = false;
        //console.log(email, password)
        if (username.length > 0 && password.length > 0) {
            //clear email,pass after login button clicked 
            this.setState({
                password: ""
            })
            this.setState({
                username: ""
            })
            //console.log(this.state.email, this.state.password,"empty")

            //Redirect
            //this.props.history.push('/admin')

        }
        fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        }).then(result => {
            //console.log(result.status);
            if (result.status === 200) {
                this.props.tokenUpdate("kapow");
                //useAuth().setToken("al.kgnlanglagal");
                boolie = true;
                //console.log(useAuth().token)
            } else {
                //this.state.setIsError = true;
            } 
            //console.log(boolie);
            if (boolie) {
                return this.props.history.push('/admin')
                //return null; 
                //  this.props.history.push('/home')

            }
            else {
                alert("Incorrect login info.");
                this.props.history.push('/login')
            }

        })
        

    }

    render() {
        //const {  } = this.props;
        return (
            <div className="App" >
                <div className="Login">
                    <h1>Login to the Admin Dashboard</h1>
                    <form id="LoginForm">
                        <h3>Username:</h3> <input name="user"></input>
                        <h3>Password:</h3> <input name="pass"></input>
                    </form>
                    <br></br>
                    <button className="LoginButton" onClick={() => this.submit(
                        document.getElementById("LoginForm").elements["user"].value,
                        document.getElementById("LoginForm").elements["pass"].value
                    )
                    }> Login</button>
                </div>
            </div>
        );
    }
}


export default Login;
