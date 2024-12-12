import React from "react";
import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import javascript from '../assets/images/javascript.svg'; 
import php from '../assets/images/php.svg'; 
import python from '../assets/images/python.svg';
import sql from '../assets/images/sql.svg'; 
import nosql from '../assets/images/nosql.svg';
import react from '../assets/images/react.svg'; 
import laravel from '../assets/images/laravel.svg';
import tailwind from '../assets/images/tailwind.svg'; 
import vitejs from '../assets/images/vitejs.svg'; 
import jquery from '../assets/images/jquery.svg'; 
import git from '../assets/images/git.png'; 
import github from '../assets/images/github.svg'; 
import figma from '../assets/images/figma.svg'; 
import jira from '../assets/images/jira.svg'; 
import sonarqube from '../assets/images/sonarqube.png'; 
import canva from '../assets/images/canva.png'; 
import ia from '../assets/images/ia.png'; 
import cloud from '../assets/images/cloud.png'; 
import agile from '../assets/images/agile.png'; 
import open from '../assets/images/open.png'; 
const logos = {
  html: html,
  css: css,
  javascript: javascript,
  php: php,
  python: python,
  sql: sql,
  nosql: nosql,
  react: react,
  laravel: laravel,
  tailwind: tailwind,
  vitejs: vitejs,
  jquery: jquery,
  git: git,
  github: github,
  figma: figma,
  jira: jira,
  sonarqube: sonarqube,
  canva: canva,
  ia:ia,
  cloud:cloud,
  agile:agile,
  open:open,
};

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "HTML", logo: logos.html },
      { name: "CSS", logo: logos.css },
      { name: "JavaScript", logo: logos.javascript },
      { name: "PHP", logo: logos.php },
      { name: "Python", logo: logos.python },
      { name: "SQL", logo: logos.sql },
      { name: "NoSQL", logo: logos.nosql },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", logo: logos.react },
      { name: "Laravel", logo: logos.laravel },
      { name: "TailwindCSS", logo: logos.tailwind },
      { name: "ViteJS", logo: logos.vitejs },
      { name: "jQuery", logo: logos.jquery },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", logo: logos.git },
      { name: "GitHub", logo: logos.github },
      { name: "Figma", logo: logos.figma },
      { name: "Jira", logo: logos.jira },
      { name: "SonarQube", logo: logos.sonarqube },
      { name: "Canva", logo: logos.canva },
    ],
  },
  {
    category: "Interests",
    skills: [
      { name: "Artificial Intelligence", logo: logos.ia },
      { name: "Cloud Computing", logo: logos.cloud },
      { name: "devops", logo: logos.agile},
      { name: "Open Source Contributions", logo: logos.open},
    ],
  },
];


const Skills = () => {
  return (
   <section className="p-10">
  <h2 className="text-4xl font-extrabold text-[#113264] dark:text-[#F4FAFF] bg-transparent text-center mb-12">
    My Skills
  </h2>
  {skillsData.map((category, index) => (
    <div key={index} className="mb-12">
      <h3 className="text-3xl font-semibold text-[#113264] dark:text-[#cbd5e1] text-center mb-8">
        {category.category}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {category.skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#FBFDFF dark:bg-[#2d3748] text-[#113264] dark:text-[#e2e8f0] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-20 h-20 mb-4 rounded-full border-4 border-gray-300 dark:border-[#4a5568] shadow-md object-contain"
            />
            <p className="text-lg font-medium text-[#113264] dark:text-[#e2e8f0]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</section>

  );
};

export default Skills;
