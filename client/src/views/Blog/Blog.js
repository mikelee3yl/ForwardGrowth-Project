import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Blog.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            instagramlink: ''
        }
    }
    componentDidMount() {
        fetch('/api/instagramlink')
            .then(res => res.json())
            .then(result => this.setState({ instagramlink: result.instagramlink }))
    }
    render() {
        return (
            <div className="App">
                <h1>Blog Page</h1>
                <div class="row">
                    <div class="column" >
                        <h2>Check us out on Twitter</h2>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="ForwardGrowth0"
                            options={{ height: 500, width: 500 }}
                        />
                    </div>
                    <div class="column">
                        <h2>Check us out on Instagram</h2>
                        <InstagramEmbed
                            url={this.state.instagramlink}
                            maxWidth={500}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
