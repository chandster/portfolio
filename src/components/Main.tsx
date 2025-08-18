import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpg';
import Typewriter from './Typewriter';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:kalila.chand@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
            <a href="https://github.com/chandster" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kalilachand" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kalila Chand</h1>
          <p className="headline"><Typewriter/></p>

          <div className="mobile_social_icons">
            <a href="mailto:kalila.chand@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
            <a href="https://github.com/chandster" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kalilachand" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
        <div className="description">
          <p>Hello! I'm Kalila, a student and software engineer who loves web development.</p>
          <p>Reach out to me if you want to collaborate on a project!</p>
        </div>
      </div>
    </div>
  );
}

export default Main;