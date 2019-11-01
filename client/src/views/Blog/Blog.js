import React from 'react';
import logo from '../../assets/logo.svg';
import './Blog.css';

function Blog() {
    return (
        <div className="App">
			<h1>Blog Post Page</h1>
            <a class="twitter-timeline" href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw">
			Tweets by elongatedmuskrat
			</a>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    );
}

export default Blog;
