import Header from "@/components/Header"
import Presentation from "@/components/Presentation"
import AboutMe from "@/components/AboutMe"
import Project from "@/components/Project"
import Experience from "@/components/Experience"
import Contact from "./Contact"
import Footer from "@/components/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Hire from "@/components/Hire"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import ToastProvider from "@/components/reusable/ToastProvider"
import React, { lazy, Suspense } from "react";
const Home= (params) => {
  
    
    return(
        <>
       
           <ToastProvider />
      <Suspense fallback={<div>Chargement...</div>}>
        <main className="h-screen w-full">
          <Hire />
          <Presentation />
          <AboutMe />
          <Project />
          <Skills />
          <Education />
          <Experience />
     
          <Contact />
          <Footer />
        </main>
      </Suspense>
        </>
    )  
}

export default Home
