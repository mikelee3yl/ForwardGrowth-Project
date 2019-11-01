import React from 'react';
import logo from '../../assets/logo.svg';
import './Blog.css';
//import twttr from '../../assets/index.html'

function Blog() {
    return (
        <div className="App">
			<h1>Blog Post Page</h1>
            componentDidMount: twttr.ready(function(twttr) {
				twttr.widgets.load()
			})
        </div>
    );
}

export default Blog;
