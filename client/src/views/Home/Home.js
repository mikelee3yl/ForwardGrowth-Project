import React from 'react';
import logo from '../../assets/OrchardGroveLogo.png';
import './Home.css'
 


function Home() {
    const getUser = (_name,_email) => {
        
    };
  
    return (
    
        <div className="App">
            <h1>Home Page</h1>       
                <div className="container-fluid bg-1 text-center">
                    <h1>Backpack Adventures</h1>
                </div>
                <div className="bg-2 text-center">
                    <h1>Features</h1>
                    <h2> Company </h2>
                        <p>
                            Forward Growth is company that focuses on providing 
                            a service for educational applications to tutoring 
                            and early learning resources. This company was created 
                            to bridge the gap between financial literacy and youth. 
                            Our commitment is to better serve lower income families 
                            with the ability to learn about saving money.
                        </p>
                    <h2>Payment Methods</h2>
                        <p>
                            The payment method for this application is free to download 
                            but Orchard Grove comes with in-app purchases. 
                        </p>
                </div>
                <div className="bg-3 text-center">
                    <h1>About</h1>
                        <p>
                            Orchard will provide a service that will help the user 
                            complete daily goals to save money. Each goal will have 
                            a growth tree and every time you save up for the goal. 
                            The tree will create an animation of your progress on the 
                            goal. Daily friendly reminders to remember to save money. 
                            A list that will hold all your goal names, deadlines, and 
                            amounts. (It will act as a budget list for all your saving 
                            goals.) Every time you aim to save money towards your 
                            budgeting goals you can earn points each time you update it.
                             If you earn enough points, you can receive special badges 
                             for the user as an incentive for saving. It’s operated 
                             similarly to the mechanics of a video game.
                        </p>
                </div>
                <div className="bg-4 text-center">
                    <h1>Screenshots</h1>
                </div>
                <div className="bg-5 text-center">
                    <h1>Be in touch</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-ml">
                                <label>Name</label>
                                <input className="form-control form-control-sm" placeholder="Name" name="name" type="text"/>
                            </div>
                            <div className="form-group col-mr">
                                <label>Email</label>
                                <input className="form-control form-control-sm" placeholder="EMusk@hotmail.com" name="email" type="text"/>
                            </div>
                        </div>
                        <button className="mybutton" type="submit">Submit</button>
                    </form>
                </div>
        </div>
    );
}

export default Home;
