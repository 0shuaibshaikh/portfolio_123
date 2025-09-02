import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import reactjs from "../assets/reactjs.png";
import springBoot from "../assets/springBoot.jpg"; 
import javascript from "../assets/javascript.jpg"; 

function Projects() {
  const cardItem = [
    {
      id: 2,
      logo: reactjs,
      name: "ReactJS",
      title: "Portfolio Website",
      description: "A responsive and modern personal portfolio built using React, Vite, and Tailwind CSS for fast performance and elegant design.",
      link: "https://github.com/0shuaibshaikh/portfolio_123"
    },
    {
      id: 3,
      logo: springBoot,
      name: "Spring Boot",
      title: "Online Banking Application",
      description: "Modern Banking App powered by Spring Boot with account services, transfers, and secure login.",
      link: "https://github.com/0shuaibshaikh/Bank-App_11#" 
    },
    {
      id: 4,
      logo: javascript,
      name: "Javascript",
      title: "Quiz Application",
      description: "Quiz Application using HTML, CSS, JavaScript, and PHP API with random questions, multiple-choice support, real-time timer, and score display.",
      link: "https://github.com/0shuaibshaikh/Quiz-Master-123.git" 
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      title: "AMS",
      description: "AMS using Python and Flask attendance tracking, leave management, and Excel report export",
      link: "https://github.com/0shuaibshaikh/ams-python" 
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      title: "Tic Tac Toe",
      description: "A Java-based desktop Tic Tac Toe game built using Swing for the graphical user interface. It supports two-player mode with a simple and interactive design",
      link: "https://github.com/0shuaibshaikh/Tic_tac_toe_11" 
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, title, description, link }) => (
            <div
              className="md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] mx-auto p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div className="text-center mt-3">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="text-gray-600 text-sm mt-1">{description}</p>
              </div>
              <div className="flex justify-center mt-4 space-x-3">
                <a
                  href={link}  // alag-alag link har project ke liye
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
