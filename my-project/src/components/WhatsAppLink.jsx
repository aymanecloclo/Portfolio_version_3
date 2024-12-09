import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function WhatsAppLink() {
  const phoneNumber = "+212618941000";
  const message = encodeURIComponent("Hello, I need more info!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="flex flex-col fixed bottom-4 right-4 gap-2">
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className=" btn bg-[#0D74CE] text-white  hover:bg-[#0D74CE]/90  border-none p-3 rounded-full shadow-lg hover:bg-[#0D74CE] z-40"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
    <a
      href='https://www.linkedin.com/in/aymane-rachid-106700317/'
      target="_blank"
      rel="noopener noreferrer"
      className=" btn bg-[#0D74CE] text-white  hover:bg-[#0D74CE]/90  border-none p-3 rounded-full shadow-lg hover:bg-[#0D74CE] z-40"
    >
      <FaLinkedin className="text-2xl" />
    </a>
    </div>
  );
}

export default WhatsAppLink;