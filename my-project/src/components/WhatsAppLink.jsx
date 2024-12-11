import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

function WhatsAppLink() {
  const phoneNumber = "+212618941000";
  const message = encodeURIComponent("Hello, I need more info!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Défilement fluide
    });
  };

  return (
    <div className="flex flex-col fixed bottom-4 right-4 gap-2">
      {/* Bouton de retour en haut */}
      <button
        onClick={scrollToTop}
        className="p-3 bg-[#0D74CE] text-white rounded-full shadow-lg hover:bg-[#0D74CE]/90 transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} />
      </button>

      {/* Lien WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-[#0D74CE] text-white rounded-full shadow-lg hover:bg-[#0D74CE]/90 transform hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Lien LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aymane-rachid-106700317/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-[#0D74CE] text-white rounded-full shadow-lg hover:bg-[#0D74CE]/90 transform hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </div>
  );
}

export default WhatsAppLink;
