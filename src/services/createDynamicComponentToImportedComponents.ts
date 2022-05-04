/* eslint-disable security/detect-object-injection */
import * as Icons from '@components/icons/SvgIcons'
import ISvgIconType from '@type/IsvgIcons'

const CreateDynamicComponentToImportedComponents = (Type: ISvgIconType) => {
  // @ts-ignore: Unreachable code error
  // eslint-disable-next-line sonarjs/prefer-immediate-return
  const DynamicComponent = Icons[Type]
  return DynamicComponent
}
export default CreateDynamicComponentToImportedComponents
