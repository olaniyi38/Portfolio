import { Card, CardContent, CardMedia } from "@material-ui/core"
import gsap from 'gsap/gsap-core'
import webDesign from "../../media/pngs/web-design.png"
import mobileWebPng from "../../media/pngs/ui-design.png"
import responsivePng from '../../media/pngs/responsive.png'
import fastWebPng from '../../media/pngs/fast-access.png'
import { useEffect } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"


const MyServices = () => {
    gsap.registerPlugin(ScrollTrigger)

   let tl =gsap.timeline()
    useEffect(()=>{
        tl.from('#my-services .service-card',{
            y:-50,
            opacity:0,
            duration:2,
            stagger:.5,
            scrollTrigger:{
                trigger:'#my-services',
                start:'center bottom'
            }
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
                        <h3>Audience converting designs</h3>
                    I can help you create visually stunning designs aimed at creating a great experience for visitors.
                     Carefully structuring it to convince the audience to take action
                     
                    </CardContent>
                </Card>

                <Card className="service-card">
                    <CardMedia>
                    <img src={mobileWebPng} alt=""/>
                    </CardMedia>
                    <CardContent className="card-body">
                        <h3>Interactive UI</h3>
                       
                    </CardContent>
                </Card>

                <Card className="service-card">
                    <CardMedia>
                    <img src={responsivePng} alt=""/>
                    </CardMedia>
                    <CardContent className="card-body">
                        <h3>Responsive Web Apps</h3>
                       Your website will be optimized and designed for a range of devices
                    </CardContent>
                </Card>
                
                <Card className="service-card">
                    <CardMedia>
                    <img src={fastWebPng} alt=""/>
                    </CardMedia>
                    <CardContent className="card-body">
                        <h3>Fast Websites</h3>

                    </CardContent>
                </Card>
                
            </div>
        </div>
    )
}

export default MyServices

