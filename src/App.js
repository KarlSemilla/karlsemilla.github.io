import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import NavBar from "./components/NavBar.js";
import Projects from "./components/Projects.js";
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar/>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
      </main>
    );
  }
}

export default App;
