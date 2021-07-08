import {useRef,useEffect} from 'react'
import { Button } from "@material-ui/core"
import WavesSvg from '../../media/svgs/wave (1).svg'
import helloPng from '../../media/pngs/hello.png'
import {gsap} from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
 

const Intro = () => {
    let cover = CSSRulePlugin.getRule('#intro .container div:first-child h1:before')
    useEffect(() => {
        let tl =gsap.timeline()
        tl.to('#intro .container',{
            visibility:'visible'
        })
        .to(
        cover,
        { cssRule : {x:-1000},duration:1}
        )
       
        console.log(cover)
    }, [])
    return (
        <section id="intro">
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
            <img src={WavesSvg}  className="wave-png" />
            
        </section>
    )
}

export default Intro
