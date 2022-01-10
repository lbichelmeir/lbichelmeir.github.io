import React from 'react'

function KP2021() {
    return (
        <div className="case-study">
            <div className="case-study-image-div">
                {/* <img src ="/images/projects/ConnectTutor/ConnectTutorsTitle2.svg" className="case-study-image" /> */}
                {/* <img src ="/images/projects/VocabMi/VocabMiProjectTile.png" className="case-study-image" /> */}
                <img src ="/images/projects/Coursera/CourseraHeader.png" className="case-study-image" />
                {/* /images/projects/VocabMi/VocabMiProjectTile.png */}
                </div>
            <div className="project-overview">
                <div>
                    <h1 className="title">Coursera Case Study</h1>
                    <p className="description"> 
                    
                    For the Kleiner Perkins 2021 Design Fellows application, I was tasked with “redesigning a feature of a Kleiner Perkins company’s product.”
                    <br></br>
                    <br></br>
                    I chose to redesign Coursera because it was a product that I was already familiar with, as I have used Coursera before.
                    
 
                    </p>
                </div>
                <div>
                    <p className="details">
                        {/* <b>ROLE:</b> UX Designer <br></br> */}
                        <b>TYPE:</b> Design Challenge (Kleiner Perkins 2021 Application) <br></br>
                        <b>TIMELINE:</b> 3 days <br></br>
                        <b>TOOLS:</b> Figma <br></br>
                        <b>TEAM:</b> Myself <br></br>
                        
                    </p>

                </div>
            </div>

            <div className="green-subheader">
                <p> 01. OVERVIEW</p>
            </div>

            <div className="case-study-body">
            <h3 className="header">Coursera</h3>
                <p> 
                    Coursera is a MOOC, which stands for Massive Open Online Course. 
                <br></br>
                <br></br>
                    I focused on redesigning Coursera’s mobile application because 
                    I was able to find more reviews for the mobile app through the Apple App Store 
                    and there seemed to be a lot more complaints with the mobile app.
                </p>
                <br></br>
                <p>
                    There seemed to be a general consensus that the mobile app was worse than the web application
                <br></br>
                    As some users have said / complained: 
                </p>
                <div className="graphic-div">
                <img src ="/images/projects/Coursera/Reviews/Unusable.png" className="graphic"/>
                </div>

            <h3 className="header">Current User Flow</h3>
            
            <div className="graphic-div">
                {/* CURRENT USER FLOW IMAGE */}
                <img src ="/images/projects/Coursera/UserFlow.PNG" className="graphic"/>
            </div>

            <h3 className="header">Problem</h3>
            <p>
                As a user of Coursera, one of the biggest issues I had was the inability to save 
                courses or add them to any sort of list, like a Wishlist. I remember when my 
                friend and I were exploring Coursera courses, we had to keep a Google Doc 
                to keep track of all the courses we were interested in since 
                a) there were so many courses for all of our varied interests and 
                b) because there was no option to save courses. 

            </p>
        

            <div className="green-subheader">
                <p> 02. RESEARCH</p>
            </div>

            <h3 className="header">User Research</h3>
                <p> 
                    I asked some friends and looked into reviews from the App Store to find out if other users 
                    had the same issue as me and to see what other problems and pain 
                    points they had. I focused on pain points related to the design/UI 
                    as other common issues, such as sync problems between mobile 
                    and desktop, or problems with cancelling subscription, were out of 
                    my control with a redesign.  
                </p>
                {/* <br></br>
                <br></br>
                    In general, there was a general consensus that the mobile app was worse
                     than the web application: 
                </p>
                <div className="graphic-div">
                    <img src ="/images/projects/Coursera/Reviews/Unusable.png" className="graphic"/>
                </div> */}

            <h3 className="header">Synthesizing Findings</h3>
            <p>
            After grouping common pain points, I found that the main problems that users had were: 
            <ul>
                <li>The inability to saved courses</li>
                <li> No easy way to pick up exactly where you left off
                    <ul><li>No easy access to last played videos (or at the specific stop times) or latest assignments</li> </ul>
                </li>  
                <li>Inability to have/change interests</li>
            </ul>
            </p>

            <div className="graphic-div">
                {/* CURRENT USER FLOW IMAGE */}
                <img src ="/images/projects/Coursera/Reviews/Reviews3.png" className="graphic"/>
            </div>
            

            <h3 className="header">User Persona</h3>
                <p>After reading the app reviews and Coursera blogs to understand Coursera’s users, I developed 2 user personas: </p>
                <div className="graphic-div">
                {/* USER PERSONAS  */}
                <img src ="/images/projects/Coursera/Persona.png" className="graphic"/>
                </div>
            
            <h3 className="header">Competitive Analysis</h3>
                <p>
                I did a competitive analysis of other MOOC mobile app platforms to compare Coursera 
                with and get inspiration from. I explored LinkedIn Learning, Udemy Khan Academy and 
                Skillshare (I wasn’t able to fully explore Skillshare as it requires a subscription). 
                I was most familiar with LinkedIn Learning as my university offers a free subscription.  
                I also wanted to explore edX since that was the most similar platform, but the app wouldn’t work for me. 
                </p>
                

                <div className="graphic-div">
                {/*    COMPETITIVE ANALYSIS  */}
                <img src ="/images/projects/Coursera/CompetitiveAnalysis.jpeg" className="graphic"/>
                </div>
                {/* <br></br> */}
                <p>
                All competitors offer some sort of way to bookmark/save courses - no wonder I 
                and many other users felt the lack of this option in Coursera to be jarring to my experience! 
                LinkedIn also lets you choose interests in your profile. Skillshare has the option 
                to create lists of your saved courses. 

                </p>
            <div className="green-subheader">
                <p> 03. IDEATION</p>
            </div>

            <h3 className="header">Design Opportunities</h3>
                <p>
                    I noticed that the Profile Tab seems to be underused 
                    (since I don’t have any certificates to fill it with) and decided 
                    to use this space for the saved courses.
                </p>
            
            <h3 className="header">Defining the Redesign</h3>
                <p>
                    I will be adding the following features:
                    <ul>
                        <li> All Saved Courses Feature - save courses</li>
                        <li>My Lists Feature - add saved courses to lists</li>
                        <li>Bookmarking Feature - bookmark courses and save them </li>
                        <li>Interests Feature - have interests</li>
                        <li>Latest Course Progress Feature - easily pick up where you left off</li>
                    </ul>
                </p>

            <h3 className="header">Paper Prototype</h3>
                <p>
                I roughly sketched out an initial paper prototype to have an idea of 
                where all the new features would go. 
                </p>
                <div className="graphic-div">
                {/* PAPER PROTOTYPE */}
                <img src ="/images/projects/Coursera/Paper.png" className="graphic"/>
                </div>
            
            <div className="green-subheader">
                <p> 04. SOLUTION</p>
            </div>

            <h3 className="header-center">The Redesign Features</h3>
            <br></br>
            <br></br>
            {/* ADD FLOWS */}
            <div className="flow-div">
                <div className="flow-div-text">
                    <p>
                        <b>All Saved Courses</b> <br></br>
                        Users are now able to save courses. 
                        Their saved courses can be viewed from their Profile
                    </p>
                </div>
                <div className="flow-div-image">
                    <img src ="/images/projects/Coursera/AllCourses.gif" className="graphic"/>
                </div>
            </div>

            <br></br>
            <div className="flow-div">
                <div className="flow-div-text">
                    <p>
                        <b>My Lists</b> <br></br>
                        There are so many courses that one could save, so the list 
                        feature enables the user to organize their courses any way 
                        they want: by topic, by due date, by purpose, by how they 
                        want to learn, etc. This was a feature inspired from <a href="https://www.skillshare.com/blog/4-great-ways-to-use-our-new-lists-feature/ "><u>SkillShare </u></a>
                    </p>
                </div>
                <div className="flow-div-image">
                    <img src ="/images/projects/Coursera/MyLists.gif" className="graphic"/>
                </div>
            </div>

            <br></br>
            <div className="flow-div">
                <div className="flow-div-text">
                    <p>
                        <b>Bookmarking</b> <br></br>
                        Save a course with the bookmark. All saved courses can be viewed in All Saved Courses. 
                        The user also has the option to save that particular course to a list - 
                        either an existing list or create a new list.
                    </p>
                </div>
                <div className="flow-div-image">
                    <img src ="/images/projects/Coursera/Bookmarking.gif" className="graphic"/>
                </div>
            </div>
            <br></br>

            <div className="flow-div">
                <div className="flow-div-text">
                    <p>
                        <b>Interests</b> <br></br>
                        Users are able to add their interests, resulting in a more tailored 
                        experience when exploring courses. This was a feature inspired from 
                        LinkedIn Learning.
                    </p>
                </div>
                <div className="flow-div-image">
                    <img src ="/images/projects/Coursera/Profile.gif" className="graphic"/>
                </div>
            </div>
            
            <br></br>
            <div className="flow-div">
                <div className="flow-div-text">
                    <p>
                        <b>View Course Progress</b> <br></br>
                        The user is now able to easily view their latest progress in the course. 
                        Clicking on the course leads to their last watched video (at that timestamp) 
                        or their latest assignment.  
                    </p>
                </div>
                <div className="flow-div-image">
                    <img src ="/images/projects/Coursera/CourseProgress.gif" className="graphic"/>
                </div>
            </div>

            <h3 className="header-center">Final Prototype</h3>
            <div className="final-prototype">
                    <img src ="/images/projects/Coursera/FinalPrototype.gif" className="graphic"/>
            </div>

                
                





            <div className="green-subheader">
                <p> 05. REFLECTION</p>
            </div>
            <h3 className="header">Next Steps</h3>
            <p>
            <ul>
            <li><b>Usability testing </b>- conduct usability testing to see if my new features are intuitive to use</li>
            {/* <br></br> */}
            {/* <br></br> */}
            <li><b>More User Research</b> - interview Coursera users to gain a better understanding of their experience</li>
            </ul>
            </p>

            <h3 className="header">What I Learned</h3>
            <p>
                When deciding what company to redesign, it was a lot easier for me 
                to approach products that I have used because being a user myself 
                enabled me to better relate and empathize with the users.  
            </p>
            <br></br>
            <p>
                It was also a new experience to redesign for an existing product/company 
                and to make sure that my design and experience would be cohesive and 
                intuitive with the existing app that Coursera has. It was an exciting 
                challenge to design within Coursera's existing design and user flow! 

            </p>
            
            </div>
        </div>
    )
}

export default KP2021
