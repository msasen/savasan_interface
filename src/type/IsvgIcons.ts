import IColor from './IColors'

interface ISvgIconsOptionalProp {
  Colors: IColor
  Background: IColor
  BorderLengh: string
  Scale: number
  Default: boolean
}
type ISvgIconType = 'Map' | 'World' | 'Puzzle' | 'Setting'
interface ISvgIconsRequiredProps {
  Type: ISvgIconType
}
interface ISvgIcons extends ISvgIconsRequiredProps, ISvgIconsOptionalProp {}
export type { ISvgIconsOptionalProp, ISvgIcons }
export default ISvgIconType
