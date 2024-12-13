import React from "react";
import { educationData } from "@/Data/educationData";
import { useShowContext } from "./ShowProvider";
function Education() {
      const language= useShowContext().language;

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
          <h3 className="text-xl font-bold">{item.title[language]}</h3>
          <p className="text-sm">{item.institution[language]}</p>
          <p className="text-sm italic">{item.date}</p>
          <p className="mt-4">{item.description[language]}</p>
          <p className="mt-2 text-sm font-medium">
            <span className="font-bold">Compétences :</span> {item.skills[language]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Education;
