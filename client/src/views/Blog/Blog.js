import React from 'react';
import logo from '../../assets/logo.svg';
import './Blog.css';
//import twttr from '../../assets/index.html'

function Blog() {
    return (
		<script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		<script>window.twttr = (function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0],
			t = window.twttr || {};
		  if (d.getElementById(id)) return t;
		  js = d.createElement(s);
		  js.id = id;
		  js.src = "https://platform.twitter.com/widgets.js";
		  fjs.parentNode.insertBefore(js, fjs);

		  t._e = [];
		  t.ready = function(f) {
			t._e.push(f);
		  };

			return t;
		}(document, "script", "twitter-wjs"));</script>
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
