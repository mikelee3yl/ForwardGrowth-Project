import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Home.css'
 


function Home() {
    const getUser = (_name,_email) => {
        
    };
  
    return (
    
        <div className="App">
            <h1>Home Page</h1>       
                <div className="container-fluid bg-1 text-center">
                    <h1>Backpack Adventures</h1>
                    <button>App Store</button>
                </div>
                <div className="bg-2 text-center">
                    <h1>Features</h1>
                </div>
                <div className="bg-3 text-center">
                    <h1>About</h1>
                </div>
                <div className="bg-4 text-center">
                    <h1>Screenshots</h1>
                </div>
                <div className="bg-5 text-center">
                    <h1>Be in touch</h1>
                </div>
        </div>
    );
}

export default Home;
