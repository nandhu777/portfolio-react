import React, { useState } from 'react'
import axios from 'axios'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'


const About = () => {
  const { name, role, description, resume, social } = about
  const [emailAddress, setEmailAddress] = useState('')
  const handleSubmit = (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();
    console.log(emailAddress);
    // Handle validations
    axios
      .post("http://localhost:8080/send-mail", { emailAddress })
      .then((response) => {
        document.getElementById("demo").innerHTML = response.data;
 
        // Handle response
      });
  };

  return (
    <div className='about center'>
      {name && (
        <h1 class="fonto">
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <div className="row g-3">

       <form action="" id="login" method="post" onSubmit={handleSubmit}>
         <p class="textalign">Kindly enter your email  for my updated resume</p>
        <p className="item">
          <label for="email"> Email 
          <input class="inpnash"
            type="email"
            name="email"
            id="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          required/>
          </label>

          <button className='btn btn--outline' type="submit" value="Login">submit</button>
         
          
        </p>
      
          
    

       
      </form>
      <p id="demo"></p>
        <p className="item">
          
        </p>
     </div>

        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='nash'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='nash'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
