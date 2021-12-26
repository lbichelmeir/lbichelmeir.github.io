import React from 'react'
import '../App.css';
import WorkBlurb from '../components/WorkBlurb'
import { projects } from "../projects"
import Project from "../components/Project"

import ProjectsGrid from '../components/ProjectsGrid'
import ConnectTutors from './Projects/ConnectTutors'
import VocabMi from './Projects/VocabMi'
function WorkPage() {
    return (
        <div>
            {/* <h1> work</h1> */}
            <WorkBlurb/>
            <ProjectsGrid/>
            {/* <div className="ProjectsGrid">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} title={item.title} description={item.description}/>
                ))}
                
               
            </div> */}

        </div>
    )
}

export default WorkPage
