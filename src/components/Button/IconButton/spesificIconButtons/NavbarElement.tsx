import Icons from '@components/Icons/Index'
import ISvgIconType from '@type/IsvgIcons'
import { Button } from 'antd'
import * as React from 'react'

interface INavBarElementProps {
  Type: ISvgIconType
}

const NavBarElement: React.FunctionComponent<INavBarElementProps> = ({ Type }) => {
  return (
    <div className="navbar-icon-button">
      <Button>
        <Icons Type={Type} Default />
      </Button>
    </div>
  )
}

export default NavBarElement
