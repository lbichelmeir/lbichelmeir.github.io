import React from 'react'
import '../App.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
// import {GrDocumentText} from 'react-icons/gr'
import {HiDocumentText} from 'react-icons/hi'
function Footer() {
    return (
        <div className="footer">
            <h3> Let's Connect </h3> 
            <div className="icons">
            <FaGithub/> <FaLinkedin/> <MdEmail/> <HiDocumentText/>
            </div>
            {/* // 🪐 */}
            <p>Made with 💛 and ☕ </p>
        </div>
    )
}

export default Footer

