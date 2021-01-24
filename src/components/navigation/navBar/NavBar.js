import React from 'react'
import PropTypes from 'prop-types'

import NavBarItem from './navBarItem/NavBarItem'

import classes from './NavBar.module.css'

const NavBar = (props) => {

    return (
      <div className={classes.NavBar}>
          <div className={classes.LogoContainer}></div>
          <div className={classes.NavItemContainer}>
              {props.items.map(el => {
                  return <NavBarItem link={el.link}>{el.label}</NavBarItem>
              })}
          </div>
      </div>
    )

}



export default NavBar