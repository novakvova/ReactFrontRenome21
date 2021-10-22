
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
import UsersPage from './components/Users';



class App extends Component {
  render() {
    return (
      <>
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
            <Route exact path="/users">
              <UsersPage />
            </Route>
          </Switch>
       </div>
       </>
    )
  }
}

export default App
