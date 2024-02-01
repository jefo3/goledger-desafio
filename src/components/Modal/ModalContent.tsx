import React from 'react'

import { IPropsElementsDiv } from '.'

interface IProps extends IPropsElementsDiv {
  children: React.ReactNode
}

export const ModalContent = ({ children, className, ...props }: IProps) => {
  return (
    <div className={`absolute ${className}`} {...props}>
      {children}
    </div>
  )
}
