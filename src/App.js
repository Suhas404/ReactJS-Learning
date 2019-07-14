import React from "react";
import logo from "./logo.svg";

import "./App.css";


import {Router, Route, browserHistory} from "react-router"
import SignUp from "./Components/SignupPage"
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/MainPage";
import ForgetPassword from "./Components/ForgetPassword";
import GamePage from "./Components/GamePage";




import InitialPage from "./Components/InitialPage"

function App() {
  return (
    <div className="App">
      <InitialPage />
    </div>
  );
}

export default App;
/* import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"LoginPage"} component = {LoginPage}/>
      </Router>
    )
  }
} */

//export default App
