import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

function Project({img,title, description, link}) {
    return (
        <Link to={link}> 
        <div className="Project">
            {/* <img src={require(img).default} alt="" width="100" height="50"/> */}
           <div>
                <img src={img}/>
            </div>
            <div className="project-details">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
           
        </div>
        </Link>
    )
}

export default Project
