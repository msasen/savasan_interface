import NavBarElement from '@components/Button/IconButton/spesificIconButtons/NavbarElement'
import * as React from 'react'

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <NavBarElement Type="Icon" />
      </div>
      <NavBarElement Type="Map" />
      <NavBarElement Type="Puzzle" />
      <NavBarElement Type="Setting" />
      <NavBarElement Type="World" />
      <div className="navbar-bottom">
        <NavBarElement Type="Setting" />
      </div>
    </div>
  )
}

export default NavBar
