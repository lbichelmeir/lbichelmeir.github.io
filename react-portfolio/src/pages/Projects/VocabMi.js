import React from 'react'
// COLOR: #E7EDFD
function VocabMi() {
    return (
        <div className="case-study">
            <div className="case-study-image-div">
                {/* <img src ="/images/projects/ConnectTutor/ConnectTutorsTitle2.svg" className="case-study-image" /> */}
                {/* <img src ="/images/projects/VocabMi/VocabMiProjectTile.png" className="case-study-image" /> */}
                <img src ="/images/projects/VocabMi/VocabMiHeader.png" className="case-study-image" />
                {/* /images/projects/VocabMi/VocabMiProjectTile.png */}
                </div>
            <div className="project-overview">
                <div>
                    <h1 className="title">VocabMi - In Progress</h1>
                    <p className="description"> 
                    <i><b>save your vocab with VocabMi </b></i>
                    <br></br>
                    VocabMi is a vocabulary building and retaining app for language learners. Let’s save your vocabulary one search at a time!
                    <br></br>
                    <br></br>
                    This project was initially started as a 1 week passion project but I’m now pursuing this as a potential startup idea through Propel (Fall 2021 Cohort), a mentorship program in The Garage, Northwestern’s startup incubator space. 
 
                    </p>
                </div>
                <div>
                    <p className="details">
                        {/* <b>ROLE:</b> UX Designer <br></br> */}
                        <b>TIMELINE:</b> Fall 2021 - <br></br>
                        {/* <b>TOOLS:</b> Figma <br></br> */}
                        <b>TEAM:</b> Myself <br></br>
                        <b>TYPE:</b> Passion Project {'&'} Potential Startup Idea <br></br>
                        {/* <b>CLIENT:</b> Connect Tutors (through Develop for Good) */}
                    </p>

                </div>
            </div>

            <div className="blue-subheader">
                <p> 01. OVERVIEW</p>
            </div>

            <div className="case-study-body">
            <h3 className="header">Problem</h3>
                <p> 
                In 2020, I took a gap year to focus on learning German intensively. 
                I began to realize that the biggest problem that my classmates and I 
                faced with language learning was vocabulary: being able to build and then 
                retain our vocabulary.
                <br></br>
                <br></br>
                As one progresses in their language learning journey and advances from 
                learning grammar, a lot of the learning comes from reading and listening 
                comprehension - where one encounters so many new vocabulary words with 
                each story/reading. I could learn around 100 new words from each story! 
                A lot of readings were on specific topics, with specific vocabulary to learn. 
                There seemed to be no easy way to keep track of all this vocabulary! I noticed 
                that I wasn’t the only one facing this problem. My friends and I frequently had 
                rant sessions complaining about the difficulties of learning German vocabulary! 
                After a few too many rant sessions, I realized this was an actual issue that 
                could be affecting not only me, but a lot of other language learners. 
                To take this to the next step,. I wanted to see if other people (classmates 
                from the German course and at Northwestern) faced this problem too. 


                </p>
            <h3 className="header">Solution</h3>
            <p>
                My solution is to create a tool that will help intermediate language learners retain their vocabulary and actively review it.
            </p>

            <div className="blue-subheader">
                <p> 02. RESEARCH</p>
            </div>

            <h3 className="header">User Research</h3>
                <p> To see if other people had the same problem as me, I interviewed 
                    individuals who were also passionate about learning a foreign 
                    language to understand their problems and pain points when learning a 
                    language. In total, I interviewed 27 people and synthesized my key 
                    findings: 
                </p>
            <div className="graphic-div">
                {/* USER INTERVIEW FINDINGS */}
                {/* <img src ="/images/projects/ConnectTutor/WebsiteAnalysis.svg" className="graphic"/> */}
            </div>

            <h3 className="header">Competitive Analysis</h3>
                <p>I did a competitive analysis of current solutions that I and/or the interviewees used or mentioned throughout their language learning journey. </p>
                <br></br>
                <p> From my personal experience (which was shared by a majority of the users), 
                I have tried several methods to solve this problem, ranging from keeping a long 
                cluttered Apple Notes list of every word I didn’t know (which, let’s be realistic, 
                would still be longer than what I already have because it's a hassle to record words 
                when you're in a rush), a Google Sheets spreadsheet, or Anki decks. All of these 
                solutions only solve <u> part of the problem</u>. 
                </p>
            
            {/* COMPETITIVE ANALYSIS GRAPHIC */}

            <div className="blue-subheader">
                <p> 03. IDEATION</p>
            </div>

            <h3 className="header">Defining the MVP</h3>
            <p>
                From the key findings from the user interviews and the competitive analysis, I identified the 
                main features that the MVP would have to have. 
            </p>
            <br></br>
            <p>
                <b>Features (LOOK AT USER FINDINGS SUMMARY)</b>
                <ol>
                    <li>Search with the <b>Dictionary</b> or <b>Translator</b></li>
                    <li>View your saved <b>Search History</b></li>
                    <li>Review with <b>Flashcards</b> generated automatically from your search history</li>

                </ol>
            </p>




            </div>
        </div>
    )
}

export default VocabMi
