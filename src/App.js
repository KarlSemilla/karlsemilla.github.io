import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import NavBar from "./components/NavBar.js";
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar/>
        <Route path="/" exact component={Home} />
        <Route path='/about' exact component={About}/>
      </main>
    );
  }
}

export default App;
