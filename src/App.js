
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
       
        <Switch>
          <Route exact path="/"> <Products key="general"pageSize={5} country ="in" category="general"/> </Route>
          <Route exact path="/business"> <Products key="business" pageSize={5} country ="in" category="business"/> </Route>
          <Route exact path="/entertainment"> <Products key ="entertainment"pageSize={5} country ="in" category="entertainment"/> </Route>
          
          <Route exact path="/health"> <Products  key ="health" pageSize={5} country ="in" category="health"/> </Route>
          <Route exact path="/science"> <Products  key ="science" pageSize={5} country ="in" category="science"/> </Route>
          <Route exact path="/sports"> <Products  key ="sports" pageSize={5} country ="in" category="sports"/> </Route>
          <Route exact path="/technology"> <Products  key ="technology" pageSize={5} country ="in" category="technology"/> </Route>
         
          
        </Switch>
        </Router>
      </div>
    )
  }
}

