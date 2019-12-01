import React from 'react';
import './TeamCards.css';
var Jimp = require('jimp')
const fs = require('fs');

const updateTile = (form) => {
    return fetch("/api/update_tile", {
        method: "POST",
        body: form
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
            photo: null,
        };
    }
    componentDidMount() {
        fetch('/api/get_tile')
            .then(res => {
                return res.text();
            })
            .then(res => {
                console.log('My data is:' + res);
                var obj = JSON.parse(res);
                this.setState({
                    people: obj
                })
            })
    }
    onChange = e => {

        this.setState({
            photo: e.target.files,
        })
    }

    render() {
        const cards = this.state.people.map((person, index) => {


            return (
                <div key={index} class="card">
                    <img src={`data:${person.img.contentType};base64,${Buffer.from(person.img.data).toString('base64')}`} alt="" />
                    <div class="container">
                        <h4>Name: </h4> <input type="text" defaultValue={person.name} ref="NewName"></input>
                        <h4>Position: </h4> <input type="text" defaultValue={person.position} ref="NewPosition"></input>
                        <h4>Replace photo of team member: </h4>
                        <input type="file" onChange={this.onChange} ref="NewPhoto"/>
                        <button
                            onClick={() => {
                                var tileForm = new FormData();
                                if(this.state.photo != null){
                                    // tileForm.append('file', this.state.photo[0]);
                                    tileForm.append('file', JSON.stringify(this.state.photo[0]));
                                    console.log(this.state.photo[0]);
                                }
                                if (this.refs.NewName.value && this.refs.NewPosition.value){
                                    tileForm.append('originalname', person.name)
                                    tileForm.append('name',this.refs.NewName.value);
                                    tileForm.append('position', this.refs.NewPosition.value);
                                    updateTile(tileForm).then(({ message }) => {
                                        alert(message);  
                                    });
                                }
                                else alert("Ensure that the name and position of the team member is valid."); //Does not need to update photo
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