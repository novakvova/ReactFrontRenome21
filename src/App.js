
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './components/auth/Login/LoginPage';
import Register from './components/auth/Register'
import Home from './components/Home'
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <Router>
       <Navbar />
       <div className="container"> 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
       </div>
      </Router>
    )
  }
}

export default App
