import "./App.css";
import React, { useState } from "react";
import Nav from "./Nav";
import Sea from "./Sea";
import Mountain from "./Mountain";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sea" component={Sea} />
          <Route path="/mountain" component={Mountain} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
