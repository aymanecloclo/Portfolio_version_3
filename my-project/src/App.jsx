import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { ThemeProvider } from "./components/theme-provider"
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Header from './components/Header';
import  Accomplishments from '../src/pages/Accomplishments'
import WhatsAppLink from './components/WhatsAppLink';

export default function App({children}) {

  
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
 
      <Router>
      <Header/>
        <Routes>
       
           <Route path='/' element={<Home/>}/>
           <Route path='/Accomplishments' element={<Accomplishments/>}/>
        
           
        </Routes>
        <WhatsAppLink/>
       
      </Router>
      
    </ThemeProvider >
  );
}
