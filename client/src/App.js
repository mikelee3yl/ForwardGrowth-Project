import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About.js"
import Blog from "./views/Blog/Blog.js"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Blog" component={Blog}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
