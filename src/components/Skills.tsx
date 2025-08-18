import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    'Node.js',
    "SQL"
];

const labelsSecond = [
    "Jenkins",
    "GitLab Pipeline",
    "GitHub Actions",
    "Docker",
    "Playwright",
    "Puppeteer"
];

const labelsThird = [
    "LaTeX",
    "Python",
    "NumPy",
    "Matplotlib",
    "Microsoft Excel"
];

function Skills() {
    return (
    <div className="container" id="my-skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built web applications using modern technologies such as React and Django. I am able to follow the SDLC process and agile methods. Capable in frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>Testing and Automation</h3>
                    <p>I have had experience using CI/CD pipelines and identifying reasons for failed builds. During my internship, I wrote automated test suites for a large application.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Analysis</h3>
                    <p>I have completed a variety of individual research projects and experiments, with a heavy emphasis on data analysis. I can present scientific findings with visualisations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;