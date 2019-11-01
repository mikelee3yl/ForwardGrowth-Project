import React from 'react';
import logo from '../../assets/logo.svg';
import './Blog.css';
//import twttr from '../../assets/index.html'

function Blog() {
    return (
        <div className="App">
			<h1>Blog Post Page</h1>
            window.addEventListener("load", function() {
				document.getElementById('tweetjs').addEventListener('load', function() {
					twttr.widgets.load()
				}, false)
			}, false)
        </div>
    );
}

export default Blog;
