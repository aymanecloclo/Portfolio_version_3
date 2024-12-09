import React from "react";
import logo from '../assets/images/developer.png';

const Accomplishments = () => {
  const accomplishments = [
    {
      title: "Think in a Redux Way",
      subtitle: "Course Certificate",
      image: "logo",
      link: "https://learnwithsumit.com/certificates/verify/LWSCTXN-77QTNE9D",
    },
    {
      title: "Think in a Redux Way",
      subtitle: "Achieved Top 6th Position",
      image: "/static/media/LWS-Excellence-Certificate.39a7aaa87f5e66d1d5cd.jpg",
      link: "https://learnwithsumit.com/certificates/verify/LWSCTXN-77QTNE9D",
    },
    {
      title: "Programming Hero",
      subtitle: "Complete Web Development",
      image: "/static/media/cert1.23f7bca94941c84733fe.PNG",
      link: "https://drive.google.com/file/d/1kJ2Dm_d9PSfxz38BTgPGiJ9kVQYg_p-r/view?usp=sharing",
    },
    {
      title: "CodemanBD",
      subtitle: "WordPress & Ecommerce",
      image: "/static/media/codemanbd.c1d8be620bff3ac10de7.png",
      link: "https://drive.google.com/file/d/1Ju3anvGHs1hSTimsul7Xv6zDahNOPxY5/view?usp=sharing",
    },
    {
      title: "Advanced React",
      subtitle: "Meta Certification",
      image: "MetaLogo",
      link: "https://example.com/advanced-react-certification",
      description: "Ce certificat atteste de ma maîtrise avancée de React, incluant la gestion d'état avec useState et useEffect, l'utilisation de React Router, et l'optimisation des performances.",
    },
    {
      title: "React Basics",
      subtitle: "Meta Certification",
      image: "MetaLogo",
      link: "https://example.com/react-basics-certification",
      description: "J'ai appris à concevoir des composants réutilisables, gérer l'état local/global à l'aide de hooks, et organiser des données via les props.",
    },
    {
      title: "Version Control",
      subtitle: "Meta Certification",
      image: "MetaLogo",
      link: "https://example.com/version-control-certification",
      description: "Acquisition des fondamentaux de la gestion de versions, avec une exploration des meilleures pratiques et outils pour le travail collaboratif.",
    },
    {
      title: "Front-End Development",
      subtitle: "Meta Certification",
      image: "MetaLogo",
      link: "https://example.com/frontend-development-certification",
      description: "Maîtrise des technologies fondamentales : HTML, CSS, JavaScript, et React, incluant des principes UX/UI.",
    },
    {
      title: "Agile Development and Scrum",
      subtitle: "IBM Certification",
      image: "IBMLogo",
      link: "https://example.com/agile-certification",
      description: "Compétences en méthodologies Agile, gestion de projets flexibles, et collaboration d'équipe.",
    },
    {
      title: "UX/UI Design",
      subtitle: "Orange Certification",
      image: "OrangeLogo",
      link: "https://example.com/uxui-certification",
      description: "Maîtrise des principes fondamentaux UX/UI avec des outils comme Figma.",
    },
    {
      title: "DevOps on AWS",
      subtitle: "AWS Certification",
      image: "AWSLogo",
      link: "https://example.com/devops-certification",
      description: "Gestion de code source, CI/CD, et tests automatisés avec AWS CodeSuite.",
    },
    {
      title: "Foundations of Project Management",
      subtitle: "Google Certification",
      image: "GoogleLogo",
      link: "https://example.com/project-management-certification",
      description: "Planification, exécution, et suivi de projets en utilisant Agile et Waterfall.",
    },
  ];
  

  return (
    <div className="py-6 sm:py-8 lg:py-12 bg-[#F4FAFF]">
      <h1 className="mb-6 sm:mb-8 lg:mb-12 text-center text-2xl sm:text-3xl lg:text-[55px] font-bold text-[#113264] tracking-[.07em]">
        Accomplishments
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
        {accomplishments.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white border border-[#113264] rounded-lg shadow-md transition-all duration-300 hover:bg-[#113264] hover:text-white"
          >
            <img
              src={item.image}
              className="w-full h-[150px] sm:h-[170px] lg:h-[200px] rounded-t-lg object-cover"
              alt={item.title}
            />
            <div className="p-4 text-center transition-colors duration-300 hover:text-[#F4FAFF]">
              <h4 className="text-base sm:text-lg font-semibold text-[#113264] hover:text-[#F4FAFF]">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-[#5C8EB9] italic hover:text-[#F4FAFF]">
                {item.subtitle}
              </p>
              <a
                href={item.link}
                className="mt-4 inline-block px-4 py-2 bg-[#113264] text-white text-sm sm:text-base rounded-md hover:bg-[#F4FAFF] hover:text-[#113264] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
  
};

export default Accomplishments;
