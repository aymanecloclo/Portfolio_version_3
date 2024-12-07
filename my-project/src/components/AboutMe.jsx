
import developer from "../assets/images/developer.png";


const AboutMe = (params) => {
  return(
     <>
       <div className=" dark:bg-[#1c3850] lg:h-[80vh] my-24 3xl:px-48 lg:px-24 flex lg:flex-row flex-col lg:justify-between  items-center ">
        <div className="w-full lg:w-4/12 my-12 p-5 flex justify-center ">
        <img
                className="lg:w-10/12  3xl:w-8/10  w-3/4 object-cover  block mx-auto"
                src={developer}
                alt="Developer"
              />
         </div>
         <div className="lg:w-1/2 p-4 w-full flex flex-col items-center gap-5 lg:items-start ">
         <h1 className='lg:text-6xl text-4xl gradient-text text-center   '>About Me </h1>
     
        <p className='text-md p-10 lg:p-0 w-full leading-8  lg:text-start font-bold dark:font-normal'>
        Je suis un développeur Full-Stack spécialisé dans le développement d'applications web dynamiques. Maîtrisant des technologies telles que React, Laravel, PHP, Python, SQL, et Tailwind, j'optimise les performances et l'expérience utilisateur. J'utilise Git et GitHub pour le contrôle de version, et Jira pour la gestion agile des projets. En outre, j'assure la qualité du code avec SonarQube.

Actuellement développeur Full-Stack chez FSCodersHub, je conçois des solutions sur mesure en suivant une méthodologie Agile/Scrum. Passionné par l'innovation, je recherche constamment de nouveaux défis..
      </p>
         </div> 
   

          
       </div>
     </>
  )
}
export default AboutMe;