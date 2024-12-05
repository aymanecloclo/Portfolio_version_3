import { useState } from "react";
import developer from "../assets/images/developer.png";
import { CiLinkedin } from "react-icons/ci";
import { Motion, spring } from "react-motion";

const Presentation = () => {
  const [linkBadge, setLinkBadge] = useState(["Linkedin", "Github"]);

  return (
    <>
      <Motion
        defaultStyle={{ opacity: 0, translateY: 50 }} // État initial
        style={{
          opacity: spring(1, { stiffness: 60, damping: 15 }), // État final
          translateY: spring(0, { stiffness: 60, damping: 15 }),
        }}
      >
        {(style) => (
          <div
            className="border border-b-[#0090FF] flex lg:flex-row w-full lg:h-[60vh] justify-center flex-col mt-10 lg:gap-24"
            style={{
              opacity: style.opacity,
              transform: `translateY(${style.translateY}px)`,
            }}
          >
            {/* Texte et badges */}
            <div className="lg:w-6/12 flex flex-col justify-center lg:items-start items-center lg:ps-10 lg:pe-0 gap-2 order-3 lg:order-2">
              <h2 className="text-xl">Hey there! I'm</h2>
              <h1 className="text-2xl lg:text-6xl my-2 text-center">
                Aymane Rachid
              </h1>
              <p className="text-md text-center px-5 my-3 lg:my-2">
                FullStack Developer Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Modi neque eum nesciunt quidem consequatur
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione architecto labore earum in minus.
              </p>

              {/* Badges */}
              <div className="flex gap-2 mt-3">
                {linkBadge.map((element, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-blue-400 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    <p className="whitespace-nowrap text-sm flex items-center">
                      <CiLinkedin size={20} className="mr-1" />
                      {element}
                    </p>
                  </span>
                ))}
              </div>

              {/* Bouton Download */}
              <div className="mt-5">
                <a
                  className="inline-flex items-center gap-2 rounded border border-[#0090FF] bg-[#0090FF] px-8 py-3 text-[#FBFDFF] hover:bg-transparent hover:text-[#0090FF] focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                >
                  <span className="text-sm font-medium"> Download </span>
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center order-1 px-10">
              <img
                className="lg:w-72 w-48 block mx-auto"
                src={developer}
                alt="Developer"
              />
            </div>
          </div>
        )}
      </Motion>
    </>
  );
};

export default Presentation;
