import Buttons from '../SetHoverInButton'
import { ITextIcon } from '@type/ITextIcons'
import { Color } from 'enum/color'

const TextButton = ({ TextOfTheButton }: ITextIcon) => {
  return (
    <Buttons
      TextOfTheButton={TextOfTheButton}
      background={Color.Tertiary}
      border={Color.Primery}
      color={Color.White}
      hoverbackground="#2C2C2C"
      hoverborder={Color.Primery}
      hovercolor={Color.White}
    />
  )
}

export default TextButton
