import React from 'react'
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div className="about-div">
            
        <div className="about-grid">
            <div> {/* IMAGE */}
                <img src ="/images/ProfilePic.png" className="about-pic"/>
            </div>
            <div className="about-text"> {/* TEXT */}
                <div className="about-blurb">
                        <p>
                            This Winter, I’ll be in San Francisco for the <b><u><a href="https://design.northwestern.edu/programs/bay-area-immersion/"> Bay Area Immersion Program</a></u></b> . 
                            My cohort (a mixture of CS and Journalism students) and I will be taking 2 journalism classes,  
                            <i> Intro to Data Journalism</i> and <i>Visual Storytelling for the Web</i>, and 2 design classes: 
                            <i><b> UX Design</b></i> and <i><b>Bay Area Service Design</b></i>, where we will be partnering with a SF company!  
                            I’m so excited! 
                        </p>
                    </div>
                
                <div className="about-body">
                    <h3 className="about-header">🌻 hello, I'm Lauren Bichelmeir</h3>
                    <p>
                        I’m a sophomore at Northwestern studying Computer Science and Design (Segal Design Certificate) 
                        and pursuing a minor in Entrepreneurship. 
                    </p>

                    <h3 className="about-header">🎨 My Journey to UX Design</h3>
                    <p>
                        I have always been into art and being creative. Growing up, I was always doodling or painting. 
                        However, I then developed an interest in chemistry and physics, and decided I was going to study 
                        Materials Science. After my first year in college, I realized that this wasn’t for me and I was back 
                        to the drawing board. 
                    <br></br>
                    <br></br>
                        I ended up drawn to Computer Science because of how much creativity and innovation there is, 
                        whether it’s in designing or coding a new app, website, game, etc. I also was drawn to the 
                        endless opportunities in CS, within tech and in the intersection with tech. 
                        In particular, I’m interested in the intersection between design and technology, and so 
                        I landed upon <b>UX Design</b>, where I’ll be able to combine my interests in design and innovation!
                    </p>

                    <h3 className="about-header">🌿 What am I up to? </h3>
                    <p>
                        <ul>
                            <li>
                                On-campus, I’m a Peer Mentor for CS150 Fundamentals of Python, where I host office hours 
                                to help students with their assignments and their understanding of Python and basic data 
                                structure concepts
                            </li>
                            <li>
                                I’m a Product Design Volunteer @ Develop for Good (check out my <u><Link to="/ConnectTutor">DFG project) </Link></u>
                            </li>
                            <li>
                                I was working on my startup, <u><Link to="/VocabMi">VocabMi</Link></u>, through Propel (Fall 2021 Cohort), 
                                a mentorship program in The Garage, Northwestern’s startup incubator space.
                            </li>
                            <li>
                                I’m a volunteer at the Evanston Animal Shelter
                            </li>
                            <li>
                                I’m a member of Northwestern’s Ultimate Frisbee Team
                            </li>
                        </ul>
                    </p>

                    <h3 className="about-header">🦋 In my free time, you can find me…</h3>
                    <p>
                        <ul>
                            <li>🎨 Painting - with Gouache and Watercolor </li>
                            <li>📚 Reading  - I’m currently reading <i>The Design of Everyday Things</i></li>
                            <li>🎵 Playing the Ukulele - mastering <i>The Sound of Silence</i></li>
                            <li>🥏 Playing Frisbee - with a friend or at Ultimate Frisbee practice</li>
                            <li>📷 Scrapbooking - I can’t wait to create my SF travel journal!</li>
                            <li>👾 Coding - I created this portfolio in <a href="https://github.com/lbichelmeir/react-portfolio"><u>React</u></a></li>
                            <li>🇩🇪 Learning German - weil ich halb deutsch bin :) </li>
                        </ul>
                    </p>

                </div>

            </div>
        </div>
        </div>
        
    )
}

export default AboutPage
