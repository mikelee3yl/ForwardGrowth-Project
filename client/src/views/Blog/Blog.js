import React from 'react';
import logo from '../../assets/logo.svg';
import './Blog.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
//import twttr from '../../assets/index.html'

function Blog() {
    return (
		
        <div className="App">
			<h1>Blog Post Page</h1>
			<TwitterTimelineEmbed
			  sourceType="profile"
			  screenName="elonmusk"
			  options={{height: 400}}
			/>
            
        </div>
    );
}

export default Blog;
