import './Skills.css';
import reactLogo from '../../assets/react-logo.png';
import nodejsLogo from '../../assets/nodejs-logo.png';
import mysqlLogo from '../../assets/mysql-logo.png';
import mlLogo from '../../assets/ml-logo.png';
import javaLogo from '../../assets/java-logo.png';
import cLogo from '../../assets/c-logo.png';

const skillsData = [
  { name: 'Java', percentage: 75, logo: javaLogo },
  { name: 'C', percentage: 75, logo: cLogo },
  { name: 'ReactJS', percentage: 55, logo: reactLogo },
  { name: 'NodeJS', percentage: 50, logo: nodejsLogo },
  { name: 'MySQL', percentage: 75, logo: mysqlLogo },
  { name: 'Machine Learning', percentage: 60, logo: mlLogo },
];

const renderStars = (percentage) => {
  const fullStars = Math.round((percentage / 100) * 5);
  const emptyStars = 5 - fullStars;
  return (
    <div className="stars">
      {'★'.repeat(fullStars)}
      <span className="empty-stars">{'☆'.repeat(emptyStars)}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="sk">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={`${skill.name} Logo`} className="tech-logo" />
            <h3 className="skill-name">{skill.name}</h3>
            {renderStars(skill.percentage)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
