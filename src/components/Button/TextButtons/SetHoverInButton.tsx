/* eslint-disable unicorn/consistent-function-scoping */
import React, { MouseEvent } from 'react'
import { Button } from 'antd'
import { ITextButons, ITextButonsStyle } from '@type/ITextIcons'

const defaultProps: ITextButonsStyle = {
  background: '#E10856',
  border: '#E10856',
  color: 'white',
  hoverbackground: '#E10856',
  hoverborder: '#E10856',
  hovercolor: 'white'
}

const SetStyleButtons = (e: MouseEvent<HTMLDivElement>, _background: string, _border: string, _color: string) => {
  const box: HTMLDivElement = e.currentTarget
  box.style.backgroundColor = _background
  box.style.border = _border
  box.style.color = _color
}

const Buttons = ({ TextOfTheButton, background, border, color, hoverbackground, hoverborder, hovercolor }: ITextButons) => {
  return (
    <div className="text-button">
      <Button
        type="text"
        className="roboto-medium-500"
        style={{ background, border, color }}
        onMouseEnter={(event: MouseEvent<HTMLDivElement>) => {
          SetStyleButtons(event, hoverbackground, hoverborder, hovercolor)
        }}
        onMouseLeave={(event: MouseEvent<HTMLDivElement>) => {
          SetStyleButtons(event, background, border, color)
        }}
      >
        {TextOfTheButton}
      </Button>
    </div>
  )
}
Button.defaultProps = defaultProps
export default Buttons
