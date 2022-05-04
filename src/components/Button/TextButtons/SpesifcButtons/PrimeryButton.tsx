import Buttons from '../SetHoverInButton'
import { ITextIcon } from '@type/ITextIcons'
import { Color } from 'enum/color'

const TextButton = ({ TextOfTheButton }: ITextIcon) => {
  return (
    <Buttons
      TextOfTheButton={TextOfTheButton}
      background={Color.Primery}
      border={Color.Primery}
      color={Color.White}
      hoverbackground={Color.Secondery}
      hoverborder={Color.Secondery}
      hovercolor={Color.White}
    />
  )
}

export default TextButton
