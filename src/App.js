import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Update from "./components/Update";
import ViewUser from "./components/ViewUser";



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/update/:id" component={Update} />
        <Route exact path="/users/:id" component={ViewUser} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
