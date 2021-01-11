import React, {Component} from "react";
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return (
            <div className="NavBar">
                <ul>
                    <li>Logo here?</li>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <li>Projects</li>
                    <li>Photography</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;