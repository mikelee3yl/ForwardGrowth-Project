import React from 'react';
import './TeamCards.css';
import avatar from '../../assets/img_avatar.png'

//This file is intended to create a grid of cards pulled from the database

class Card extends React.Component {
    render() {
        return (
        <div class="card">
            <img src={avatar} alt="Avatar" alt="Avatar" />
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect &#38; Engineer</p>
        </div>
    </div>
        )
    }
};
export default Card;


