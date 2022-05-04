import * as React from 'react'

const SvgExpand = props => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="CurrentColor" stroke="CurrentColor" d="M2.5 11.5h19v1h-19z" />
    <path fill="CurrentColor" stroke="CurrentColor" d="M11.5 21.5v-19h1v19z" />
  </svg>
)

export default SvgExpand
