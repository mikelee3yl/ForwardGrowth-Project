import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './About.css';
import avatar from './img_avatar.png';

const sendyEmail = (sender, subject, body) => {
    return fetch("/api/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender, subject, body })
    }).then(response => response.json());

};


class About extends React.Component {
    render() {


        return (
            <div>
                <div className="App">
                    <h1>About the Team Page</h1>
                </div>
                <div class="card">
                <img src={avatar} alt="Avatar" alt="Avatar" />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect &#38; Engineer</p>
                </div>
            </div>
                {/* <div class="card-row">
                    <table>
                        <tr>
                            <td>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src={avatar} alt="Avatar" />
                                            <div class="container">
                                                <h1><b>John Doe</b></h1>
                                                <p>Architect &#38; Engineer</p>
                                            </div>
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect &#38; Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src={avatar} alt="Avatar" />
                                            <div class="container">
                                                <h1><b>John Doe</b></h1>
                                                <p>Architect &#38; Engineer</p>
                                            </div>
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>John Doe</h1>
                                            <h1>Architect &#38; Engineer</h1>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div> */}

                    <div className="App">
                        <div className="email-container">
                        <h1>Send an email to the team</h1>
                            <form>
                                <input type="text" placeholder="Your Name" ref="sender" />
                            </form>
                            <form>
                                <input type="text" placeholder="Subject" ref="subject" />
                            </form>
                            <form>
                                <textarea class="email-body" type="text" placeholder="Body" ref="body" />
                            </form>
                            <button class="email-button"
                                onClick={() => {
                                    if (this.refs.sender.value && this.refs.subject.value && this.refs.body.value) {
                                        sendyEmail(this.refs.sender.value, this.refs.subject.value, this.refs.body.value).then(({ message }) => {
                                            alert(message);
                                        });
                                    }
                                    else {
                                        alert("make sure all entries are completed");
                                    }
                                }}
                            >
                                Send Email
                            </button>
                        </div>
                    </div>
                </div>
        );
    }
}
export default About;

