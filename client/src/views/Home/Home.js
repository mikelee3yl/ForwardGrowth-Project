import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Home.css';

//Home Page: Sofia & Mark
//Mark: Static
//Sofia: Boostrap and CSS

function Home() {
    return (
        <div className="App">
            <header className="App-header">
            <a href="/Home"><img src ={logo} width={'50 px'} alt = "logo"></img></a>
            </header>
            <h1>Home Page</h1>
            <div className="row">
            <img src="/OrchardGrove(1).png" alt="Backpack Adventures Gaming App"></img>
            </div>
            <div className="row">
            <img src="ForwardGrowthDemo.png" alt="Backpack Adventures Gaming App"></img>
            </div>
            <div className="row">
            <img src="/ForwardGrowthDemo-1.png" alt="Backpack Adventures Gaming App"></img>
            </div>
        </div>
    );
}

export default Home;
