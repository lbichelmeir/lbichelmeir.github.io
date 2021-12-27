import React from 'react'
// import {WebsiteAnalysis} from '/images/projects/ConnectTutor/WebsiteAnalysis.svg'
// import '../App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
function ConnectTutors() {
    return (
        <div className="case-study">
            <div className="case-study-image-div">
                {/* <img src ="/images/projects/ConnectTutor/ConnectTutorsTitle2.svg" className="case-study-image" /> */}
                {/* <img src ="/images/projects/ConnectTutor/ConnectTutorsProjectTile.png" className="case-study-image" /> */}
                <img src ="/images/projects/ConnectTutor/ConnectTutorsHeader.png" className="case-study-image" />


                </div>
            <div className="project-overview">
                <div>
                    <h1 className="title">Connect Tutors</h1>
                    <p className="description"> 
                        Connect Tutors is a non-profit organization that supports equitable access 
                        to free and remote application essay tutoring for college application essays. 
                    </p>
                </div>
                <div>
                    <p className="details">
                        <b>ROLE:</b> UX Designer <br></br>
                        <b>TIMELINE:</b> 10 weeks, summer 2021 <br></br>
                        <b>TOOLS:</b> Figma, Wix <br></br>
                        <b>TEAM:</b> Katrina (PM), Bryan, Kelly, Audrey, Aditya & Lauren <br></br>
                        <b>CLIENT:</b> Connect Tutors (through Develop for Good)
                    </p>

                </div>
            </div>

            <div className="subheader">
                <p> 01. OVERVIEW</p>
            </div>

            <div className="case-study-body">
                <h3 className="header">Goal</h3>
                <p>
                    Our task was to redesign the Connect Tutors website to make the website more ‘user-friendly’ 
                    and easier to navigate. Through our redesign, we aimed to accomplish the following goals: 
                </p>
                <ol>
                    <li> Increase in student registrations </li>
                    <li> Increase in tutor applications & ease of access to new-tutor training materials </li>
                    <li> Designate part of the website to accept monetary donations</li>
                </ol>

                <h3 className="header">Process Overview</h3>
                <p>We followed a user-centered design approach. View the updated website at <a href="https://www.connecttutors.org"> <b> connecttutors.org </b> </a></p>
                <p>In short, we...</p>
                <ul>
                    <li>Defined the problem</li>
                    <li>Conducted user research & interviews</li>
                    <li>Synthesized findings through affinity maps & user personas</li>
                    <li>Created paper prototypes, wireframes, and high-fidelity mockups</li>
                    <li>Conducted user testing</li>
                    <li>Developed the MVP</li>                
                </ul>

                <div className="subheader">
                    <p> 02. RESEARCH</p>
                </div>

                <h3 className="header">Background Research</h3>
                <p>
                    We started by analyzing the current website. We also analyzed the websites that 
                    Connect Tutors provided for inspiration to see what worked for their design. 
                </p>
                <div className="graphic-div">
                <img src ="/images/projects/ConnectTutor/WebsiteAnalysis.svg" className="graphic"/>
                </div>

                <h3 className="header">Competitive Analysis</h3>
                <p>
                    We also looked at other similar nonprofits and their website design 
                    to do a competitive analysis to help inform our redesign, such as possible features to include. 
                </p>

                <div className="graphic-div">
                <img src ="/images/projects/ConnectTutor/CompetitiveAnalysis.svg" className="graphic"/>
                </div>

                <h3 className="header">User Interviews</h3>
                <p>
                We conducted user interviews of Connect Tutor’s target audience: high school students 
                beginning their college applications and parents of high school students. 
                Our key findings were: 
                </p>
                <div className="interviews-div">
                <img src ="/images/projects/ConnectTutor/StudentInterviews.svg" className="graphic, interview"/>
                <img src ="/images/projects/ConnectTutor/ParentInterviews.svg" className="graphic, interview"/>
                </div>
                

                <h3 className="header">User Personas & User Journey</h3>
                <p>After identifying the key insights from our user interviews and empathy mapping, 
                    we created 3 user personas and user journeys. 
                </p>

                <div className="personas-div">
                <img src ="/images/projects/ConnectTutor/Semi-informedStudent.svg" className="persona"/>
                <img src ="/images/projects/ConnectTutor/UninformedStudent.svg" className="persona"/>
                <img src ="/images/projects/ConnectTutor/Parent.svg" className="persona"/>
                <img src ="/images/projects/ConnectTutor/UserJourney.svg" className="graphic"/>
                </div>

                {/* <div className="graphic-div">
                <img src ="/images/projects/ConnectTutor/UserJourney.svg" className="graphic"/>
                </div> */}

                {/* <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src ="/images/projects/ConnectTutor/Semi-informedStudent.svg" className="sliderimg"/>
                    <img src ="/images/projects/ConnectTutor/UninformedStudent.svg" className="sliderimg"/>
                    <img src ="/images/projects/ConnectTutor/Parent.svg" className="sliderimg"/>
                </AliceCarousel> */}

                {/* USER PERSONAS GRAPHIC
                USER JOURNEY GRAPHIC */}

                <div className="subheader">
                    <p> 03. IDEATION</p>
                </div>

                <h3 className="header">Paper Prototype & Information Architecture</h3>
                <p>
                    We each created our own paper prototypes to communicate our vision. 
                    We then brainstormed the information architecture to help inform how the information would be 
                    laid out. Finally, we synthesized our designs to create low-fidelity wireframes. 
                </p>

                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/PaperPrototype.png" className="graphic"/>
                <img src ="/images/projects/ConnectTutor/Architecture.png" className="graphic"/>
                </div>

                <div className="subheader"> 
                    <p> 04. PROTOTYPING</p>
                </div>
                <h3 className="header"> Wireframes & Usability Testing </h3>
                <p> Through usability testing and meetings with the client, we continued to refine our wireframe
                    and develop our style guide. </p>

                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/LowFi.svg" className="graphic"/>
                <img src ="/images/projects/ConnectTutor/HighFi.svg" className="graphic"/>
                </div>

                {/* <p><b>Style Guide</b></p> */}
                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/StyleGuide.png" className="graphic"/>
                </div>


                <div className="subheader"> 
                    <p> 05. SOLUTION</p>
                </div>
                <h3 className="header"> Our Solution </h3>
                <p> 
                    We redesigned the website to make it more user-friendly and easier to navigate based on usability 
                    testing and feedback from the client. Through this redesign, we achieved our goals. 
                </p> 
                <br></br>
                <p><b>Primary Goal: Increase in Student Registration</b></p>
                <p>To achieve our primary goal, we did this in 2 ways:</p>

                <br></br>
                <p> <b> 1. Provide Access </b></p>
                <p> We incorporated multiple points of access to the student registration form, including the following: </p>
                <ul>
                    <li>Primary Call-To-Action Button </li>
                    <li>Navigation Bar</li>
                    <li>Footer</li>
                </ul>

                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/Access.png" className="graphic"/>
                </div>

                <p> <b> 2. Establish Trust </b></p>
                <p> We included multiple sections on the website to provide both students and parents with reasons for the nonprofit’s credibility. 
                    This includes the following sections: 
                </p>
                <ul>
                    <li>Home {'>'} Testimonials</li>
                    <li>About {'>'} What We Do</li>
                    <li>About {'>'} FAQ</li>
                    <li>About {'>'} Our Values</li>
                    <li>About {'>'} The Team</li>
                    <li>Contact</li>
                </ul>

                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/EstablishTrust.png" className="graphic"/>
                </div>

                <p><b>Secondary Goal: Increase in Tutor Apps {'&'} Ease of Access to Training Materials</b></p>
                <p>To increase tutor applications, we did this in 2 ways: </p>
                <br></br>
                <p> <b> 1. Provide Access to Application </b></p>
                <p>We incorporated the tutor application within the website in Get Involved {'>'} Become a Tutor.</p>
                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/TutorAccess.png" className="graphic"/>
                </div>
                

                <p> <b> 2. Limited Access to Materials </b></p>
                <p>We created a password-protected page where all materials would be stored for reference.</p>
                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/LimitedAccess.png" className="graphic"/>
                </div>

                <p><b>Extra Goal: Increase Monetary Donations</b></p>
                <p>To increase monetary donations, we did this in 2 ways:</p>
                <br></br>
                <p> <b> 1. Provide Access to Page </b></p>
                <p> 
                    We created a designated ‘Donate’ page, accessible through the navigation bar.
                </p>
                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/DonateAccess.png" className="graphic"/>
                </div>
                <p> <b> 2. Proof of Impact </b></p>
                <p> 
                To show that donations are not only needed, but also impactful, we associated dollar amounts to numeric outcomes. 
                For example, a $25 donation supports 1 student.
                </p>
                <div className="graphic-div">   
                <img src ="/images/projects/ConnectTutor/ImpactProof.png" className="graphic"/>
                </div>
               
                
                <div className="subheader">
                <p> 06. INSIGHTS</p>
                </div>
                <h3 className="header"> What I Learned </h3>
                <p> 
                    This was my first team working as a UX designer on a project, and also my first time working in 
                    just a team of UX designers! Through this experience, I learnt how to go through the entire UX 
                    design process from start to finish and I learnt so much from my team members and their prior 
                    design experiences! 
                </p>
                <p>
                    This experience also taught me about how to communicate with a client and how to take feedback. 
                    As a designer, it was hard for me to separate myself from the design, so this experience taught me 
                    how to take feedback from the client not as a criticism of me and my vision, but as constructive 
                    feedback that will help serve our end goal of helping the client. 
                </p>

            


            </div>
        </div>
    )
}

export default ConnectTutors
