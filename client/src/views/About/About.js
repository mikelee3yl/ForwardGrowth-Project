import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './About.css';


const sendyEmail = (email, subject, body) => {
    return fetch("/api/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, body})
    });
    
};
class About extends React.Component {

    

    render() {

        return (
            <div className="App">
                <h1>About the Team Page</h1>
                <form>
                    <input type="text" placeholder="from email" ref="email" />
                </form>
                <form>
                    <input type="text" placeholder="Subject" ref="subject" />
                </form>
                <form>
                    <textarea type="text" placeholder="body" ref="body" />

                </form>
                <button
                    onClick={() => {
                        sendyEmail(this.refs.email.value, this.refs.subject.value, this.refs.body.value,);
                    }}
                >
                    Send Email
          </button>
            </div>
        );
    }
}

export default About;
