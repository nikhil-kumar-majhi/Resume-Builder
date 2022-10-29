import React from 'react'
import '../css/resume.css'
const builder = () => {
  return (
    <div className='BuilderBody'>
      <div className='sidebar'>
        <div className='sideBody'>
              <div className='title'>
                  Create Your Resume
              </div>
              <div className='options'>
                  <ul>
                    <li>Personal Details</li>
                    <li>Work Experience</li>
                    <li>Skills</li>
                    <li>Acheivements</li>
                  </ul>
              </div>

          </div>
      </div>
      <div className='form'>
        <div className='formBody'>
                <div className='title'>
                    Form Section
                </div>
            </div>
        </div>
      <div className='resume'>
        <div className='ResumeBody'>
                <div className='title'>
                    Resume Section
                </div>
            </div>
        </div>
    </div>
  )
}

export default builder