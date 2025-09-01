import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
           Hi, I'm Shuaib, a passionate React developer , excited to build modern, responsive, and user-friendly web applications. <br/>
             I love turning ideas into real-world projects and continuously improving my coding skills. <br/>
             I'm working on improving my frontend development skills and learning backend integration for full-stack projects.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
       MCA (Master of Computer Applications)
       Graphic Era Hill University, Dehradun — 2025
        CGPA: 7.01
        <br/>  
       BCA (Bachelor of Computer Applications)
        MJPRU University — 2022
         Percentage: 66%
           <br/>

       Java Training
        CETPA Infotech, Noida — 2023
         Certificate: Completed
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
         Programming Languages: HTML, CSS, JavaScript, C, Java Familiar with Python <br/>
         Frameworks & Libraries: React.js, Bootstrap, Tailwind CSS, Numpy, Pandas etc<br/>
        Tools & IDEs: VS Code, Eclipse, Jupyter Notebook, PyCharm, Git, GitHub, Canva, Figma etc <br/>
        Good understanding of: OOP, Responsive Web Design <br/>
        Databases: MySQL, Oracle <br/>
        Soft Skills: Problem-Solving, Team Collaboration,Adaptability
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
         IT Executive <br/>
         Vistotech Global Pvt. Ltd., Dehradun
         Jan 2025 – May 2025 <br/>
          Worked on IT support and system maintenance. <br/>
          Helped the team in developing an Attendance Management System (AMS) using Python.
        </span>
        {/* <br /> */}
        
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1> */}
        {/* <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span> */}
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
         My mission is to continuously explore and master emerging technologies to stay ahead in the ever-evolving tech world.<br/>
         I aim to create modern, responsive, and user-friendly web applications that deliver seamless experiences.
        With a passion for innovation and problem-solving, I strive to bring creative solutions to real-world challenges.<br/>
        I am committed to writing clean, efficient, and scalable code that meets industry standards. <br/>
        My goal is to grow as a trusted full-stack developer, building applications that make a meaningful impact.<br/>
        Above all, I believe in continuous learning, adaptability, and delivering value through technology.
         </p>
      </div>
    </div>
  );
}

export default About;
