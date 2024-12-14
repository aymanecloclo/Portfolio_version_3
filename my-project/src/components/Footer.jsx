import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import { memo } from 'react';
const Footer =memo(() => {
  return (
    <footer className="bg-[#F4FAFF] dark:bg-[#0c121b] text-[#113264] dark:text-[#FBFDFF] py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section Informations Personnelles */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-[#0D74CE] dark:text-[#0D74CE]">
              Aymane Rachid
            </h2>
            <p className="text-sm mt-2 text-[#113264] dark:text-[#FBFDFF]">
              Full-Stack Developer & AI Enthusiast
            </p>
          </div>

          {/* Section Liens de Contact */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/aymane-rachid-106700317/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#113264] hover:text-[#0D74CE] dark:text-[#FBFDFF] dark:hover:text-[#0D74CE] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:aymane.rachid.web@gmail.com"
              className="text-[#113264] hover:text-[#0D74CE] dark:text-[#FBFDFF] dark:hover:text-[#0D74CE] transition-colors"
            >
              Email
            </a>
            <a
              href="tel:+212618940000"
              className="text-[#113264] hover:text-[#0D74CE] dark:text-[#FBFDFF] dark:hover:text-[#0D74CE] transition-colors"
            >
              Phone
            </a>
          </div>

          {/* Section Icônes Sociales */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-xl text-[#113264] hover:text-[#0D74CE] dark:text-[#FBFDFF] dark:hover:text-[#0D74CE] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-xl text-[#113264] hover:text-[#0D74CE] dark:text-[#FBFDFF] dark:hover:text-[#0D74CE] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/aymanecloclo"
              className="text-xl text-[#113264] hover:text-[#0D74CE] dark:text-[#FBFDFF] dark:hover:text-[#0D74CE] transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
