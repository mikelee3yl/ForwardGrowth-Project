import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './About.css';

function About() {
    return (
        <div className="App">
        <header className="App-header">
        <a href="/Home"><img src ={logo} width={'7%'} alt = "logo"></img></a>
        </header>
        <h1>About the Team Page</h1>
    </div>
    );
}

export default About;
