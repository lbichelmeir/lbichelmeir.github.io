import React from 'react'
import { projects } from "../projects"
import Project from "../components/Project"
import '../App.css';

function ProjectsGrid() {
    return (
        <div className="ProjectsGrid">
            {projects.map((item) => (
                    <Project key={item.id} img={item.img} title={item.title} description={item.description}/>
                ))}
            
        </div>
    )
}

export default ProjectsGrid
