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

const updateTile = (originalname, name, position, photo) => {
    return fetch("/api/update_tile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ originalname, name, position, photo })
        body: JSON.stringify({ originalname, name, position })
    }).then(response => response.json());
};
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
            people: [],
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
        const cards = this.state.people.map((person, index) => {


            return (
                <div key={index} class="card">
                    <img src={`data:${person.img.contentType};base64,${Buffer.from(person.img.data).toString('base64')}`} alt="" />
                    <div class="container">
                        <h4>Name: </h4> <textarea type="text" defaultValue={person.name} ref="NewName"></textarea>
                        <h4>Position: </h4> <textarea type="text" defaultValue={person.position} ref="NewPosition"></textarea>
                        <h4>Replace photo of team member: </h4>
                        <input type="file" onChange={this.onChange} ref="NewPhoto"/>
                        <button
                            onClick={() => {
                                    updateTile(person.name,this.refs.NewName, this.refs.NewPosition, this.refs.NewPhoto).then(({ message }) => {
                                        alert(message);
                                    });
                            }}
                        >
                            Update Card
                    </button>
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