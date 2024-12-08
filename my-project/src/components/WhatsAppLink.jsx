import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppLink() {
  const phoneNumber = "+212618941000";
  const message = encodeURIComponent("Hello, I need more info!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 btn bg-[#0D74CE] text-white  hover:bg-[#0D74CE]/90  border-none p-3 rounded-full shadow-lg hover:bg-[#0D74CE] z-40"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}

export default WhatsAppLink;