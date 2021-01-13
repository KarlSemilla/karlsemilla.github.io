import React, {Component} from "react";

class Projects extends Component {

    render(){
        return(
            <div>
                <h1>Projects</h1>
                <div className="projectContainer">
                    <div className="project">
                        <h2 className="projectTitle">Discord Bot</h2>
                        <div className="projectImg">Project Image</div>
                        <div className="projectDesc">A Discord bot created with JavaScript + Node.js, using the Discord.js framework. This bot assists 
                            with assigning users with roles.</div>
                        <a href="https://github.com/KarlSemilla/Discord-Bot-WIP">Link</a>
                    </div>
                    <div className="project">
                        <h2 className="projectTitle">Project Title</h2>
                        <div className="projectImg">Project Image</div>
                        <div className="projectDesc">Description</div>
                        <a href="https://github.com/KarlSemilla/">Link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;