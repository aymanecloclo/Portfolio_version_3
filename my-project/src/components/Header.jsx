import { useState, useContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from 'react-icons/fa';
import { LuPanelTopClose } from "react-icons/lu";
import { MdOutlineContacts } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import logo_light from '../assets/images/logo-light.png';
import logo_dark from '../assets/images/logo-dark.png';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useShowContext } from './ShowProvider';
import { PiCertificate } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { TiMessageTyping } from "react-icons/ti";
import { LiaHireAHelper } from "react-icons/lia";
import { FaHireAHelper } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "../components/theme-provider";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { setTheme, theme } = useTheme();
  const menuItems = [
    { label: "Home", href: "/", isExternal: false,icon:<HiOutlineHome size={18}/>},
    { label: "About", href: "#about", isExternal: false,icon:<TiMessageTyping size={18} /> },
    { label: "Project", href: "#project", isExternal: false,icon:<GoProjectRoadmap size={18} /> },
    { label: "Accomplishments", href: "/accomplishments", isExternal: true,icon:<PiCertificate size={18} />  },
    { label: "Contact", href: "#contact", isExternal: false,icon:<MdOutlineContacts  size={18} /> },
  ];

  const hire = useShowContext();

  return (
    <nav className="lg:flex items-center border-gray-200 mx-0 lg:px-24 fixed top-0 left-0 w-full h-24 z-40 bg-[#F4FAFF] shadow-lg dark:bg-[#0c121b]">
      <div className="w-full flex flex-wrap items-center justify-between my-0 py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse p-0 m-0">
          <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className="w-24 md:w-32 md:h-24 object-cover" />
        </a>
        <div className="flex md:hidden gap-1 px-2">
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:text-gray-100 focus:outline-none text-[#FBFDFF]"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
          >
            <span className="sr-only">Open main menu</span>
            {!showMenu ? (
              <svg className="w-5 h-5 text-[#113264] dark:text-[#F4FAFF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            ) : (
              <LuPanelTopClose className="text-[#113264] dark:text-[#F4FAFF]" size={28} />
            )}
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="dark" size="icon">
                <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-full md:flex items-center md:w-auto md:gap-5">
          <AnimatePresence>
            {showMenu && (
              <motion.ul
                className="bg-[#F4FAFF] lg:bg-transparent  font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 dark:bg-[#0c121b] z-40 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                      {menuItems.map((item, index) => (
     <motion.li
  key={index}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ delay: index * 0.1, duration: 0.2 }}
>
  {item.isExternal ? (
    <a
      href={item.href}
      className={`block py-2 px-3 rounded md:p-0 ${item.active
        ? "text-[#FBFDFF] bg-[#0D74CE] md:bg-transparent md:text-[#0D74CE] dark:text-[#FBFDFF]"
        : "text-[#113264] font-bold md:hover:dark:text-[#D5EFFF] dark:text-[#FBFDFF] hover:text-[#0D74CE] flex  items-center gap-1"}`}
      aria-current={item.active ? "page" : undefined}
      rel="noopener noreferrer"
    >
      {item.icon}
      {item.label}
    </a>
  ) : (
    <Link to={item.href} onClick={(e) => {
      // Vérifie si le lien contient un hash (pour le défilement interne)
      if (item.href.startsWith("#")) {
        e.preventDefault();
        const element = document.getElementById(item.href.slice(1)); // Récupère l'ID de l'élément cible
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }}>
      <a
        className={`block py-2 px-3 rounded md:p-0 ${item.active
          ? "text-[#FBFDFF] bg-[#0D74CE] md:bg-transparent md:text-[#0D74CE] dark:text-[#FBFDFF]"
          : "text-[#113264] font-bold md:hover:dark:text-[#D5EFFF] dark:text-[#FBFDFF] hover:text-[#0D74CE] flex  items-center gap-1"}`}
      >
         {item.icon}
        {item.label}
      </a>
    </Link>
  )}
</motion.li>

                ))}
                <button
                  className="lg:hidden mx-auto flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0D74CE] text-[##FBFDFF] shadow hover:bg-[#0D74CE]/90 h-9 px-1 py-2 whitespace-pre md:flex group relative w-4/12 justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                >
                  <span
                    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-[#F4FAFF] opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                  ></span>
                  <div className="flex items-center">
                    <a href='#hire' onClick={() => hire.setShowHire(prev => !prev)} className="ml-1 text-[#FBFDFF]  flex items-center gap-2 w-18 "> <FaHireAHelper size={18}/>Hire me</a>
                  </div>
                </button>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden lg:flex gap-8">
          <button
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#0D74CE] text-[##FBFDFF] shadow hover:bg-[#0D74CE]/90 h-9 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 px-2"
          >
            <span
              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-[#F4FAFF] opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
            ></span>
            <div className="flex items-center">
                  <a href='#hire' onClick={() => hire.setShowHire(prev => !prev)} className="ml-1 text-[#FBFDFF]  flex  items-center gap-2 "> <LiaHireAHelper size={20}/>Hire me</a>
            </div>
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="dark" size="icon">
                <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Header;
