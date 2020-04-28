/*App.js*/
import React, { Component } from "react";
import Home from "./Pages/Home"
import Home2 from "./Pages/Home2"
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter,
  Route,
  Switch,
  IndexRoute,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/english" component={Home2} />
        <Route path="*" component={Home} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;