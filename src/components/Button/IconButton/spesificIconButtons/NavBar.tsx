import Icons from '@components/Icons/Index'
import { Button } from 'antd'
import * as React from 'react'

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  return (
    <div className="navbar-icon-button">
      <Button>
        <Icons Type="Map" Default />
      </Button>
      <Button>
        <Icons Type="Puzzle" Default />
      </Button>
      <Button>
        <Icons Type="Setting" Default />
      </Button>
      <Button>
        <Icons Type="World" Default />
      </Button>
    </div>
  )
}

export default NavBar
