import React from "react";
import hawk2 from '../assets/images/hawk.png';
import hci from '../assets/images/hci.png';
import skibidopoly from '../assets/images/skibidopoly.png';
import playlist from '../assets/images/playlist-for-life.png';
import glasgow from '../assets/images/explore-glasgow.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            
        <div className="project">
                <a href="https://chromewebstore.google.com/detail/hawk-2-page-indexer/ahomfccdnfmnmomcapgjdmgpebjpcogg" target="_blank" rel="noreferrer"><img src={hawk2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://chromewebstore.google.com/detail/hawk-2-page-indexer/ahomfccdnfmnmomcapgjdmgpebjpcogg" target="_blank" rel="noreferrer"><h2>Hawk 2 Chrome Extension</h2></a>
                <p>Developed and released a page indexing and productivity Chrome extension.</p>
            </div>
        <div className="project">
                <a href="https://glitch.com/~outrageous-hammerhead-prawn" target="_blank" rel="noreferrer"><img src={hci} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://glitch.com/~outrageous-hammerhead-prawn" target="_blank" rel="noreferrer"><h2>Handtracking Project</h2></a>
                <p>Created a 3D user interface for a human-computer interaction research project investigating the viability of hand gesture and raycasting as input.</p>
            </div>
            <div className="project">
                <a href="https://github.com/aamukta-d/sas-monopoly-team32" target="_blank" rel="noreferrer"><img src={skibidopoly} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/aamukta-d/sas-monopoly-team32" target="_blank" rel="noreferrer"><h2>Monopoly with Minigames</h2></a>
                <p>Developed a Monopoly-like video game for a younger audience using JavaScript and HTML.</p>
            </div>
            <div className="project">
                <a href="https://github.com/glasgow24/Team-2" target="_blank" rel="noreferrer"><img src={playlist} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/glasgow24/Team-2" target="_blank" rel="noreferrer"><h2>Playlist Generator</h2></a>
                <p>Designed and created a playlist creation app for charity <a href="https://www.playlistforlife.org.uk">Playlist for Life</a>. The app uses simple survey answers to get song suggestions using AI.</p>
            </div>
            <div className="project">
                <a href="https://kalila.pythonanywhere.com" target="_blank" rel="noreferrer"><img src={glasgow} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kalila.pythonanywhere.com" target="_blank" rel="noreferrer"><h2>Explore Glasgow</h2></a>
                <p>Developed and published a website using Django, for students to find things to do and make plans in the city of Glasgow.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;