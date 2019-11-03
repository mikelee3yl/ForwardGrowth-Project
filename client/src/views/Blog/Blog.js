import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Blog.css';

function Blog() {
    return (
        <div className="App">
            <header className="App-header">
                <a href="/Home"><img src ={logo} width={'7%'} alt = "logo"></img></a>

            </header>
            <h1>Blog Post Page</h1>
        </div>
    );
}

export default Blog;
