import gsap from "gsap/gsap-core"
import { useEffect } from "react"



const AboutMe = () => {
 let tl = gsap.timeline()
  
 useEffect(()=>{
   tl.to('#about-me .container',{
    css:{visibility:'visible'}  
   })
   .from('#about-me .content',{
     duration:2,
     y:20,
     opacity:0
   })
 })

  return (
        
            <div id="about-me">
                 <div className="container">
                 <h1 className="section-title">Nice to meet you.</h1>
                 <div className="content">
                     I'm a student in nigeria, i have 3+ years of experience in front-end development already venturing into fullstack development. I have always been interested in programming 
                     since i was little so i'm really passionate about what i do i just love problem-solving and that creative experience. I belive you will be making the right choice by hiring me to 
                     bring your amazing idea to life. 
                 </div>
                 </div>
            </div>         
        
    )
}

export default AboutMe
