import React from "react";
import "./Skills.css";
const Skills = () => {
  const skills = [
    " Quite good in data structure & algorithms.", 
    "Java, OOPs", 
    "HTML, CSS, JavaScript", 
    "Database mangement system, MYSql, MongoDB", 
    "ReactJs, Redux, Bootstrap (Front-end)",
    "NodeJS, Express.Js (Back-end)",
    "Github(Version control system)"
  ];

  return (
    <div className="skills-box">
      {skills.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default Skills;
