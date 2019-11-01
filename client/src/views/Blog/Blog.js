import React from 'react';
import logo from '../../assets/logo.svg';
import './Blog.css';

function Blog() {
    return (
        <div className="App">
			<h1>Blog Post Page</h1>
            <a class="twitter-timeline"
				href="https://twitter.com/elonmusk"
				data-width="300"
				data-height="300">
				Tweets by @ElongatedMuskrat
			</a> 
        </div>
    );
}

export default Blog;
