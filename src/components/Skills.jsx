import React from 'react'
import CloseUpPhoto from "../img/closeup.jpg"

const Skills = () => {
  return (
    <div className='container-flex' id='skills'>
        <div id='flex'>
            <img src={CloseUpPhoto} alt="" id='close-up-photo'/>
            <p><span>Fullname:</span> Edilson dos Santos Ricardo</p>
            <p><span>Birthday:</span> 15 December 1997</p>
            <p><span>Phone Number:</span> (+258) 84 66 25 743</p>
            <p><span>E-mail:</span> edilsonricardo212@gmail.com</p>
        </div>
        

        <div>
                <h3>SKILLS</h3>
            <ul>
                <li>HTML & CSS</li>
                <li>JAVASCRIPT</li>
                <li>JAVA</li>
                <li>REACT</li>
                <li>NODE JS</li>
                <li>MYSQL</li>
                <li>FIREBASE</li>
            </ul>
        </div>
        <a href="/CV.pdf" download="CV.pdf" id='link-cv' target="_blank" rel="noopener noreferrer">
                <p>BAIXAR MEU CV</p>
            </a>
    </div>
  )
}

export default Skills