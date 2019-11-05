import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Home.css'
 

function Home() {
    const getUser = (_name,_email) => {
        
    };
  
      
    return (
        <div className="App">
            <header className="App-header">
                <a href="/Home"><img src ={logo} width={'50 px'} alt = "logo"></img></a>
            </header>
            <h1>Home Page</h1>
            <form id="addToMailingList">
            Name: <input name="name" ></input>
            Email: <input name="email" ></input>
          </form>
          <button onClick={() => this.add( //grabbing the values from form
            document.getElementById("addToMailingList").elements["name"].value,
            document.getElementById("addToMailingList").elements["email"].value)}
          > Add me to the mailing list! </button>
        </div>
    );
}

export default Home;
