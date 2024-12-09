import Header from "@/components/Header"
import Presentation from "@/components/Presentation"
import AboutMe from "@/components/AboutMe"
import Project from "@/components/Project"
import Experience from "@/components/Experience"
import Contact from "./Contact"
import Footer from "@/components/Footer"
const Home= (params) => {
    return(
        <>
        <div className='h-screen '>
          <Presentation/>
          <Project/>
          <AboutMe/>
          <Experience/>
          <Contact/>
          <Footer/> 
    
         </div>
        </>
    )  
}

export default Home
