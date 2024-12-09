import Header from "@/components/Header"
import Presentation from "@/components/Presentation"
import AboutMe from "@/components/AboutMe"
import Project from "@/components/Project"
import Experience from "@/components/Experience"
import Contact from "./Contact"
const Home= (params) => {
    return(
        <>
        <div className='h-screen '>
          <Presentation/>
          <Project/>
          <AboutMe/>
          <Experience/>
          <Contact/>
    
         </div>
        </>
    )  
}

export default Home
