import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Blog.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

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
			<InstagramEmbed
			  url='https://www.instagram.com/elonmusk/?hl=en'
			  maxWidth={500}
			  hideCaption={false}
			  containerTagName='div'
			  protocol=''
			  injectScript
			  onLoading={() => {}}
			  onSuccess={() => {}}
			  onAfterRender={() => {}}
			  onFailure={() => {}}
			/>
        </div>
    );
}

export default Blog;