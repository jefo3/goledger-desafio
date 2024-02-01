import React from 'react'

import { IPropsElementsDiv } from '.'

interface IProps extends IPropsElementsDiv {
  children: React.ReactNode
  isOpen: boolean
}

export const ModalRoot = ({ children, isOpen, className, ...props }: IProps) => {
  return (
    isOpen && (
      <div
        className={`${className} flex fixed overflow-y-auto overflow-x-hidden inset-y-0 inset-x-0 z-50 w-full h-screen`}
        {...props}
      >
        {children}
      </div>
    )
  )
}
