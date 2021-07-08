import { Card, CardContent, CardMedia } from "@material-ui/core"
import gsap from 'gsap/gsap-core'
import webDesign from "../../media/pngs/web-design.png"
import mobileWebPng from "../../media/pngs/ui-design.png"
import responsivePng from '../../media/pngs/responsive.png'
import fastWebPng from '../../media/pngs/fast-access.png'
import { useEffect } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"

const MyServices = () => {
   let tl =gsap.timeline()
    useEffect(()=>{
        tl.from('#my-services .service-card',{
            y:50,
            opacity:0,
            duration:1,
            stagger:.5,
            scrollTrigger:'#my-services'
        })
    })


    return (
        <div id="my-services">
            <h1 className="section-title">What i can do for you...</h1>
            <div className="container">
                <Card className="service-card">
                    <CardMedia className="card-img">
                   <img src={webDesign} alt=""/>
                    </CardMedia>
                    <CardContent className="card-body">
                        <h3>Visually Stunning designs</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus delectus. Recusandae laborum nostrum similique incidunt! Eum explicabo architecto ab?
                    </CardContent>
                </Card>

                <Card className="service-card">
                    <CardMedia>
                    <img src={mobileWebPng} alt=""/>
                    </CardMedia>
                    <CardContent className="card-body">
                        <h3>Interactive UI</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus delectus. Recusandae laborum nostrum similique incidunt! Eum explicabo architecto ab?
                    </CardContent>
                </Card>

                <Card className="service-card">
                    <CardMedia>
                    <img src={responsivePng} alt=""/>
                    </CardMedia>
                    <CardContent className="card-body">
                        <h3>Responsive Web Apps</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus delectus. Recusandae laborum nostrum similique incidunt! Eum explicabo architecto ab?
                    </CardContent>
                </Card>
                
                <Card className="service-card">
                    <CardMedia>
                    <img src={fastWebPng} alt=""/>
                    </CardMedia>
                    <CardContent className="card-body">
                        <h3>Fast Websites</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus delectus. Recusandae laborum nostrum similique incidunt! Eum explicabo architecto ab?
                    </CardContent>
                </Card>
                
            </div>
        </div>
    )
}

export default MyServices

