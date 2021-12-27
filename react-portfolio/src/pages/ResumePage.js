import React from 'react' //rfce
import GoogleDocsViewer from 'react-google-docs-viewer'
function ResumePage() {
    return (
        <div className="resume-page">
           <div className="resume-blurb">
               <div className="resume-blurb-icon">
                   <h1>💡</h1>
               </div>
               <div className="resume-blurb-text">
                <p>
                    currently seeking summer 2022 ux design internships
                {/* </p> */}
                
                <br></br>
                <span>view my </span> <span className="yellow-text">resume </span> 
                <span>| connect through </span><span><a href="mailto:l.bichelmeir@gmail.com" className="yellow-text">email</a></span>
                </p>
                </div>
            </div>
            <div className="iframe">
            <iframe src="https://drive.google.com/file/d/1UxA8qMGzG0q2gVFQ28NUWm47JT3jILVV/preview" width="640" height="850" allow="autoplay"></iframe>
            </div>
            {/* <GoogleDocsViewer
                width="600px"
                height="780px"
                fileUrl="https://drive.google.com/drive/u/2/folders/1Of5YXjocojMX9NEzxbDZine2C8Gczz3G"
            /> */}
        </div>
    )
}

export default ResumePage
