import Button from '@material-ui/core/Button/Button'
import {Link} from '@material-ui/icons/'


const Project = ({src,name,about,languages}) => {
return (
<div className="project">
    <div className="project-img">
        <img src={src}  alt="" />
        <div className="visit">
            <Button variant="contained">Visit Website
                <Link /> </Button>
        </div>
    </div>
    <div className="about-project" style={{position:'relative'}}>
        <h3>{name}</h3>
        <p className='about'>
            {about}
        </p>
            <p className="languages" style={{
                 position:' absolute',
                 bottom: '20px',
                 fontWeight:'700'
            }}>
                Tech used: {languages}
            </p>
        
    </div>
</div>
)
}

export default Project