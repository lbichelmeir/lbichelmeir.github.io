import React from 'react'
import '../App.css';

function WorkBlurb() {
    return (
        <div className="WorkBlurb">
            <div className="WorkBlurbText">
                <div className="WorkBlurbText-text">
            <p>Hi 🌻 I’m Lauren! Aspiring Product Designer </p>
            <span>check out some of my </span> <span className="WorkBlurbText-work"><b>work </b>⚡</span>
            <br></br>
            </div>
            {/* <p> check out some of my work ⚡ </p> */}
            <button className="EmailButton">Email</button> <button className="ResumeButton">Resume</button>
            {/* <a href="mailto:l.bichelmeir@gmail.com" className="EmailButton">Email</a> <button className="ResumeButton">Resume</button> */}
            {/* </p> */}
            </div>
        </div>
    )
}

export default WorkBlurb
