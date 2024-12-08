import Header from "@/components/Header"
import Presentation from "@/components/Presentation"
import AboutMe from "@/components/AboutMe"
import Project from "@/components/Project"
const Home= (params) => {
    return(
        <>
        <div className='h-screen'>
          <Presentation/>
          <Project/>
    
         </div>
        </>
    )  
}

export default Home
