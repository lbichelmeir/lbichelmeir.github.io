import React from 'react'
// PURPLE: #E4DBE9
function DTC() {
    return (
        <div className="case-study">
            <div className="case-study-image-div">
                <img src ="/images/projects/DTC/DTCHeader.png" className="case-study-image" />
                
                </div>
            <div className="project-overview">
                <div>
                    <h1 className="title">DTC - Self-Feeding Mockup</h1>
                    <p className="description"> 
                    For my Design, Thinking and Communication class, we were tasked with designing a self-feeding mockup
                    for a client with quadriplegia at the Shirley Ryan Ability Lab. I worked in a team of three and 
                     led the writing of our final report. The full report and our process can be found  
                     <a href="https://sites.google.com/u.northwestern.edu/dtc-section-14-group-3-winter-/executive-summary?authuser=0" target="_blank" style={{color: "#7574BD"}}> <b><u>here</u></b></a>
                    <br></br>
                    <br></br>
                    <i>Below is the <u>Executive Summary</u></i>
                    </p>
                </div>
                <div>
                    <p className="details">
                        {/* <b>ROLE:</b> UX Designer <br></br> */}
                        <b>CLIENT:</b> Shirley Ryan Ability Lab <br></br>
                        <b>TIMELINE:</b> Winter Quarter 2020 <br></br>
                        {/* <b>TOOLS:</b> Figma <br></br> */}
                        <b>TEAM:</b> Jeffrey Blibo, Lauren Bichelmeir, Maya Feuilladieu <br></br>
                        <b>TYPE:</b> Class Project | Service Design <br></br>
                        
                    </p>

                </div>
            </div>

            <div className="purple-subheader">
                <p> OVERVIEW</p>
            </div>

            <div className="case-study-body">
            <h3 className="header">Problem</h3>
                <p>  
                    Lenny is a fifteen-year-old boy with quadriplegia. Due to his quadriplegia, 
                    Lenny does not have motor control below his neck which limits his ability to feed himself 
                    independently. Lenny, his family, and his occupational therapist want him to be able to 
                    eat more independently, so they asked students in the Design, Thinking and Communication program 
                    to design a device that will help Lenny feed himself while maintaining the social aspect of eating.

                </p>
            <h3 className="header">Purpose and Scope</h3>
            <p>
                Our objective was to design a simple device that would enable our user, 
                a 15-year-old with quadriplegia, to eat independently without assistance from his family and friends. 
                The design must be easy to use, safe, portable, adjustable, wheel-chair friendly, avoid spills and 
                messes and be customizable. Our group decided to construct a device that would improve on Lenny’s 
                current mouthstick solution.

            </p>

            {/* <div className="subheader">
                <p> 02. RESEARCH</p>
            </div> */}

            <h3 className="header">Methodology</h3>
                <p> 
                    Our final design was decided upon through our client interview, user observation, 
                    proxy-user testing, performance testing, feedback from shop experts and the design review. 
                    After the client interview and user observation, we brainstormed a bent mouthstick mockup 
                    that seemed feasible based on inspiration from Lenny’s current mouthstick and other 
                    current solutions. After feedback from the design review and speaking to shop experts 
                    regarding the components of our design, our team came up with the final design for the 
                    Angled Mouthstick.
                </p>

            <h3 className="header">Our Solution</h3>
                <p>
                    Our design consists of two components: <i>The Angled Mouthstick</i> and the <i>Elevating Stand</i>. 
                    Working in tandem, this is a feeding device that allows Lenny to easily pick up the food 
                    he wanted to eat and transport it to his mouth. He first picks up the mouth stick then scoops
                     up the food and places the mouthstick on the elevated stand. After, the stand rotates and 
                     raises up to the level of his mouth. He then can reach the food and eat it. 
                </p>

            
            {/* COMPETITIVE ANALYSIS GRAPHIC */}
            <div className="graphic-div">
                {/* USER INTERVIEW FINDINGS */}
                <img src ="/images/projects/DTC/MouthstickOverview.png" className="graphic"/>
                <img src ="/images/projects/DTC/MouthstickImg.png" className="graphic"/>
                
            </div>

            




            </div>
        </div>

    )
}

export default DTC
