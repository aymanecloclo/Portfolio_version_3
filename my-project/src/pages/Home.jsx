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
const Home= (params) => {
  
    
    return(
        <>
        <ToastContainer
        position="top-right"
        autoClose={5000}  // Durée d'affichage de la notification
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <div className='h-screen w-full  '>
           <Hire/>
          <Presentation/>
          <Project/>
          <AboutMe/>
           <Skills/>
          <Education/>
          <Experience/>
          <Contact/>
          <Footer/> 
    
         </div>
        </>
    )  
}

export default Home
