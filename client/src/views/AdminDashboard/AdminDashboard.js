import React from 'react';
import './AdminDashboard.css';


const updateyInsta = (instagramlink) => {
    return fetch("/api/update_insta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instagramlink })
    }).then(response => response.json());

    class AdminDashboard extends React.Component {
        render() {
            return (
                <div className="App">
                    <h1>Admin Dashboard</h1>
                    <form>
                        <textarea type="text" placeholder="body" ref="body" />

                    </form>
                    <button
                        onClick={() => {
                            if (this.refs.body.value) {
                                sendyEmail(this.refs.body.value).then(({ message }) => {
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
                </div>
            );
        }
    }
}
export default AdminDashboard;