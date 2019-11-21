import React from 'react';
import './Home.css'
import app from '../../assets/AppStore.svg';
import og from '../../assets/OrchardGrove(1).png';
import demo from '../../assets/ForwardGrowthDemo.png';
import demo1 from '../../assets/ForwardGrowthDemo-1.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//Home Page: Sofia & Mark
//Mark: HTML
//Sofia: Boostrap and CSS

//npm install react-slick --save
//npm install slick-carousel

function Home() {

    const getUser = (_name,_email) => {
        
    };

    return (
        <div className="App">

            <h1>Home Page</h1> 
            <h2 class="font_2">
                <span class="color_11">
                    Backpack Adventurers
                </span>
            </h2>
            {/* <p className="font_7">
            A gaming app that will teach about the fundamentals of budgeting and traveling
            </p> */}
                <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
                autoplay={true}
                autoplaySpeed={3000}
                cssEase={"linear"}
                >
                    <div>
                        <img className="graphics" src={demo} alt="Backpack Adventures Gaming App"></img>
                    </div>
                    <div>
                        <img className="graphics" src={demo1} alt="Backpack Adventures Gaming App"></img>
                    </div>
                </Slider>
                <div className="container-fluid bg-1 text-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/temple-run/id420009108?mt=8">
                        <img src ={app} width={'180 px'} height={'150 px'} alt = "App Store"></img>
                    </a>
                </div>
                <div className="container-fluid bg-6 text-center">
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
                <div className="container-fluid bg-6 text-center">
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
                <div className="container-fluid bg-6 text-center">
                    <h1>Be in touch</h1>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-ml">
                                <input className="form-control form-control-sm" placeholder="Name" name="name" type="text"/>
                            </div>
                            <div className="form-group col-mr">
                                <input className="form-control form-control-sm" placeholder="EMusk@hotmail.com" name="email" type="text"/>
                            </div>
                        </div>
                        <br></br>
                        <button className="mybutton" type="submit">Submit</button>
                    </form>
                </div>
        </div>
    );
}

export default Home;
