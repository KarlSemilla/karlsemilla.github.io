import React from "react";
import "./css/Home.css";
import myImage from "./assets/images/Karl.jpg";
import { Link } from "react-router-dom";

const descriptors = ['Mount Royal University Graduate', 'Web Developer', 'Programmer', 'Photographer'];

class Home extends React.Component {
  constructor(){
    super();
    this.state = {index: 0};
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let current = this.state.index;
      this.setState({index: current + 1});
    }, 10000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let description = descriptors[this.state.index % descriptors.length];
    return (
      <div className="main">
        <div className="headerBar">Place headerbar here</div>
        <div className="img"><img src={myImage} alt="A picture of me!" /></div>
        <p className="blurb">
          Hello, I am Karl Anthony Semilla!<br />
          I am a <span>{description}</span>.
          {/*Could add some different CSS animations in the 3rd line - Descriptors */}
          <br />
        </p>
      </div>
    );
  }
}

export default Home;
