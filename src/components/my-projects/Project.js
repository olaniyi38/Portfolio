import Button from '@material-ui/core/Button/Button'
import {Link} from '@material-ui/icons/'


const Project = ({src,name,about}) => {
return (
<div className="project">
    <div className="project-img">
        <img src={src}  alt="" />
        <div className="visit">
            <Button variant="contained">Visit Website
                <Link /> </Button>
        </div>
    </div>
    <div className="about-project">
        <h3>{name}</h3>
        <p>
            {about}
        </p>
        
    </div>
</div>
)
}

export default Project