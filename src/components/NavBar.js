import React, {Component} from "react";
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return (
            <div className="navBar">
                <ul>
                    <li>Logo here?</li>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>
                    <li>Photography</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;