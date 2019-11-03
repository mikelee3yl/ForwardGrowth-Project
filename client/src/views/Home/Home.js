import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
            <a href="/Home"><img src ={logo} width={'50 px'} alt = "logo"></img></a>
            </header>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;
