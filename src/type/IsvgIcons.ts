import IColor from './IColors'

interface ISvgIconsOptionalProp {
  Colors: IColor
  Background: IColor
  BorderLengh: string
  Scale: number
  isDefault: boolean
}
type ISvgIconType =
  | 'Account'
  | 'Calendar'
  | 'ChevronDown'
  | 'ChevronLeft'
  | 'ChevronRight'
  | 'ChevronUp'
  | 'Clock'
  | 'Close'
  | 'Demo陌cons'
  | 'Expand'
  | 'Gallery'
  | 'GetSvgIcons'
  | 'Home'
  | 'index'
  | 'Menu'
  | 'Minus'
  | 'Movie'
  | 'Pause'
  | 'Play'
  | 'Search'
  | 'Settings'
  | 'StarFill'
  | 'StarStroke'
  | 'Tv'
interface ISvgIconsRequiredProps {
  Type: ISvgIconType
}
interface ISvgIcons extends ISvgIconsRequiredProps, ISvgIconsOptionalProp {}
export type { ISvgIconsOptionalProp, ISvgIcons }
export default ISvgIconType
