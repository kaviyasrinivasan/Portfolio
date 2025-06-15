import "./Works.css";

import socialMediaImg from "../../assets/project_1.jpg";
import ticTacToeImg from "../../assets/project_2.png";
import calculatorImg from "../../assets/project_3.jpg";
import mentorConnectImg from "../../assets/portfolio-4.png";
import infixtopostfixImg from "../../assets/infixtopostfix.png";

const projects = [
  {
    name: "Social Media Analytics Dashboard",
    image: socialMediaImg,
    description: "A full-stack React project to analyze Instagram, LinkedIn, and Twitter data using APIs.",
    link: "https://github.com/kaviyasrinivasan/Youtube-Analytics-Dashboard",
  },
  {
    name: "Tic-Tac-Toe Game",
    image: ticTacToeImg,
    description: "A Java-based Tic-Tac-Toe game built for an internship task at Internpe.",
    link: "https://kaviyasrinivasan.github.io/Tic-Tac-Toe/",
  },
  {
    name: "Infix to Postfix Converter",
    image: infixtopostfixImg,
    description: "A React-based Infix to Postfix converter.",
    link: "https://infixtopostfix.vercel.app/",
  },
  {
    name: "To-Do List",
    image: calculatorImg,
    description: "A To-do list app with backend storage.",
    link: "https://github.com/kaviyasrinivasan/To-Do-App",
  },
  {
    name: "Mentor Connect Platform",
    image: mentorConnectImg,
    description: "A React project integrating Calendly for mentor sign-ups with backend storage.",
    link: "https://github.com/kaviyasrinivasan/Mentor-Connect",
  },
];

const Works = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">🚀 Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-inner">
              
              {/* Front Side (Image & Title) */}
              <div className="card-front">
                <img src={project.image} alt={project.name} className="project-image" />
                <h3>{project.name}</h3>
              </div>
              
              {/* Back Side (Description & Link) */}
              <div className="card-back">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="project-btn">View Project</button>
                </a>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
