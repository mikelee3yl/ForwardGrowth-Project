import React, { useState } from "react"
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About.js"
import Blog from "./views/Blog/Blog.js"
import Login from "./views/Login/Login.js"
import Header from "./components/Header/Header"
import AdminDashboard from './views/AdminDashboard/AdminDashboard';
import NotFound from "./views/NotFound"
import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';

import { BrowserRouter as Router, Link } from "react-router-dom";

const App = () => {
    //const [authority, setAuthority] = useState();

    //const setAuth = (data) => {
    //    localStorage.setItem("tokens", JSON.stringify(data));
    //    setAuthTokens(data);
    //}
    //value  = {.....} right now value = true so the admin page is still accessible 
    return (
        <div>
            
            <AuthContext.Provider value={true }>
            

                <Header />

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/"><Redirect to="/home" /></Route>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/admin" component={AdminDashboard} />
                    <Route component={NotFound} />
                </Switch>
            </AuthContext.Provider>

            </div>
    );
}
export default App;
