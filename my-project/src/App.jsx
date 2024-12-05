import { useState, useEffect } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import { ThemeProvider } from "./components/theme-provider"
import  AboutMe from './components/AboutMe'
export default function App({children}) {

  
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    <div className='h-screen'>
      <Header />
      <Presentation/>
      <AboutMe/>
     
      {/* Le reste de ton contenu */}
    </div>
    </ThemeProvider >
  );
}
