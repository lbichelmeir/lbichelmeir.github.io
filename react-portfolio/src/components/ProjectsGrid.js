import React from 'react'
import { projects } from "../projects"
import Project from "../components/Project"
import '../App.css';

function ProjectsGrid() {
    return (
        <div className="ProjectsGrid">
            {projects.map((item) => (
                    <Project key={item.id} img={item.image} title={item.title} description={item.description} link={item.link}/>
                ))}
            
        </div>
    )
}

export default ProjectsGrid
