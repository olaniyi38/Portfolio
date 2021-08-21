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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam modi est ea quasi. Sint, facilis! Sapiente deserunt minus tempora asperiores ducimus facilis nulla distinctio, autem dolores optio ut vitae.
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis voluptatem error excepturi vel eligendi expedita, enim ducimus illum odit veniam magni aliquam? Nesciunt error illo quibusdam, ipsa cum libero nisi possimus harum expedita vitae? Pariatur quas voluptate, molestiae facere eos maxime repellendus, asperiores molestias minima adipisci atque, libero autem.
                 </div>
                 </div>
            </div>         
        
    )
}

export default AboutMe
