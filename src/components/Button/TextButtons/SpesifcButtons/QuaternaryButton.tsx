import Buttons from '../SetHoverInButton'
import { ITextIcon } from '@type/ITextIcons'
import { Color } from 'enum/color'

const TextButton = ({ TextOfTheButton }: ITextIcon) => {
  return (
    <Buttons
      TextOfTheButton={TextOfTheButton}
      background={Color.Tertiary}
      border="red"
      color={Color.White}
      hoverbackground="#2C2C2C4D"
      hoverborder="red"
      hovercolor={Color.White}
    />
  )
}

export default TextButton
