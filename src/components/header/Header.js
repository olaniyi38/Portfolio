import { AppBar} from "@material-ui/core"
import { useEffect } from "react"
import { useState } from "react"
import SideMenuButton from "../SideMenuButton"


const Header = () => {

const [isActive, setIsActive] = useState(false)

const toggleMenu=()=>{
setIsActive(!isActive)
}


    let navItems = document.querySelectorAll('#header .mobile-nav .nav-link')
    navItems.forEach((navitem)=>{
        navitem.addEventListener('click',()=>{
            toggleMenu()
        })
    })

return (
<AppBar id="header" position="fixed" color="default">
    <nav>

        <div className="desktop-nav">
            <p className="navbar-title">Sodiq.</p>
            <SideMenuButton toggleMenu={toggleMenu} active={isActive} />
            <ul className="desktop-nav">
                <li className="nav-item">
                    <a href="#about-me" className="nav-link">About Me</a>
                </li>
                <li className="nav-item">
                    <a href="#my-projects" className=" nav-link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact Me</a>
                </li>
            </ul>
        </div>

        <div className={`mobile-nav ${isActive ? 'active' : ''}`}>
            <ul>
                <li className="nav-item">
                    <a href="#about-me" className="nav-link">About Me</a>
                </li>
                <li className="nav-item">
                    <a href="#my-projects" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact Me</a>
                </li>
            </ul>
        </div>

    </nav>
</AppBar>
)

}

export default Header