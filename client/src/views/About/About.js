import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './About.css';

function About() {
    return (
        <div>
            <div className="App">
                <h1>About the Team Page</h1>
            </div>
            {/* <div class="card">
                <img src="img_avatar.png" alt="Avatar" />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect &#38; Engineer</p>
                </div>
            </div> */}
            <div class="card-row">
                <table>
                    <tr>
                        <td>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="img_avatar.png" alt="Avatar" />
                                        <div class="container">
                                            <h4><b>John Doe</b></h4>
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
                                        <img src="img_avatar.png" alt="Avatar" />
                                        <div class="container">
                                            <h4><b>John Doe</b></h4>
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
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default About;

