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
                <div className="container-fluid bg-2 text-center">
                    {/* features */}
                </div>
                <div className="container-fluid bg-3 text-center">
                    {/* About */}
                </div>
                <div className="container-fluid bg-4 text-center">
                    {/* Screenshots */}
                </div>
                <div className="container-fluid bg-5 text-center">
                    {/* Be in touch */}
                </div>
        </div>
    );
}

export default Home;
