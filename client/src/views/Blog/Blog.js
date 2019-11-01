import React from 'react';
import logo from '../../assets/logo.svg';
import './Blog.css';
import twttr from '../../../public/index.html'

function Blog() {
    return (
        <div className="App">
			<h1>Blog Post Page</h1>
            componentDidMount: function() {
				twttr.widgets.load()
			}
        </div>
    );
}

export default Blog;
