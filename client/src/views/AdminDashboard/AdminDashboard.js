import React from 'react';
import './AdminDashboard.css';


const updateyInsta = (instagramlink) => {
    return fetch("/api/update_insta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instagramlink })
    }).then(response => response.json());
};   
const updateyHome = (company,payment,about) => {
    return fetch("/api/update_home", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, payment, about })
    }).then(response => response.json());
};  
const deleteTile = (name) => {
    return fetch("/api/delete_tile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name})
    }).then(response => response.json());
};  
const addTile = (form) => {
    return fetch("/api/add_tile", {
        method: "POST",
        body:  form
    }).then(response => response.json());
};  


    
class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            company: '',
            payment: '',
            about: ''

        };

    }
    componentDidMount() {

        fetch('/api/get_home')
            .then(res => {
                return res.text();
            })
            .then(res => {
                var obj = JSON.parse(res);

                this.setState({
                    company: obj.company,
                    payment: obj.payment,
                    about: obj.about
                })
                console.log(obj.about);
            })
    }
    
    onChange = e => {
       
        this.setState({
            photo: e.target.files
        })
    }
    
    render() {
        return (
            <div className="App">
                <h1>Admin Dashboard</h1>
                <form>
                    <textarea type="text" placeholder="instagram page url" ref="body" />

                </form>
                <button
                    onClick={() => {
                        if (this.refs.body.value) {
                            updateyInsta(this.refs.body.value).then(({ message }) => {
                                alert(message);
                            });
                        }
                        else {
                            alert("Make sure all entries are completed.");
                        }
                    }}
                >
                    Update Instagram
        </button>
                <form>
                    <textarea type="text" defaultValue={this.state.company} ref="company"/>

                </form>
                <form>
                    <textarea type="text" defaultValue={this.state.payment} ref="payment" />

                </form>
                <form>
                    <textarea type="text" defaultValue={this.state.about} ref="about" />

                </form>
                <button
                    onClick={() => {
                        if (this.refs.company.value && this.refs.payment.value && this.refs.about.value) {
                            updateyHome(this.refs.company.value , this.refs.payment.value , this.refs.about.value).then(({ message }) => {
                                alert(message);
                            });
                        }
                        else {
                            alert("Make sure all entries are completed.");
                        }
                    }}
                >
                    Update home
        </button>
                <form>
                    <textarea type="text" placeholder="name" ref="name" />

                </form>
                <form>
                    <textarea type="text" placeholder="position info" ref="position" />

                </form>
                <div>
                    <input type="file" onChange={this.onChange} />
                </div>

               
                <button
                    onClick={() => {
                        if (this.refs.name.value && this.refs.position.value) {
                            var formData = new FormData();
                            formData.append('name', this.refs.name.value);
                            formData.append('position', this.refs.position.value);
                            formData.append('file', this.state.photo[0]);

                            addTile(formData).then(({ message }) => {
                                alert(message);
                            });
                        }
                        else {
                            alert("Make sure all entries are completed.");
                        }
                    }}
                >
                    Add Tile
        </button>
                

                <form>
                    <textarea type="text" placeholder="name of tile you want to delete" ref="deleteName" />

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
                    remove Tile
        </button>

            </div>

        );
    }
}
export default AdminDashboard;