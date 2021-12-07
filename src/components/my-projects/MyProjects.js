import project1 from '../../media/pngs/room-homepage.jpg'
import project2 from '../../media/pngs/easy-bank.png'
import project3 from '../../media/pngs/task-tracker.png'
import Project from './Project'
import gsap from 'gsap/gsap-core'
import { useEffect } from 'react'



const MyProjects = () => {
     let tl = gsap.timeline()
    // useEffect(() => {
    //   tl.to('#my-projects .project .project-img',{
    //    duration:.5,
    //    y:3,
    //    yoyo:true,
    //    repeat:-1,
    //    yoyoEase:'back.inOut()'
    //   })   
    
       
    // }, [])

    return (
      <section id="my-projects">
         <div className="container">
         <h1 className="section-title">My previous projects</h1>
                <div className="projects">
                  
                  <Project 
                  src={project1}
                  name="Room homepage"
                  about="
                  A front-end mentor project, a landing page for a interior design business aimed at showcasing
                   products and converting customers.
                  "
                  link="https://olaniyi38.github.io/room-homepage"
                  languages="HTML, CSS, JS, react..."
                  /> 

                  <Project 
                  src={project2}
                  name="Easy bank"
                  about="
                  A front-end mentor project, a landing page for a microfinance bank aimed at highlighting its 
                  features for customers and for brand exposure.
                  "
                  languages="HTML, CSS, JS, react, gsap, material-ui..."
                  link="https://olaniyi38.github.io/easy-bank-ui"
                  />

                  <Project 
                  src={project3}
                  name="Task Tracker app"
                  about="
                  An app using local storage API to allow adding and removing of tasks. An also a reminder setting.
                  "
                  languages="HTML, CSS, JS, react, bootstrap..."
                  link="https://olaniyi38.github.io/my-app" 
                  />
            
                </div>      
          </div>                         
      </section>

    )
}

export default MyProjects
