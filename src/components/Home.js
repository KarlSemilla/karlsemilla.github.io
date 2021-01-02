import React from "react";
import "./css/Home.css";
import myImage from "./assets/images/Karl.jpg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="headerBar">Place headerbar here</div>
        <div className="img"><img src={myImage} alt="A picture of me!" /></div>
        <p className="blurb">
          Hello, I am Karl Anthony Semilla! <br />
          Mount Royal University Graduate
          {/*Could add some different CSS animations in the 3rd line - Descriptors */}
          <br />
          Experience with object-oriented programming in Java.
        </p>
      </div>
    );
  }
}

export default Home;
