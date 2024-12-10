import React from "react";

function Education() {
  const educationData = [
    {
      title: "DTS, Développement digital - Option FullStack",
      institution: "Institut Spécialisés de Technologie Appliquée",
      date: "Sep 2023 - Sep 2025",
      description:
        "Formation approfondie en développement Full Stack, couvrant les technologies essentielles pour créer des applications web complètes. Compétences en Front-End (HTML, CSS, JavaScript, React, Angular) et Back-End (PHP, Node.js, Express), gestion de bases de données (MySQL, MongoDB, PostgreSQL), ainsi que l'utilisation d'outils comme Git, Docker, Webpack, et le déploiement sur AWS et Google Cloud.",
      skills:
        "React.js, JavaScript, Laravel, PHP, MySQL, NoSQL, Node.js, Docker, MongoDB, Tailwind CSS, Cloud Storage, Cloud Computing",
    },
    {
      title: " Économie et Gestion",
      institution:
        "Faculté de Droit, d’Économie et de Gestion de l'Université d'Angers",
      date: "Sep 2019 - Sep 2022",
      description:
        "Permet d'acquérir une solide connaissance des principes économiques, de la gestion d'entreprise et des outils d'analyse financière. Les cours couvrent la microéconomie, macroéconomie, comptabilité, finance, marketing et gestion des ressources humaines.",
      skills: "Relations client, Communication",
    },
    {
      title: "Baccalauréat Scientifique - Option Physique",
      institution: "Lycée Cady Ayyad",
      date: "Sep 2018 - Jul 2019",
      description:
        "Mention Très Bien avec une note de 16/20. Formation scientifique axée sur les sciences physiques avec option en langue française.",
      skills: "Mathématiques",
    },
  ];

  return (
    <div className=" mt-28 my-10 p-6 w-11/12 lg:w-8/12 mx-auto bg-[#F4FAFF] text-[#113264] shadow-lg rounded-xl transition-all duration-300">
      <h2 className="text-3xl lg:text-4xl text-center font-bold mb-6">
        Éducation
      </h2>

      {educationData.map((item, index) => (
        <div
          key={index}
          className="mb-8 p-4 bg-white text-[#113264] border border-[#113264] rounded-lg shadow-md hover:bg-[#113264] hover:text-[#F4FAFF] transition-colors duration-300"
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm">{item.institution}</p>
          <p className="text-sm italic">{item.date}</p>
          <p className="mt-4">{item.description}</p>
          <p className="mt-2 text-sm font-medium">
            <span className="font-bold">Compétences :</span> {item.skills}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Education;
