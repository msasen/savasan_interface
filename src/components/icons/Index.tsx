/* eslint-disable security/detect-object-injection */

import CreateDynamicComponentToImportedComponents from 'services/createDynamicComponentToImportedComponents'
import { ISvgIcons, ISvgIconsOptionalProp } from '@type/IsvgIcons'
import { Color } from 'enum/color'

const optionalProps: ISvgIconsOptionalProp = {
  Colors: Color.Black,
  Background: Color.White,
  BorderLengh: '40px',
  Scale: 1,
  isDefault: false
}

const Icons = (props: ISvgIcons) => {
  const { Type, Colors, Background, BorderLengh, Scale, isDefault } = props
  const IconComponent = CreateDynamicComponentToImportedComponents(Type)
  return isDefault ? (
    <IconComponent />
  ) : (
    <div>
      <div
        style={{
          background: Background,
          width: BorderLengh,
          height: BorderLengh,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: Colors
        }}
      >
        <IconComponent style={{ transform: `scale(${Scale})` }} />
      </div>
    </div>
  )
}
Icons.defaultProps = optionalProps
export default Icons
