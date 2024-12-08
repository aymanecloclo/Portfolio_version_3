import { useState } from "react";
import autoMover from "../assets/images/autoMover.jpeg";
import fs from "../assets/images/fs.png";
import weatherApp from "../assets/images/weatherApp.png";

const Project = () => {
  const allProjects = [
    {
      id: 1,
      src: fs,
      title: "FScodersHub-Community",
      content:
        "PyTorch is a Python package that provides tensor computation (like NumPy) with strong GPU acceleration.",
      link: "https://github.com/pytorch/pytorch",
      ecs: ["Python", "PyTorch", "Machine Learning"],
    },
    {
      id: 2,
      src: weatherApp,
      title: "Weather App",
      content: "A JavaScript library for building user interfaces.",
      link: "https://reactjs.org/",
      ecs: ["JavaScript", "React", "Weather API"],
    },
    {
      id: 3,
      src: autoMover,
      title: "AutoFileMover",
      content:
        "Docker is a platform for developing, shipping, and running applications in containers.",
      link: "https://github.com/aymanecloclo/AutoFileMover",
      ecs: ["Docker", "Node.js", "Automation"],
    },
    {
      id: 4,
      src: autoMover,
      title: "AutoFileMover",
      content:
        "Docker is a platform for developing, shipping, and running applications in containers.",
      link: "https://github.com/aymanecloclo/AutoFileMover",
      ecs: ["Docker", "Node.js", "Automation"],
    },
    {
      id: 5,
      src: autoMover,
      title: "AutoFileMover",
      content:
        "Docker is a platform for developing, shipping, and running applications in containers.",
      link: "https://github.com/aymanecloclo/AutoFileMover",
      ecs: ["Docker", "Node.js", "Automation"],
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  return (
    <>
    
      <div className="mt-14 lg:mt-24 sm:mt-20 px-4 sm:px-8 md:px-16 lg:px-48">
        <ul
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
          role="list"
        >
          {allProjects.slice(0, visibleProjects).map((project) => (
            <li
              key={project.id}
              className="group relative flex flex-col items-start"
            >
              <div className="overflow-hidden relative z-10 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-[] dark:ring-0">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover"
                  src={project.src}
                  loading="lazy"
                  decoding="async"
                  style={{ color: "transparent" }}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-neutral-800 dark:text-neutral-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-[#0588F0]/70 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10"
                >
                  {project.title}
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {project.content}
              </p>

              {/* Display technologies used (ecs) */}
              <div className="relative z-10 mt-4 flex flex-wrap gap-2 text-sm text-neutral-500 dark:text-neutral-300">
                {project.ecs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="relative z-10 mt-6 flex text-sm font-medium text-neutral-400 transition group-hover:text-primary-500 dark:text-neutral-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2"
                >
                  <span>View on GitHub</span>
                </a>

                {/* Tech Stack icons */}
                <span className="flex space-x-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.16 6.84 9.49.5.09.68-.22.68-.48v-1.74c-2.74.6-3.3-1.32-3.3-1.32-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.57 1.01 1.57 1.01.87 1.5 2.29 1.07 2.87.82.09-.63.34-1.07.62-1.32-2.33-.26-4.77-1.16-4.77-5.17 0-1.14.41-2.08 1.09-2.81-.11-.26-.47-1.31.1-2.72 0 0 .87-.28 2.85 1.06 1.35-.38 2.8-.57 4.22-.58s2.87.2 4.22.58c1.98-1.34 2.85-1.06 2.85-1.06.57 1.41.21 2.46.1 2.72.68.73 1.09 1.67 1.09 2.81 0 4.02-2.44 4.91-4.77 5.17.28.26.54.77.54 1.58v2.34c0 .26.18.57.68.48C21.12 20.16 24 16.42 24 12c0-5.52-4.48-10-10-10z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 text-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        fill="none"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/docker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M10 2L9 6L4 5L5 10L9 8L10 12L12 7L16 9L15 5L12 4L10 2zM20 13H18V10H20V13ZM18 16H20V18H18V16ZM18 20V21H20V20H18Z"
                      />
                    </svg>
                  </a>
                </span>
              </p>
            </li>
          ))}
        </ul>
        {visibleProjects < allProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMoreProjects}
              className="my-7 flex items-center justify-center h-9 px-4 py-2 rounded-md bg-[#0D74CE] text-white font-medium text-sm transition-all duration-300 ease-out hover:bg-[#0D74CE]/90"
            >
              <span>More Projects</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
