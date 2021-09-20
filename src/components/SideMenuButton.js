import { IconButton } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

const SideMenuButton = ({toggleMenu,active}) => {
    return (
        <>
         <IconButton className={`menu-button ${active ? 'active' : ''} `} onClick={toggleMenu}>
<<<<<<< HEAD
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
=======
           <div className="icon"></div>
>>>>>>> 6e81457d72e99113136f878ef338bede3c204709
         </IconButton>
        </>
    )
}

export default SideMenuButton
