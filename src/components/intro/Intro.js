import {useRef,useEffect} from 'react'
import { Button } from "@material-ui/core"
import WavesSvg from '../../media/svgs/wave (1).svg'
import helloPng from '../../media/pngs/hello.png'
import {gsap} from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
 

const Intro = () => {
    let tl = gsap.timeline()

    useEffect(() => {
         tl.to('#intro .container',{visibility:'visible'})
         .to('#intro .bg-dark div',{
             duration:1,
             scaleY:0,
             transformOrigin:'bottom',
             stagger:.3,
             delay:.8
         }).from('#intro .container h1',{
             duration:.8,
             y:10,
             stagger:.5,
             opacity:0
         },'-=.5').from('#intro .illustration',{opacity:0,duration:1})
         .from('#intro .container h4',{
            duration:.5,
            y:10,
            opacity:0
         }).from('#intro .container button',{
             duration:1,
             x:-10,
             opacity:0
         },'-=.3')
         .to('#intro .bg-dark',{
            display:'none'
        })
    }, [])

    return (
        <section id="intro">
            <div className="bg-dark">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="container">
            <div>
                <h1>Hello  My name is Sodiq Bamidele-Alao.</h1>
                <h1>I'm a frontend developer</h1>
                <h4  style={{margin:'1rem 0rem'}}>Click the button below let me tell you what i can do for you</h4>
            <Button variant="outlined" >Lets Go!</Button>
            </div>
            <div className="illustration">
              <img src={helloPng} alt="" />
            </div>
            </div>
            <img src={WavesSvg} alt="wave" className="wave-png" />
            
        </section>
    )
}

export default Intro
