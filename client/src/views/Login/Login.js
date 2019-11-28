import React, { useState } from 'react';
import './Login.css';
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";


//const email = "";
//const password = "";



class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            [isLoggedIn, setLoggedIn]: useState(false),
            [isError, setIsError]: useState(false),
            [userName, setUserName]: useState(""),
            [password, setPassword]: useState(""),
            setAuthTokens: useAuth()

        };

    }
    


    //Need to change the below function so that only client can login
    submit(username, password) {

        //console.log(email, password)
        if (email.length > 0 && password.length > 0) {
            //clear email,pass after login button clicked 
            this.setState({
                password: ""
            })
            this.setState({
                username: ""
            })
                //console.log(this.state.email, this.state.password,"empty")
                
            //Redirect
            this.props.history.push('/admin')

        }
        fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        })
        if (isLoggedIn) {
            return <Redirect to="/admin" />;
        }
        else {
            alert("Incorrect login info.");
        }

    }

    render() {
        return (
            <div className="App" >
                <div className="Login">
                    <form id="LoginForm">                   
                     <h1>Login to the Admin Dashboard</h1>

                        <h3>Username:</h3> <input name="user"></input>
                        <h3>Password:</h3> <input name="pass"></input>
                        <br></br>
                        <button text-align='center' onClick={() => this.submit(
                            document.getElementById("LoginForm").elements["user"].value,
                            document.getElementById("LoginForm").elements["pass"].value
                        )}>Login</button>
                    </form>
                    <br></br>

                </div>
            </div>
        );
    }
}


export default Login;
