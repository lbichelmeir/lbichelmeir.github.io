import React from 'react'
import '../App.css';
function Project({img,title, description}) {
    return (
        <div className="Project">
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Project
