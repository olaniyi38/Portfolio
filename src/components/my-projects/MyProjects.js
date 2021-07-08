import tindogPng from '../../media/pngs/tindog.png'
import Project from './Project'


const MyProjects = () => {
    return (
        <section id="my-projects">
           <div className="container">
           <h1 className="section-title">My previous projects</h1>
                  <div className="projects">
                    
                    <Project 
                    src={tindogPng}
                    name="Tindog"
                    about="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti, non unde cumque
                     enim excepturi rem earum saepe iste optio accusamus?
                    "
                    /> 

                    <Project 
                    src={tindogPng}
                    name="Tindog"
                    about="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti, non unde cumque
                     enim excepturi rem earum saepe iste optio accusamus?
                    "
                    />

                    <Project 
                    src={tindogPng}
                    name="Tindog"
                    about="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti, non unde cumque
                     enim excepturi rem earum saepe iste optio accusamus?
                    "
                    />

                    <Project 
                    src={tindogPng}
                    name="Tindog"
                    about="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti, non unde cumque
                     enim excepturi rem earum saepe iste optio accusamus?
                    "
                    />                    
                  </div>      
            </div>                         
        </section>
    )
}

export default MyProjects
