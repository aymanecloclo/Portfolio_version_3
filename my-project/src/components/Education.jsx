import React from 'react';

function Education() {
  return (
    <div className="education card p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl">
      <div className="inner">
        <div className="education-title text-3xl font-semibold text-center text-gray-800 mb-6">Education</div>
        <div className="education-desc space-y-6">
          <div className="education-item">
            <div className="education-item-title text-xl font-bold text-gray-700">
              Full-Stack Web Development Certificate: 2023-2025
            </div>
            <div className="education-item-desc flex space-x-4 items-center mt-2">
              <img
                src="https://www.yourwebsite.com/assets/schools/youcde.svg"
                alt="YouCode"
                className="school-img w-16 h-16 object-contain"
              />
              <img
                src="https://www.yourwebsite.com/assets/schools/ump6.svg"
                alt="UMP6"
                className="school-img w-16 h-16 object-contain"
              />
            </div>
            <div className="education-desc education-desc-text text-gray-600 mt-4">
              YouCode is an inclusive school focused on individual-centered learning and teamwork. "You" represents
              the person, and "Code" stands for development. Located in Youssoufia and Safi, it offers a perfect coding
              environment away from big city distractions.
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-title text-xl font-bold text-gray-700 mt-6">
              Auto-formation in Web Development: 2022
            </div>
            <div className="education-item-desc flex space-x-4 items-center mt-2">
              <img
                src="https://www.codecademy.com/assets/images/codecademy-logo.png"
                alt="Codecademy"
                className="school-img w-16 h-16 object-contain"
              />
              <img
                src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/12/logo.png"
                alt="FreeCodeCamp"
                className="school-img w-16 h-16 object-contain"
              />
            </div>
            <div className="education-desc education-desc-text text-gray-600 mt-4">
              I completed several online courses in web development, including FreeCodeCamp’s Responsive Web Design and
              Codecademy's JavaScript and MongoDB courses, strengthening my skills in HTML, CSS, JavaScript, and MongoDB.
            </div>
          </div>

          <div className="education-item">
            <div className="education-item-title text-xl font-bold text-gray-700 mt-6">
              Scientific Baccalaureate - Physics and Chemistry: 2021-2022
            </div>
            <div className="education-item-desc flex items-center mt-2">
              <img
                src="https://example.com/assets/schools/morocco.jpg"
                alt="Morocco"
                className="school-img w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
