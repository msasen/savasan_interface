interface ITextIcon {
  TextOfTheButton: string
  type: 'primeryButton' | 'seconderyButton' | 'tertiaryyButton' | 'quaternaryButton'
}
interface ITextButonsStyle {
  background: string
  border: string
  color: string
  hoverbackground: string
  hoverborder: string
  hovercolor: string
}
interface IButonText {
  TextOfTheButton: string
}

interface ITextButons extends ITextButonsStyle, IButonText {}

export type { ITextIcon, ITextButons, ITextButonsStyle }
