import { useState,useContext } from "react";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CiLinkedin } from "react-icons/ci";
import { Motion, spring } from "react-motion";
import { FaLinkedin } from "react-icons/fa";
import { useShowContext } from "./ShowProvider";
// import { constants } from "node:crypto";

const Presentation = () => {
  const [linkBadge, setLinkBadge] = useState(["Linkedin", "Github"]);
   const show= useShowContext();
   console.log(show.language);
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
            className=" lg:px-24 flex lg:flex-row w-full lg:h-[60vh] justify-center flex-col  lg:gap-24 lg:mt-48 mt-24"
            style={{
              opacity: style.opacity,
              transform: `translateY(${style.translateY}px)`,
            }}
          >
            {/* Texte et badges */}
            <div className="lg:w-6/12 flex flex-col justify-center lg:items-start items-center lg:ps-10 lg:pe-0 gap-2 order-3 lg:order-2">
              <h2 className="text-xl gradient-text font-bold ">{show.language=='en'?`Hey there! I'm`:`Salut ! Moi, c’est...`}</h2>
              <h1 className="gradient-text text-2xl lg:text-6xl my-2 text-center font-bold text-nowrap ">
                Aymane Rachid
              </h1>
              <p className=" leading-6 text-md md:px-0 md:text-start text-center px-5 my-3 lg:my-2 font-bold dark:font-normal text-[#113264] dark:text-[#FBFDFF] ">
                {show.language=='en'?(
                  <>
                  <span>  Full-Stack Developer specializing in creating modern, scalable web applications.   I excel in technologies like React, Laravel, and Node.js, with a focus on clean code and seamless user experiences

                  </span> <br/>
             <span> As the founder of FSCodersHub, I lead and collaborate on innovative tech projects, always striving to stay ahead of emerging trends. Check out my work and let's bring your ideas to life!</span>
             </>
                ):`Développeur Full-Stack spécialisé dans la création d'applications web modernes et évolutives. J'excelle dans des technologies comme React, Laravel et Node.js, avec un souci particulier pour un code propre et des expériences utilisateur fluides. En tant que fondateur de FSCodersHub, je dirige et collabore sur des projets technologiques innovants, toujours à l'affût des nouvelles tendances. Découvrez mon travail et concrétisons vos idées ensemble !`}
           
              </p>

              {/* Badges */}
              <div className="flex gap-2 mt-3">
              <a
       href="https://github.com/aymanecloclo"
               className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0D74CE] text-[#FBFDFF] shadow hover:bg-[#0D74CE]/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-full transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
>
  <span
    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-[#F4FAFF] opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div className="flex items-center">
    <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
      <path
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
    <span className="ml-1 text-[#FBFDFF]"> GitHub</span>
  </div>
  <div className="ml-2 flex items-center gap-1 text-sm md:flex">
    
   
  
  </div>
              </a>
              <a
       href="https://www.linkedin.com/in/aymane-rachid-106700317/"
               className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0D74CE] text-[] shadow hover:bg-[#0D74CE]/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-full transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
>
  <span
    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-[#F4FAFF] opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div className="flex items-center">
     <FaLinkedin className="w-4 h-4 fill-current text-white"/>
    <span className="ml-1 text-[#FBFDFF]"> Linkedin</span>
  </div>
  <div className="ml-2 flex items-center gap-1 text-sm md:flex">
    
   
  
  </div>
              </a>

 
              </div>

              {/* Bouton Download */}
              <div className="mt-5">
                <a
                 href="/Portfolio/file/Aymane_Rachid_cv.pdf" // chemin vers votre fichier CV
                 download="Aymane_Rachid_cv.pdf" 
                  className="inline-flex items-center gap-2 rounded border border-[#0090FF] hover:bg-[#0D74CE] px-8 py-3 hover:text-[#FBFDFF] bg-transparent text-[#0090FF] focus:outline-none focus:ring active:text-indigo-500"
            
                >
                  <span className="text-sm font-medium"> Download cv </span>
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
            <DotLottieReact
      src="https://lottie.host/6d88acd8-97de-49ba-bbfb-ffaaaa673ae5/FD7zzK8PXy.lottie"
      loop
      autoplay
    />
       
         
            </div>
          </div>
        )}
      </Motion>
    </>
  );
};

export default Presentation;
