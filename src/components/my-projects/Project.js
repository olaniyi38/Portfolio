import {Link} from '@material-ui/icons/'
import { Card, CardContent, CardMedia,Button } from "@material-ui/core"

const Project = ({src,name,about,languages,link}) => {
return (
    <>
        <Card className="project">
            <CardMedia className="project-img">
                <img src={src} alt="" />
                <div className="visit">
                    <a href={link} target="blank">
                        <Button variant="contained">Visit Website
                            <Link />
                        </Button>
                    </a>
                </div>
            </CardMedia>
            <CardContent className="about-project">
                <h3>{name}</h3>
                <p className='about'>
                    {about}
                </p>
                <p className="languages" style={{
                 fontWeight:'600'
            }}>
                    Tech used: {languages}
                </p>


            </CardContent>
        </Card>
    </>

)
}

export default Project