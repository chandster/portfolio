import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2025 - Present"
            iconStyle={{ background: '#6453c4', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faComputer} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Verint Systems</h4>
            <p>
              Working on placement as a developer for a Scrum team, focusing on developing and maintaining a performance management platform.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2022 - present"
            iconStyle={{ background: '#6453c4', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering MSci</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Glasgow</h4>
            <p>
              Pursuing an integrated masters degree, having so far studied modules including Data Strucures and Algorithms, Web Application Development, Algorithmics, Data Analysis
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;