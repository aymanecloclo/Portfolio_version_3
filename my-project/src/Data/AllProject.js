import autoMover from "../assets/images/autoMover.jpeg";
import fs from "../assets/images/fs.png";
import weatherApp from "../assets/images/weatherApp.png";
import AYSHOP_logo from '../assets/images/AYSHOP_logo.png';
import AYTECH from '../assets/images/AY.TECH.png';
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
      en: "AutoFileMover",
      fr: "AutoFileMover",
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
  src: AYSHOP_logo,
  title: {
    en: "AY.SHOP",
    fr: "AY.SHOP"
  },
  content: {
    en: "A modern e-commerce platform built with React and Laravel, featuring secure authentication through Auth0 and seamless database integration with MySQL and NoSQL.",
    fr: "Une plateforme e-commerce moderne développée avec React et Laravel, offrant une authentification sécurisée via Auth0 et une intégration fluide avec MySQL et NoSQL."
  },
  link: "https://github.com/aymanecloclo/AY.SHOP",
  ecs: ["React", "Laravel", "Auth0", "MySQL", "NoSQL", "E-commerce"],
}
,
  {
  id: 5,
  src: AYTECH, 
  title: {
    en: "AY.TECH",
    fr: "AY.TECH",
  },
  content: {
    en: "A platform offering AI services such as automation, machine learning, and data processing to enhance workflow efficiency.",
    fr: "Une plateforme offrant des services d'IA tels que l'automatisation, l'apprentissage automatique et le traitement des données pour améliorer l'efficacité des flux de travail.",
  },
  link: "https://aymanecloclo.github.io/IA_tech/#",  // Vérifiez que le lien est bien fonctionnel
  ecs: ["HTML5", "CSS3", "Bootstrap"],
}

];
