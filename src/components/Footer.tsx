import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:kalila.chand@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
        <a href="https://github.com/chandster" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/kalilachand" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Web portfolio by Kalila Chand</p>
      <p>With help from <a href="https://github.com/yujisatojr/react-portfolio-template/" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;