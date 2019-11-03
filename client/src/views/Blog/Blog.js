import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Blog.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function Blog() {
    return (
        <div className="App">
            <header className="App-header">
            <a href="/Home"><img src ={logo} width={'50 px'} alt = "logo"></img></a>
            </header>
            <h1>Blog Page</h1>
            
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="elonmusk"
                options={{ height: 500, width: 500 }}
            /> 
        </div>
    );
}

export default Blog;