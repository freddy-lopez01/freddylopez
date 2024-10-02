import React from "react";
import "./Projects.css";
import ProjectGrid from './ProjectGrid';
import MachineLearning from './MachineLearning'
import WebApp from './WebApp'

function Projects () {
    return (
        <>
            <div className="projects-main">
              <MachineLearning/>
              <WebApp/>
        
            </div>
        </>
    )
}

export default Projects;
