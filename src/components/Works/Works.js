// import React from 'react';
// import './Works.css';
// import Portfolio1 from '../../assets/portfolio-1.png';
// import Portfolio2 from '../../assets/portfolio-2.png';
// import Portfolio3 from '../../assets/portfolio-3.png';
// import Portfolio4 from '../../assets/portfolio-4.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';


// const Works = () => {
//   return (
//     <section id="works">
//         <h2 class="worksTitle">My Project Works</h2>
//         <span class="worksDesc">content goes here</span>
//         <div class="worksImgs">
//             <img src={Portfolio1} alt="img" class="worksImg"/>
//             <img src={Portfolio2} alt="img" class="worksImg"/>
//             <img src={Portfolio3} alt="img" class="worksImg"/>
//             <img src={Portfolio4} alt="img" class="worksImg"/>
//             </div>
//         {/* <button class="worksBtn">See More</button> */}
//     </section>
//   );
// }

// export default Works;




// import React from "react";
// import "./Works.css";

// const projects = [
//   {
//     name: "Social Media Analytics Dashboard",
//     description: "A full-stack React project to analyze Instagram, LinkedIn, and Twitter data using APIs.",
//     link: "https://github.com/yourusername/social-media-analytics",
//   },
//   {
//     name: "Tic-Tac-Toe Game",
//     description: "A Java-based Tic-Tac-Toe game built for an internship task at Internpe.",
//     link: "https://github.com/yourusername/tic-tac-toe",
//   },
//   {
//     name: "React Calculator",
//     description: "A calculator app with backend storage for the last 10 calculations, supporting keyboard input.",
//     link: "https://github.com/yourusername/react-calculator",
//   },
//   {
//     name: "Mentor Connect Platform",
//     description: "A React project integrating Calendly for mentor sign-ups with backend storage.",
//     link: "https://github.com/yourusername/mentor-connect",
//   },
// ];

// const Works = () => {
//   return (
//     <section className="projects">
//       <h2 className="projects-title">🚀 Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <div className="card-inner">
//               {/* Front Side */}
//               <div className="card-front">
//                 <h3>{project.name}</h3>
//               </div>
              
//               {/* Back Side */}
//               <div className="card-back">
//                 <p>{project.description}</p>
//                 <a href={project.link} target="_blank" rel="noopener noreferrer">
//                   <button className="project-btn">View Project</button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Works;



import React from "react";
import "./Works.css";

// Import project images
import socialMediaImg from "../../assets/project_1.jpg";
import ticTacToeImg from "../../assets/project_2.png";
import calculatorImg from "../../assets/project_3.jpg";
import mentorConnectImg from "../../assets/portfolio-4.png";

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
