import React from 'react';
import './TeamCards.css';
var Jimp = require('jimp')
const fs = require('fs');

//This file is intended to create a grid of cards pulled from the database

{/* <form>
                            <input type="text" placeholder="Name of member" ref="deleteName" />

                        </form>

                        <button
                            onClick={() => {
                                if (this.refs.deleteName.value) {
                                    deleteTile(this.refs.deleteName.value).then(({ message }) => {
                                        alert(message);
                                    });
                                }
                                else {
                                    alert("Make sure all entries are completed.");
                                }
                            }}
                        >
                            Delete a team member
        </button> */}


const deleteTile = (name) => {
    return fetch("/api/delete_tile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    }).then(response => response.json());
};

class TeamCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []

        };
    }
    componentDidMount() {
        fetch('/api/get_tile')
            .then(res => {
                return res.text();
            })
            .then(res => {
                var obj = JSON.parse(res);
                this.setState({
                    people: obj
                })
            })
    }
    

render() {
    const cards = this.state.people.map((person,index) => {
        

        return (
            <div key={index} class="card">
                <img src={`data:${person.img.contentType};base64,${Buffer.from(person.img.data).toString('base64')}`} alt="" />
                <div class="container">
                    <h4><b>{person.name}</b></h4>
                    <p>{person.position}</p>
                    <button
                            onClick={() => {
                                if (person.name) {
                                    deleteTile(person.name).then(({ message }) => {
                                        alert(message);
                                    });
                                }
                            }}
                        >
                            Delete Card
                    </button>
                </div>
            </div>
        );
    });
        return (
            <div className="wrapper">
                {cards}
            </div>
            
        )
    }
};
export default TeamCards;