import React, { useEffect } from 'react';
import './Skills.css';
import reactLogo from '../../assets/react-logo.png';
import nodejsLogo from '../../assets/nodejs-logo.png';
import mysqlLogo from '../../assets/mysql-logo.png';
import mlLogo from '../../assets/ml-logo.png';
import javaLogo from '../../assets/java-logo.png';
import cLogo from '../../assets/c-logo.png';
const Skills = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');
    const logos = document.querySelectorAll('.tech-logo');

    progressBars.forEach((bar, index) => {
      const percentage = parseInt(bar.dataset.percentage); // Get the percentage
      bar.style.width = `${percentage}%`; // Set progress bar width

      const logo = logos[index]; // Get the corresponding logo

      const logoPosition = percentage*9.8;

      logo.style.left = `${logoPosition - logo.offsetWidth / 2}px`;
    });
  }, []);


  

  return (
    <div className="skills">
<h2 class="sk">Skills</h2>
<div className="skill">
        <span className="skill-name"> Java</span><br/>
        <div className="progress-bar-container">
          <div className="progress-bar" data-percentage="75"></div>
          <img src={javaLogo} alt="Java Logo" className="tech-logo" />
        </div>
      </div>  

      <div className="skill">
        <span className="skill-name"> C</span><br/>
        <div className="progress-bar-container">
          <div className="progress-bar" data-percentage="75"></div>
          <img src={cLogo} alt="C Logo" className="tech-logo" />
        </div>
      </div>

      <div className="skill">
        <span className="skill-name">ReactJS</span>
        <div className="progress-bar-container">
          <div className="progress-bar" data-percentage="55"></div>
          <img src={reactLogo} alt="React Logo" className="tech-logo" />
        </div>
      </div>

      <div className="skill">
        <span className="skill-name"> NodeJS</span>
        <div className="progress-bar-container">
          <div className="progress-bar" data-percentage="50"></div>
          <img src={nodejsLogo} alt="NodeJS Logo" className="tech-logo" />
        </div>
      </div>

      <div className="skill">
        <span className="skill-name"> MySQL</span>
        <div className="progress-bar-container">
          <div className="progress-bar" data-percentage="75"></div>
          <img src={mysqlLogo} alt="MySQL Logo" className="tech-logo" />
        </div>
      </div>

      <div className="skill">
        <span className="skill-name">Machine Learning</span>
        <div className="progress-bar-container">
          <div className="progress-bar" data-percentage="60"></div>
          <img src={mlLogo} alt="Machine Learning Logo" className="tech-logo" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
