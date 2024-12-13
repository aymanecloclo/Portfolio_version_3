import React from "react";
import { experienceData } from "@/Data/experienceData";
import { useShowContext } from "./ShowProvider";
function Experience() {
    const language= useShowContext().language;

  return (
    <div className="mt-12 mx-auto p-6 w-11/12 lg:w-8/12 bg-[#F4FAFF] text-[#113264] shadow-md rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8">Expérience Professionnelle</h2>
      {experienceData.map((item, index) => (
        <div
          key={index}
          className="mb-8 p-4 bg-white text-[#113264] border border-[#113264] rounded-lg shadow-md hover:bg-[#113264] hover:text-[#F4FAFF] transition-colors duration-300"
        >
          <h3 className="text-xl font-bold">{item.title[language]}</h3>
          <p className="text-sm">{item.company[language]}</p>
          <p className="text-sm italic">{item.date}</p>
          <ul className="mt-4 text-sm hover:text-[#F4FAFF] list-disc pl-5">
            {item.description[language].map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm font-medium">
            <span className="font-bold">Compétences :</span> {item.skills[language]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
