import React from 'react'

import { IPropsElementsDiv } from '.'

interface IProps extends IPropsElementsDiv {
  children: React.ReactNode
}

export const ModalFooter = ({ children, ...props }: IProps) => {
  return <div {...props}>{children}</div>
}
