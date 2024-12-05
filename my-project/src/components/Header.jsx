import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import logo from '../assets/images/logo-light.png'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "../components/theme-provider"
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setTheme } = useTheme();

  const menuItems = [
    { label: "Home", href: "#", active: true },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto my-0  ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse p-0 m-0">
        <img src={logo} alt="" className='w-24 md:w-32 md:h-24 object-cover' />
        </a>
         <div className="flex  md:hidden gap-1 px-2 ">
             <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:text-gray-100 focus:outline-none text-[#FBFDFF] "
          onClick={() => setShowMenu(!showMenu)}
          aria-expanded={showMenu}
        >
          
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
            </button>
                
       <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button  size="icon">
      <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaMoon  className=" text-[#FBFDFF] absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
      </DropdownMenu>
         </div>
       
        <div className={`${showMenu ? '' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    item.active
                      ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-[#FBFDFF]"
                      : "text-gray-900  md:hover:dark:text-[#D5EFFF] dark:text-[#FBFDFF] "
                  }`}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
   
    

      </div>
    </nav>
  );
};

export default Header;
