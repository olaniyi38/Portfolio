import { IconButton } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

const SideMenuButton = ({toggleMenu,active}) => {
    return (
        <>
         <IconButton className={`menu-button ${active ? 'active' : ''} `} onClick={toggleMenu}>
           <div className="icon"></div>
         </IconButton>
        </>
    )
}

export default SideMenuButton
