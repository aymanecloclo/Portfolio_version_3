import autoMover from "../assets/images/autoMover.jpeg";
import fs from "../assets/images/fs.png";
import weatherApp from "../assets/images/weatherApp.png";
export const AllProject = [
  {
    id: 1,
    src: fs,
    title: {
      en: "FScodersHub-Community",
      fr: "Communauté FScodersHub",
    },
    content: {
      en: "A collaborative platform designed to connect developers, share resources, and work on open-source projects.",
      fr: "Une plateforme collaborative conçue pour connecter les développeurs, partager des ressources et travailler sur des projets open source."
    },
    demo: 'https://fscodershub.github.io/FScodersHub-Community/',
    link: "https://github.com/FSCodersHub/FScodersHub-Community",
    ecs: ["React", "Tailwind", "Vite"],
    status: ''
  },
  {
    id: 2,
    src: weatherApp,
    title: {
      en: "Weather App",
      fr: "Application Météo",
    },
    content: {
      en: "A dynamic and user-friendly weather application providing real-time forecasts.",
      fr: "Une application météo dynamique et conviviale offrant des prévisions en temps réel."
    },
    link: 'https://github.com/aymanecloclo/weatherApp_version2',
    demo: "https://aymanecloclo.github.io/weatherApp_version2/",
    ecs: ["React", "RESTful API", "GeoAPI", ],
  },
  {
    id: 3,
    src: autoMover,
    title: {
      en: "AY.TECH",
      fr: "AY.TECH",
    },
    content: {
      en: "A tool for automating file organization and transfer across directories.",
      fr: "Un outil pour automatiser l'organisation et le transfert de fichiers entre différents répertoires."
    },
    link: "https://github.com/aymanecloclo/AutoFileMover",
    ecs: ["Python", "Batch Scripting", "Automation"],
  },
  {
    id: 4,
    src: autoMover,
    title: {
      en: "AY.SHOP",
      fr: "AY.SHOP",
    },
    content: {
      en: "A project designed to simplify and automate shopping-related tasks.",
      fr: "Un projet conçu pour simplifier et automatiser les tâches liées aux achats."
    },
    link: "https://github.com/aymanecloclo/AutoFileMover",
    ecs: ["Python", "Batch Scripting", "Automation"],
  },
  {
    id: 5,
    src: autoMover,
    title: {
      en: "AutoFileMover",
      fr: "Déplaceur de Fichiers Automatique",
    },
    content: {
      en: "A utility to automate file transfers and organization, improving workflow efficiency.",
      fr: "Un utilitaire pour automatiser les transferts et l'organisation des fichiers, améliorant l'efficacité du flux de travail."
    },
    link: "https://github.com/aymanecloclo/AutoFileMover",
    ecs: ["Python", "Batch Scripting", "Automation"],
  },
];
