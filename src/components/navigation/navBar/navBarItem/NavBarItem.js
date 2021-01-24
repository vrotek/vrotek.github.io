import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './NavBarItem.module.css'

const NavBarItem = (props) => {

    return (
      <div><NavLink className={classes.Link} to={props.link}>{props.children}</NavLink></div>
    )

}
export default NavBarItem