import React from 'react';
import './AdminDashboard.css';
import Collapsible from 'react-collapsible';

const homeTrigger = <h1>Home Page</h1> 
const blogTrigger = <h1>Blog Page</h1>

class AdminDashboard extends React.Component{
 
  render() {
    return(
        <div className="App">
          <div className="colStyle">
      <Collapsible trigger={homeTrigger} className="headerStyle" transitionTime="10" transitionCloseTime="10">
        <form className ="formStyle" id="homePage">
            <h3>Features: </h3> 
            <h4>Company: </h4> <input name="companyText"></input>
            <h4>Payment Methods: </h4> <input name="paymentMethods"></input>
            <h3>About: </h3> <input name="aboutText"></input>
        </form>
      </Collapsible>

        <Collapsible trigger ={blogTrigger} className="headerStyle" transitionTime="10" transitionCloseTime="10">
            <form className ="formStyle" id="socialMedia">
                <h3>Instagram link: </h3> <input name="link"></input>
            </form>
        </Collapsible>
        </div>
        </div>
    );
  }
};
 
export default AdminDashboard;