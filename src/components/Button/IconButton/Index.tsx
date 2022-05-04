import { Button } from 'antd/lib'
import { Home } from '@components/icons/SvgIcons'
// type Props = {}

const IconButton = () => {
  return (
    <div className="icon-button">
      <Button>
        <Home style={{ transform: 'scale(0.65)' }} />
      </Button>
    </div>
  )
}

export default IconButton
