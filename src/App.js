import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import AboutMe from "./components/about-me/AboutMe"
import MyServices from "./components/my-services/MyServices"
import MyProjects from "./components/my-projects/MyProjects"
import MySkills from "./components/my-skills/MySkills"   
import Contact from "./components/Contact-me/Contact"
import Footer from "./components/footer/Footer"



function App(){

  return (
       <>
       
           <Header/>      
           <Intro/>
           <AboutMe/>
           <MyServices/>
           <MyProjects/>
           <MySkills/>
           <Contact/>
           <Footer/>
       </>
      
  )
}

export default App